// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Ticketing1155 is ERC1155  {
    address payable platformOwner;
     using Counters for Counters.Counter;

     //token id counter
    Counters.Counter private tokenIdCounter;    
    constructor() ERC1155("") {
        platformOwner=payable(msg.sender);
    }
    function setURI(string memory uri) public onlyOwner{
        _setURI(uri);
    }

    modifier onlyOwner(){
        require(msg.sender==platformOwner,"Only owner can perform this operation");
        _;
    }

       // when organisers create an event they have to pay a small fee to the admin
    uint public eventCreationPrice=0.0002 ether;    

    function changeEventCreationPrice(uint _eventCreationPrice) public onlyOwner{
        eventCreationPrice=_eventCreationPrice;
    }

    //ticket structure
    struct Tickettoken{
        uint tokenId;
        uint price;
        uint maxSupply;
        uint currentSupply;
        address organiser;
        address owner;
        bool isActive;
    }
     mapping(uint =>Tickettoken) idToTicket;

    function getCurrentTokenId() public view returns(uint256){
        return tokenIdCounter.current();
    }

    function getTicketDetails(uint _tokenId) public view returns(Tickettoken memory){
        uint currentMaxTokenId=tokenIdCounter.current();
        require(_tokenId<=currentMaxTokenId,"Token id does not exist");
        return idToTicket[_tokenId];
    }

     //we will get the IPFS uri , price and max tickets from the organiser, only organiser can mint
    function createEventToken(string memory uri,uint price,uint amount) public payable{
        //pre conditions
        require(msg.value>=eventCreationPrice,"Please pay the price for listing your event!!");
        require(price>0,"Please enter a valid price");

        //tokenid starts from 1
        tokenIdCounter.increment();
        uint currentTokenId=tokenIdCounter.current();
        //safemint the token to organiser with token id of ticket
        _mint(msg.sender, currentTokenId, amount, "");
        //associate tokenid to tokenURI
        _setURI(uri);

        //add the ticket token to the hashmap -> amount is the maxsupply
        idToTicket[currentTokenId]=Tickettoken(currentTokenId,price,amount,amount,payable(msg.sender),payable(address(this)),true);

        //transfer ownership of all tokens(amount) from organiser to contract so its easy to transfer it to user later (without approval)
        // _safeTransferFrom(msg.sender, address(this), currentTokenId, amount, "");

            payable(platformOwner).transfer(msg.value);


    }

     //function to return all event tickets (for gallery)
    function getAllEventTokens() public view returns(Tickettoken[] memory){
        uint ticketCount=tokenIdCounter.current();

       Tickettoken[] memory tickets=new Tickettoken[](ticketCount);
       //iterate from 1 to current token id and get ticket token from hashmap , put it in array
        uint currentIndex=0;
       for(uint i=1;i<=ticketCount;i++){
           //get currenttoken and add to array
           Tickettoken memory currentToken=idToTicket[i];
           tickets[currentIndex]=currentToken;
           currentIndex+=1;
          
       }
       return tickets;

    }

     //function to get tickets that the specific user owns
    function getUserEventTokens() public view returns(Tickettoken[] memory){
        //first traverse all tickets and find owned tickets, then allot array and get the tokens
       uint totalTicketCount=tokenIdCounter.current();
        uint userTicketCount=0;
       for(uint i=1;i<=totalTicketCount;i++){
           Tickettoken memory currentToken=idToTicket[i];
           if(currentToken.organiser==msg.sender || currentToken.owner==msg.sender){
               userTicketCount++;
           }
       }
       //create an array of userTicketCOunt tokens
       Tickettoken[] memory tickets=new Tickettoken[](userTicketCount);
       uint index=0;

       //traverse again and get the tickets
       for(uint i=1;i<=totalTicketCount;i++){
           Tickettoken memory currentToken=idToTicket[i];
           tickets[index]=currentToken;
           index++;
       }

       return tickets;

    }


    function executeSale(uint tokenId,uint amount) payable public{
        Tickettoken memory token=idToTicket[tokenId];
        uint currentSupply=token.currentSupply;
        uint price=token.price;
        address organiser=token.organiser;
        //check if enough tickets available
        require(currentSupply-amount>=0,"Not enough tickets available!!");
        require(msg.value>=price,"Please pay the correct price!");

        //  _safeTransferFrom(address(this), msg.sender, tokenId, amount, "");

         //for every sale I will get money :)
  
         payable(organiser).transfer(msg.value);

         //change currentsupply 
         token.currentSupply=currentSupply-amount;

    }

    // function mint(address account, uint256 id, uint256 amount)
    //     public
    //     onlyOwner
    // {
    //     _mint(account, id, amount, "");
    // }

    // function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
    //     public
    //     onlyOwner
    // {
    //     _mintBatch(to, ids, amounts, data);
    // }
}











    

import { useState, React } from "react";
import UserTicketCard from "./UserTicketCard";
import Navbar from "./Navbar";
import { GetIpfsUrlFromPinata } from "../pinata.js";
import axios from "axios";
import TicketingSystem from "../TicketingSystem.json";

function UserGallery() {
  const [userData, updateUserData] = useState([]);
  const [userDataFetched, updateGalleryFetched] = useState(false);

  async function getAllTickets() {
    const ethers = require("ethers");
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    //create contract object
    const contract = new ethers.Contract(
      TicketingSystem.address,
      TicketingSystem.ticketingjson.abi, //the abi
      signer
    );
    let eventprice = await contract.eventCreationPrice();

    //create an NFT Token
    let transaction = await contract.getUserEventTokens();

    //Fetch all the details of every NFT from the contract and display
    const items = await Promise.all(
      transaction.map(async (i) => {
        console.log(i);
        var tokenURI = i.tokenUri;

        tokenURI = GetIpfsUrlFromPinata(tokenURI);
        console.log("getting this tokenUri", tokenURI);
        //getting token data from ipfs
        let meta = await axios.get(tokenURI);
        meta = meta.data;
        console.log(meta);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          organiser: i.organiser,
          owner: i.owner,
          image: meta.image,
          name: meta.name,
          description: meta.description,
          currentSupply: i.currentSupply,
        };

        return item;
      })
    );
    updateGalleryFetched(true);
    updateUserData(items);
  }

  if (!userDataFetched) getAllTickets();
  return (
    <>
      <Navbar />
      <div className="container grid grid-cols-3 justify-center items-center">
        {userData.map((value, index) => {
          return <UserTicketCard data={value} key={index}></UserTicketCard>;
        })}
      </div>
    </>
  );
}

export default UserGallery;

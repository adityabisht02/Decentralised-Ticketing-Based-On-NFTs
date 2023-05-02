import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GetIpfsUrlFromPinata } from "../pinata.js";
import TicketingSystem from "../TicketingSystem.json";

function TicketCard(props) {
  const IPFSUrl = GetIpfsUrlFromPinata(props.data.image);
  const ticketData = props.data;

  async function buyNFT() {
    try {
      const ethers = require("ethers");
      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tokenId = ticketData.tokenId;
      // const amount = ticketData.amount;
      const amount = 2;
      //Pull the deployed contract instance
      let contract = new ethers.Contract(
        TicketingSystem.address,
        TicketingSystem.ticketingjson.abi,
        signer
      );
      //format units converts it to wei
      // let salePrice = ethers.utils.formatUnits("0.09", "ether");

      //run the executeSale function
      let salePrice = ethers.utils.parseEther("0.02");
      let transaction = await contract.executeSale(tokenId, amount, {
        value: salePrice,
      });
      await transaction.wait();

      alert("You successfully bought the NFT!");
    } catch (e) {
      alert("Upload Error" + e);
    }
  }

  return (
    <div className="container flex-col mx-20  my-10 text-center items-center justify-center border w-3/4 relative h-fit ml-1/4 border-solid">
      <img src={IPFSUrl} alt="ticket" className="mx-auto w-fit"></img>
      <p className="font-bold">{props.data.name}</p>
      <p>{props.data.price}</p>
      <p>{props.data.description}</p>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
        id="name"
        type="number"
        min="0"
        placeholder="No of tickets u wanna purchase"
      ></input>

      <button
        className="bg-red-bg-btn w-full p-3 text-white font-bold hover:bg-red-500"
        onClick={buyNFT}
      >
        Book Tickets
      </button>
    </div>
  );
}

export default TicketCard;

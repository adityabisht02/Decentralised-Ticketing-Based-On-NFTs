import React from "react";
import TicketCard from "./TicketCard";
import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";
import TicketingSystem from "../TicketingSystem.json";
import { GetIpfsUrlFromPinata } from "../pinata.js";
function TicketListing() {
  // const sampleData = [
  //   {
  //     name: "NFT#1",
  //     description: "Alchemy's First NFT",
  //     website: "http://axieinfinity.io",
  //     image:
  //       "https://gateway.pinata.cloud/ipfs/QmZ5DnHnf89i5VNQTrNxnGGjPDUKHXsxcXGSBAsJgCqCF7",
  //     price: "0.03ETH",
  //     currentlySelling: "True",
  //     address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
  //   },
  //   {
  //     name: "NFT#2",
  //     description: "Alchemy's Second NFT",
  //     website: "http://axieinfinity.io",
  //     image:
  //       "https://gateway.pinata.cloud/ipfs/QmdhoL9K8my2vi3fej97foiqGmJ389SMs55oC5EdkrxF2M",
  //     price: "0.03ETH",
  //     currentlySelling: "True",
  //     address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
  //   },
  //   {
  //     name: "NFT#3",
  //     description: "Alchemy's Third NFT",
  //     website: "http://axieinfinity.io",
  //     image:
  //       "https://gateway.pinata.cloud/ipfs/QmTsRJX7r5gyubjkdmzFrKQhHv74p5wT9LdeF1m3RTqrE5",
  //     price: "0.03ETH",
  //     currentlySelling: "True",
  //     address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
  //   },
  // ];
  const [data, updateData] = useState([]);
  const [dataFetched, updateFetched] = useState(false);

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
    let transaction = await contract.getAllEventTokens();

    //Fetch all the details of every NFT from the contract and display
    const items = await Promise.all(
      transaction.map(async (i) => {
        var tokenURI = i.tokenUri;

        tokenURI = GetIpfsUrlFromPinata(tokenURI);
        console.log("getting this tokenUri", tokenURI);
        //getting token data from ipfs
        let meta = await axios.get(tokenURI);
        meta = meta.data;
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
    updateFetched(true);
    updateData(items);
  }

  if (!dataFetched) getAllTickets();
  return (
    <>
      <Navbar />
      <div className="container grid grid-cols-3 justify-center items-center">
        {data.map((value, index) => {
          return <TicketCard data={value} key={index}></TicketCard>;
        })}
      </div>
    </>
  );
}

export default TicketListing;

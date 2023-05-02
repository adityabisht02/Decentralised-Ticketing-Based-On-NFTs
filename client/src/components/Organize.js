import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";
import { useLocation } from "react-router";
import TicketingSystem from "../TicketingSystem.json";

// import { Web3Provider } from "@ethersproject/providers";
function Organize() {
  const [formParams, updateFormParams] = useState({
    name: "",
    description: "",
    price: "",
    maxTickets: 0,
  });
  const [fileURL, setFileURL] = useState(null);

  const ethers = require("ethers");
  //After adding your Hardhat network to your metamask, this code will get providers and signers
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  //used to redirect with react router
  const location = useLocation();

  async function onChangeFile(e) {
    const file = e.target.files[0];
    console.log(file.name);
    try {
      const response = await uploadFileToIPFS(file);
      if (response.success) {
        setFileURL(response.pinataURL);
        console.log("Uploaded file to IPFS and received url");
      }
    } catch (error) {
      console.log("Some error uloading file to IPFS", error);
    }
  }

  async function uploadMetadataToIPFS() {
    const { name, description, price, maxTickets } = formParams;
    if (!name || !description || !price || !maxTickets || !fileURL) {
      return;
    }
    //dont convert price to ether while pushing to ipfs let it be string
    const metadatajson = {
      name: name,
      price: price,
      description: description,
      maxTickets: maxTickets,
      image: fileURL,
    };

    try {
      const response = await uploadJSONToIPFS(metadatajson);
      //if success return the metadata URI
      if (response.success) {
        console.log("Uploaded metadata to IPFS");
        return response.pinataURL;
      }
    } catch (error) {
      console.log("error uploading metadata");
    }
  }

  async function onCreateEvent(e) {
    //prevent reload on form submit
    e.preventDefault();

    try {
      const { price, maxTickets } = formParams;
      const metadataURI = await uploadMetadataToIPFS();
      //create contract object
      const contract = new ethers.Contract(
        TicketingSystem.address,
        TicketingSystem.ticketingjson.abi, //the abi
        signer
      );
      console.log(contract);
      const parsedPrice = ethers.utils.parseUnits(price, "ether");
      let listPrice = await contract.eventCreationPrice();
      listPrice = listPrice.toString();
      let transaction = await contract.createEventToken(
        metadataURI,
        parsedPrice,
        maxTickets,
        { value: listPrice }
      );
      console.log(transaction);

      await transaction.wait();
      alert("Event created!!");
      // updateFormParams({
      //   name: "",
      //   description: "",
      //   price: "",
      //   maxTickets: "",
      // });
      window.location.replace("/ticketlisting");
    } catch (error) {
      console.log("error " + error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="">
        <div className="flex flex-col place-items-center mt-10" id="nftForm">
          <form
            className="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4"
            onSubmit={onCreateEvent}
          >
            <h3 className="text-center font-bold mb-8">Create your Event</h3>
            <div className="mb-4">
              <label
                className="block stroke-red-bg-btn  text-sm font-bold mb-2"
                htmlFor="name"
              >
                Event Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter the name of the event"
                onChange={(e) =>
                  updateFormParams({ ...formParams, name: e.target.value })
                }
                value={formParams.name}
              ></input>
            </div>
            <div className="mb-4">
              <label
                className="block stroke-red-bg-btn  text-sm font-bold mb-2"
                htmlFor="name"
              >
                Set ticket count
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="number"
                placeholder="Enter the max number of ticket that can be purchased"
                onChange={(e) =>
                  updateFormParams({
                    ...formParams,
                    maxTickets: e.target.value,
                  })
                }
                value={formParams.maxTickets}
              ></input>
            </div>
            <div className="mb-6">
              <label
                className="block stroke-red-bg-btn  text-sm font-bold mb-2"
                htmlFor="description"
              >
                Event Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                cols="40"
                rows="5"
                id="description"
                type="text"
                placeholder="Describe the event"
                onChange={(e) =>
                  updateFormParams({
                    ...formParams,
                    description: e.target.value,
                  })
                }
                value={formParams.description}
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                className="block stroke-red-bg-btn  text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price (in ETH)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Min 0.01 ETH"
                step="0.01"
                onChange={(e) =>
                  updateFormParams({ ...formParams, price: e.target.value })
                }
                value={formParams.price}
              ></input>
            </div>
            <div>
              <label
                className="block stroke-red-bg-btn  text-sm font-bold mb-2"
                htmlFor="image"
              >
                Upload Image
              </label>
              <input type={"file"} onChange={onChangeFile}></input>
            </div>
            <br></br>
            <div className="text-green text-center"></div>
            <button className="font-bold mt-10 w-full bg-red-bg-btn hover:bg-red-500  text-white rounded p-2 shadow-lg">
              List Event
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Organize;

import React from "react";
import Navbar from "./Navbar";
function Organize() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="flex flex-col place-items-center mt-10" id="nftForm">
          <form className="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4">
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
                type="text"
                placeholder="Enter the max number of ticket that can be purchased"
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

                // onChange={(e) =>
                //   updateFormParams({ ...formParams, price: e.target.value })
                // }
              ></input>
            </div>
            <div>
              <label
                className="block stroke-red-bg-btn  text-sm font-bold mb-2"
                htmlFor="image"
              >
                Upload Image
              </label>
              <input type={"file"}></input>
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

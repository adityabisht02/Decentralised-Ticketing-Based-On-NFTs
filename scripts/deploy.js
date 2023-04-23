const hre = require("hardhat");

async function main() {
  const TicketingSystem = await hre.ethers.getContractFactory("Ticketing1155");
  const contract = await TicketingSystem.deploy();

  await contract.deployed();

  console.log("Contract deployed to address " + contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

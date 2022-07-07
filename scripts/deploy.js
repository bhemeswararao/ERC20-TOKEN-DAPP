const hre = require("hardhat");
const hardhat_Ethers = require("@nomiclabs/hardhat-ethers");
const { ethers } = require("hardhat");

async function main() {
  const myToken = await hre.ethers.getContractFactory("MyToken");

  console.log("Deploying contract...");
  const token = await myToken.deploy();
  await token.deployed();

  console.log("Token deployed to: ", token.address);

  console.log(token.address);

  const balance = await token.balanceOf(token.address);
  console.log(balance);
  const contractObject = await ethers.getContractAt("MyToken", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

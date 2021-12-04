const { ethers } = require("hardhat");
const hre = require("hardhat");
const tokenABI = require('./IERC20.json')
// import { addresses } from "@klimadao/lib/constants";
// const KlimaToken = 

/*
   Deploys KLIMA and sKLIMA
 */
async function main() {

    // Connect to the network
    // let provider = ethers.getDefaultProvider();
    const node_url = 'https://polygon-mainnet.infura.io/v3/f16fe897786f47149695118b395db6e3'
    const provider = new ethers.providers.JsonRpcProvider(node_url);
    // console.log(provider)
    // The address from the above deployment example
    let contractAddress = "0x0aeDC93ABfCed9d6C5e4a632FD89220690AfAf94";
    let tokenAddress = ethers.utils.getAddress(contractAddress)
    const myAddress = ethers.utils.getAddress('0xeF13847E8d7E4Ccc232A2e90B6215b01BD28E789'); 
    
    // We connect to the Contract using a Provider, so we will only
    // have read-only access to the Contract

    IERC20Mintable( tokenAddress ).mint( myAddress, 40 )
    throw "hey"
    let contract = new ethers.Contract(contractAddress, tokenABI.abi, provider);
    console.log("contractaddress")
    console.log(contract.address)
    console.log("total Supply")
    // contract.attach(contractAddress)
    // const minted = await contract.mint(myAddress, 10000)
    const myBalance = await contract.balanceOf(myAddress)
    const totalSupply = await contract.totalSupply()
    // const minted = await contract._mint(myAddress, 100000)
    console.log(parseInt(totalSupply))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

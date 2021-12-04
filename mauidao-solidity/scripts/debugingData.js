const { ethers } = require("hardhat");
const hre = require("hardhat");
const tokenABI = require('./IERC20.json')
const bondDepositoryABI = require('./BondDepository.json')
const stakingHelperJSON = require('./StakingHelper.json')
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

    // staking: "0xcC28e08c3aF58A20c202C85FAc20ac710B4ff83A",
    // staking_helper: "0xC04107d890562dE5565aE8D4ADa6Fe105a096B07",

    let stakingAddress = ethers.utils.getAddress("0xcC28e08c3aF58A20c202C85FAc20ac710B4ff83A")
    let stakingHelperAddress = ethers.utils.getAddress("0xC04107d890562dE5565aE8D4ADa6Fe105a096B07")

    let contractAddress = "0xD048124BA93cc6bb3D15CE236e1996664336cac4";
    let bondDepositoryAddress = "0xDcb7eE94735e6713a6671e60abE780b3188b5111";
    let tokenAddress = ethers.utils.getAddress(contractAddress)

    // const stakingHelperAddress = ethers.utils.getAddress('0xC04107d890562dE5565aE8D4ADa6Fe105a096B07'); 
    const myAddress = ethers.utils.getAddress('0xeF13847E8d7E4Ccc232A2e90B6215b01BD28E789'); 
    
    console.log('provider.getSigner()')
    const signer1 = await hre.ethers.getSigner()
    // console.log(signer1)
    const signer2 = await provider.getSigner()
    console.log('signer2')
    // console.log(signer2)
    

    // We connect to the Contract using a Provider, so we will only
    // have read-only access to the Contract

    // IERC20Mintable( tokenAddress ).mint( myAddress, 40 )
    // throw "hey"
    let contract = new ethers.Contract(contractAddress, tokenABI.abi, provider);
    let bctBondContract = new ethers.Contract(bondDepositoryAddress, 
      bondDepositoryABI.abi, 
      signer1);
    let stakingHelperContract = new ethers.Contract(bondDepositoryAddress, 
      stakingHelperJSON.abi, 
      signer1);
    
    console.log("total Supply")
    // const sss = await stakingHelperContract.stake(222000000000)
    console.log("total Supply2")
    
    // contract.attach(contractAddress)
    // const minted = await contract.mint(myAddress, 10000)
    const myBalance = await contract.balanceOf(myAddress)
    const totalSupply = await contract.totalSupply()
    // const debtRatio = await bctBondContract.debtRatio()

const bctBondBCV = '50';
const bondVestingLength = '33110'; // Bond vesting length in blocks. 33110 ~ 5 days
const minBondPrice = '20';
const maxBondPayout = '50'
const intialBondDebt = '0'
const bondFee = 500;
const maxBondDebt = '1000000000000000';

// function initializeBondTerms( 
//   uint _controlVariable, 
//   uint _vestingTerm,
//   uint _minimumPrice,
//   uint _maxPayout,
//   uint _fee,
//   uint _maxDebt,
//   uint _initialDebt
// ) 



// const accounts = await hre.ethers.getSigners();


// const signerRequest = await bctBondContract.connect(signer1)
// console.log(signerRequest)

// const bctBondContractReq = await bctBondContract.debtRatio()
// console.log('debtRatio')
// console.log(parseInt(bctBondContractReq))

let overrides = {
  gasPrice:999, 
  // The maximum units of gas for the transaction to use
  gasLimit: 123445123412,

};


const bondPriceInUSD = await bctBondContract.bondPriceInUSD()
console.log('bondPriceInUSD')
// console.log(parseInt(bondPriceInUSD))
// const result = await bctBondContract.initializeBondTerms(
//   bctBondBCV, 
//   bondVestingLength, 
//   minBondPrice, 
//   maxBondPayout, 
//   bondFee, 
//   maxBondDebt, 
//   intialBondDebt)

// const res3 = await bctBondContract.setStaking(stakingAddress, stakingHelperAddress);
// console.log(res3)
    
// console.log("result")
// console.log(result)


    // const minted = await contract._mint(myAddress, 100000)


    // initializeBondTerms( 
    //     uint _controlVariable, 
    //     uint _vestingTerm,
    //     uint _minimumPrice,
    //     uint _maxPayout,
    //     uint _fee,
    //     uint _maxDebt,
    //     uint _initialDebt
    // )


    // console.log(parseInt(totalSupply))
    // console.log("debtRatio")
    // console.log(debtRatio)
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

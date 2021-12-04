const { ethers } = require("hardhat");
const hre = require("hardhat");



/*
   Deploys KLIMA and sKLIMA
 */
async function main() {
  const firstEpochBlock = '8961000';
  const epochLengthInBlocks = '2200';
  const firstEpochNumber = '338';

  const daoAddress = ethers.utils.getAddress('0xeF13847E8d7E4Ccc232A2e90B6215b01BD28E789')
  const fruitTokenAddress = ethers.utils.getAddress('0xD048124BA93cc6bb3D15CE236e1996664336cac4')
  const bctAddress = ethers.utils.getAddress("0x2f800db0fdb5223b3c3f354886d907a671414a7f");   
  const usdcAddress = ethers.utils.getAddress("0xe6b8a5cf854791412c1f6efc7caf629f5df1c747"); 
  const treasuryAddress = ethers.utils.getAddress("0x45cCa478438f574351BF63EAca82246176e4A193"); 
  const distributorAddress = ethers.utils.getAddress("0xA4Fc5AE995C5DBd8734831130CD0fd59e32a0a86"); 
  const sFruitAddress = ethers.utils.getAddress("0xc1e15bE817133f67101F33533772E7937E2BAc1C"); 
  const bondingCalculatorAddress = ethers.utils.getAddress("0x664119c7ebC9771B005b9fA8C2e83f09EBe099f4"); 
  const stakingAddress = ethers.utils.getAddress("0xcC28e08c3aF58A20c202C85FAc20ac710B4ff83A"); 
  const stakingHelperAddress = ethers.utils.getAddress("0xC04107d890562dE5565aE8D4ADa6Fe105a096B07"); 
  const bctBondDepositoryAddress = ethers.utils.getAddress("0xDcb7eE94735e6713a6671e60abE780b3188b5111"); 

  const FruitBondDepository = await ethers.getContractFactory("KlimaBondDepository");

    // address _KLIMA,
    // address _principle,token used to create bond
    // address _treasury,
    // address _DAO, 
    // address _bondCalculator
  
    // const bctBondDepository = await FruitBondDepository.deploy(fruitTokenAddress, 
    //   bctAddress, 
    //   treasuryAddress, 
    //   daoAddress,
    //   bondingCalculatorAddress);
  
    //   console.log("FruitBondDepository Deployed at: ", bctBondDepository.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

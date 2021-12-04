
# Summary
This repo holds both the smart contracts used for front end and back end code for MauiDAO. 

It is a fork of KLIMA DAO site and klima DAO solidity contracts (which are forks of OlympusDAO). As such many of the names have not been changed from KLIMA to MAUI. 

https://github.com/KlimaDAO/klimadao-solidity
https://github.com/KlimaDAO/klimadao


This repo contains 4 packages: `@mauidao/site`, `@mauidao/app`, `@mauidao/lib`, and `@mauidao-solidity`.

`@mauidao/site` -> klimadao.finance homepage. In the future, we can add the docs and blog as well.

`@mauidao/app` -> dapp.klimadao.finance app, a standalone single-page-app. Should be exportable as a static site for deployment on IPFS.

`@mauidao/lib` -> A shared component and theme library. For now, just a set of resources shared by the above two apps. In the future, this can be extended and published on NPM as a component library for use in other community projects.

# Getting Started

## Requirements
Take note, this repo utilizes newer features from Node, NPM and the upcoming release of Typescript.

- Node >= v16.x
- NPM >= v8.x (necessary for NPM Workspaces)
- Typescript >= 4.5.0-beta (better ESModules support) `npm install -g typescript@4.5.0-beta`
- VSCode [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- VSCode [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Integrating Smart Contracts

Documentation for integrating smart contracts can be found in `mauidao-solidity`

## Install dependencies
From the `mauidao/` root folder, *not* from individual packages:
`npm install`

## Develop
A set of NPM Workspace commands are provided, and can be run from the root folder.

`npm run dev-app`: run the app on localhost:3001

`npm run dev-lib`: Watch for changes in `@mauidao/lib` and recompile on save. Alternatively, run `npm run build-lib` to compile once (this is already done automatically for the above two commands).

`npm run dev-site`: run the website on localhost:3000

## Smart Contract Reference

`mauidao/lib/constants/index.ts` shows the list of contract address the app uses. 
The constants listed are meant to work with polygon mainnet. 
    
//BCT TOKEN, not a smart contract
bct: "0x2f800db0fdb5223b3c3f354886d907a671414a7f"
    
//KlimaTreasury.sol
treasury: "0x45cCa478438f574351BF63EAca82246176e4A193"

//KlimaStakingDistributor_v4
distributor: "0xA4Fc5AE995C5DBd8734831130CD0fd59e32a0a86"

//KlimaToken.sol
klima: "0xD048124BA93cc6bb3D15CE236e1996664336cac4"

//not used
aklima: "0xeb935614447185eeea0abc756ff2ddc99fbb9047"
aklima_migrate: "0x49722300Ab1932e5A1ef11EfdE25885685C7eeD5"
alklima: "0xd50EC6360f560a59926216Eafb98395AC430C9fD"
alklima_migrate: "0x4dA274126193B36A972267AeEB02B983d88e64E3"
pklima: "0x0af5dee6678869201924930d924a435f6e4839c9",
pklima_exercise: "0xE607d9604AA75D45A866831fc3E87eCAA8A654e7",

//sKlimaToken.sol
sklima: "0xc1e15bE817133f67101F33533772E7937E2BAc1C",

//sKlimaToken.sol
wsklima: "0x6f370dba99E32A3cAD959b341120DB3C9E280bA6",

//Sushiswap LP Token
bctUsdcLp: "0x1e67124681b402064cd0abe8ed1b5c79d2e02f64",

//Sushiswap LP Token
klimaBctLp: "0x9803c7ae526049210a1725f7487af26fe2c24614",

//KlimaLPBonds.sol => KlimaBondDepository
//you must initializeBondTerms to use, now must be 
bond_klimaBctLp: "0x1E0Dd93C81aC7Af2974cdB326c85B87Dd879389B",
bond_bct: "0xDcb7eE94735e6713a6671e60abE780b3188b5111",
bond_bctUsdcLp: "0xBF2A35efcd85e790f02458Db4A3e2f29818521c5",

//KlimaBondingCalculatorV2.sol
bond_calc: "0x0b8d6D6611Ed7cCe01BbcC57826548C6107B0478",

//KlimaStaking_v2.sol
staking: "0xcC28e08c3aF58A20c202C85FAc20ac710B4ff83A",

//StakingHelper.sol
staking_helper: "0xC04107d890562dE5565aE8D4ADa6Fe105a096B07",

For more on how to deploy these contracts see `mauidao-solidity/COMMANDS`
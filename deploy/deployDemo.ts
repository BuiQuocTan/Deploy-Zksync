import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the contractDemo contract`);

  // Initialize the wallet.
  const wallet = new Wallet("a3649f201c5b7f347203f545e1844d45dc9d751c69b3d5e6a16f5c6b165e0fc9");

  // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("contractDemo");
    
  // Estimate contract deployment fee
  const nameContract = "demo Contract";
  const admin = "0x1D92242fA9142b2b2A78Dd373514BECD2AdAe1c7";

  const greeterContract = await deployer.deploy(artifact, [nameContract, admin]);

  console.log("constructor args:" + greeterContract.interface.encodeDeploy([nameContract, admin]));

  // Show the contract info.
  const contractAddress = greeterContract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}

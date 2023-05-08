import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

module.exports = {
  zksolc: {
    version: "1.3.10",
    compilerSource: "binary",
    settings: {},
  },
  defaultNetwork: "zkSyncTestnet",

  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/5cKAWE6kibG3D_biHYdHE0LcmRYquT83", // The Ethereum Web3 RPC URL (optional).
    },
    zkSyncTestnet: {
      url: "https://testnet.era.zksync.dev",
      ethNetwork: "goerli", // RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      zksync: true,
      verifyURL:
        "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
    },
  },
  solidity: {
    version: "0.8.8",
  },
};
// yarn hardhat verify --network zkSyncTestnet 0x0ce86eD3fE8C6e9f6b1BF266f9E0306864B56030 --constructor-args "bui quoc tan"

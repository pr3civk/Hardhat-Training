import { HardhatUserConfig } from "hardhat/config";
import { EtherscanConfig } from "@nomicfoundation/hardhat-verify/types";
import "@nomicfoundation/hardhat-ethers";
import "dotenv/config";
import "@nomicfoundation/hardhat-verify";
import "./tasks/block-number";
import "./tasks/accounts";
import "./tasks/networks";

const ALCHEMY_SEPOLIA_RPC_URL: string = process.env.ALCHEMY_SEPOLIA_RPC_URL!;
const PRIVATE_KEY: string = process.env.PRIVATE_KEY!;
export const ETHERSCAN_API_KEY: string = process.env.ETHERSCAN_API_KEY!;

const config: HardhatUserConfig = {
  networks: {
    sepolia: {
      url: ALCHEMY_SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY as string],
      chainId: 11155111,
    },
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
      url: "http://127.0.0.1:8545"
    }
  },
  solidity: "0.8.24",
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY as string,
    },
  },
};

export default config;

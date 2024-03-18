import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";
// import "@nomiclabs/hardhat-waffle";
import "dotenv/config";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "./tasks/block-number";
import "./tasks/accounts";
import "./tasks/networks";

const ALCHEMY_SEPOLIA_RPC_URL: string = process.env.ALCHEMY_SEPOLIA_RPC_URL!;
const PRIVATE_KEY: string = process.env.PRIVATE_KEY!;
const COINMARKETCAP_API_KEY: string = process.env.COINMARKETCAP_API_KEY!;
export const ETHERSCAN_API_KEY: string = process.env.ETHERSCAN_API_KEY!;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: ALCHEMY_SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
      url: "http://127.0.0.1:8545",
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
};

export default config;

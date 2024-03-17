import { task } from 'hardhat/config';

task("block-number", "Prints the current block number")
  .setAction(async (_, hre) => {
    console.log(await hre.ethers.provider.getBlockNumber());
  });
  
  module.exports = {};
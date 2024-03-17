import { task } from "hardhat/config";

task("networks", "Prints current active networks", async (_, { network }) => {
  console.log(`Using ${network.name} network `);
});

module.exports = {};

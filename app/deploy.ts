import * as hh from "hardhat";
import { ETHERSCAN_API_KEY } from "../hardhat.config";

async function deployContract(contractName: string, constructorArgs?: any[]) {
  console.log(`Using ${hh.network.name} network `);

  const contractFactory = await hh.ethers.getContractFactory(contractName);
  const contract = await contractFactory.deploy(...(constructorArgs ?? []));
  await contract.waitForDeployment();

  console.log(`deployed to: ${contract.target}`);
  if (hh.network.config.chainId != 31337 && ETHERSCAN_API_KEY) {
    console.log(process.env.ETHERSCAN_API_KEY && "api key was set: true");
    await verify(contract.target as string, contractName, constructorArgs);
  }

  const greet = await contract.greet();
  console.log(`greet from contract: ${greet}`);

  const getNumber = await contract.getNumber();
  console.log(`getNumber: ${getNumber}`);

  const setNumber = await contract.setNumber(2137);
  await setNumber.wait();
  const updatedNumber = await contract.getNumber();
  console.log(`updatedNumber: ${updatedNumber}`);
}

async function verify(
  contractAddress: string,
  contractName: string,
  constructorArgs?: any[]
) {
  console.log(`verifying ${contractName} at ${contractAddress}...`);
  try {
    await hh.run("verify:verify", {
      address: contractAddress,
      constructorArguments: constructorArgs ?? [],
    });
  } catch (e: any) {
    if (e.message.includes("Contract source code already verified")) {
      console.log("Contract already verified");
    } else {
      console.error(e);
    }
  }
}

async function main() {
  await deployContract("Greeter", [12]);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

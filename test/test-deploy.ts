import { describe } from "mocha";
import { ethers } from "hardhat";
import { expect, assert } from "chai";

describe("Greeter", function () {
  let greeterContractFactory: any, greeterContract: any;
  this.beforeEach(async function () {
    greeterContractFactory = await ethers.getContractFactory("Greeter");
    greeterContract = await greeterContractFactory.deploy(0);
    await greeterContract.waitForDeployment();
  });
  it("Should return greeting message", async function(){
    assert.equal(await greeterContract.greet(), "Hello from contract!");
  })
  it("Should start with number 0", async function () {
    assert.equal(await greeterContract.getNumber(), 0);
  });
  it("Should set the number to 10", async function () {
    await greeterContract.setNumber(10);
    assert.equal(await greeterContract.getNumber(), 10);
  });

});

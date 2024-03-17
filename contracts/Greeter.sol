// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Greeter {
    string public constant greeting = "Hello from contract!";
    uint256 public number;

    constructor(uint256 _number) {
        number = _number;
    }

    function greet() public pure returns (string memory) {
        return greeting;
    }

    function getNumber() public view returns (uint256) {
        return number;
    }

    function setNumber(uint256 _number) public {
        number = _number;
    }
}

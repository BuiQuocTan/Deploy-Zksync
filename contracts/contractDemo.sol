//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.8;

contract contractDemo {
    string private nameContract;
    address private owner;
    address private admin;

    constructor(string memory _nameContract, address  _admin) {
        nameContract = _nameContract;
        owner = msg.sender;
        admin = _admin;
    }

    function setNameContract(string memory _nameContract) public {
        nameContract = _nameContract;
    }

    function getNameContract() public view returns (string memory) {
        return nameContract;
    }

    function getAdmin() public view returns (address){
        return admin;
    }
}

// contracts/PlatinumToken.sol 
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
    
    contract KycContract is Ownable {
       mapping(address => bool) allowed ;

    function setKyc(address _add) public {
        allowed[_add] = true;
    }

    function removeKyc(address _add ) public {
        allowed[_add] = false;
    }
    function checkKyc (address _add) public view returns(bool){
        return allowed[_add];
    }



    }
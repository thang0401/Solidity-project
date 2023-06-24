// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./crowdSale.sol"; 
import "./KycContract.sol"; 
KycContract Kyc;
contract PlatinumTokenSale is crowdSale {
    constructor(
        uint256 rate,    // rate in TKNbits
        address payable wallet,
        IERC20 token,
        KycContract _Kyc;
    )
        Crowdsale(rate, wallet, token)
        public
    {

    }

}
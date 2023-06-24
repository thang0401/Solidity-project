// get cpmtract
var PlatinumToken = artifacts.require("PlatinumToken.sol");
var PlatinumToken = artifacts.require("PlatinumTokenSale.sol");
module.exports = async function(deployer){
    await deployer.deploy(PlatinumToken,10000000);
    await deployer.deploy(PlatinumTokenSale,10000000);
};

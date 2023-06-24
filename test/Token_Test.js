// get contract
var PlatinumToken = artifact.require("PlatinumToken.sol");
// get chai library 
var chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

var chaiAsPromised =require("chai-as-promised");
chai.use("chaiAsPromised");

const expect = chai.expect;

contract("Token test", async (accounts)=> {
    it("All tokens should be in first account", async () => {
        let instance = await MyToken.deployed();
        // all of Token are create will be in owner's account  
        let totalSupply = await instance.totalSupply();
        expect(await instance.balanceOf(accounts[0])).to.be.a.bignumber.equal(totalSupply);
    })
});
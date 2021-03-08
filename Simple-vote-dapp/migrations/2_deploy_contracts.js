const Voting = artifacts.require("Voting");

module.exports = function(deployer) {
  deployer.deploy(Voting,['Alice','Bob','Cary'].map(x=>web3.utils.asciiToHex(x)));
};

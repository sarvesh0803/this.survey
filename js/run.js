var Web3 = require('web3');
var fs = require('fs');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var acc = web3.eth.accounts;
var code = fs.readFileSync('/home/saibhaskar/projects/ethindia-dev/contracts/survey.sol').toString();
var solc = require('solc');
var compiledCode = solc.compile(code);
var abiDefinition = JSON.parse(compiledCode.contracts[':survey'].interface);
var surveyContract = web3.eth.contract(abiDefinition);
var byteCode = compiledCode.contracts[':survey'].bytecode;
var deployedContract = surveyContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000});
var contractInstance = surveyContract.at(deployedContract.address);
console.log(compiledCode.contracts[':survey'].interface);
deployedContract.address;

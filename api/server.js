var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var	Web3	=	require('web3');
var	web3	=	new	Web3();
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

function	callf(a,b)	{
	var	ia	=	parseInt(a)	;
	var	ib	=	parseInt(b)	;
  return(	contract.f(ia,ib)	)
}

web3.setProvider(new	web3.providers.HttpProvider('http://localhost:8545'));
var	abi	= [{"constant":false,"inputs":[{"name":"serviceType","type":"uint256"},{"name":"patientAddress","type":"address"}],"name":"getExamined","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"viewPackets","outputs":[{"name":"","type":"uint256[3][5]"},{"name":"","type":"uint256[4]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getHospitals","outputs":[{"name":"","type":"address[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"hospitalAddress","type":"address"}],"name":"addHospital","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hospitalCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getUsages","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getHospitalAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"hospitalAddress","type":"address"}],"name":"decideHospital","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"offer","type":"uint256[3][5]"}],"name":"giveOffer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"patientCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"packetType","type":"uint256"},{"name":"name","type":"bytes32"},{"name":"surname","type":"bytes32"}],"name":"selectPacket","outputs":[{"name":"patientNum","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"reimburseme","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"calculatePrice","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getHospitalNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getSelectedHospital","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"hospitalAddress","type":"address"}],"name":"getOffer","outputs":[{"name":"","type":"uint256[3][5]"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];


var	contractaddress	=	"0x7aa27390053aa4ac6bae1e1b9d43482892fa7992";
var	contract	=	web3.eth.contract(abi).at(contractaddress);
if(!web3.isConnected())	{
	console.log("not	connected");
}else{
	global.contract = contract;
	web3.eth.defaultAccount = web3.eth.accounts[0];
}
global.web3 = web3;

// routes ======================================================================
require('./routes/route.js')(app); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

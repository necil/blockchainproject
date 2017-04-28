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
var	abi	=	[{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],
"name":"f","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"}]
var	contractaddress	=	"0x0a369d1f06adca3be0ff14a5340d8186e296b8e8"	;
var	contract	=	web3.eth.contract(abi).at(contractaddress);
if(!web3.isConnected())	{
				console.log("not	connected");
}
// routes ======================================================================
require('./routes/route.js')(app); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

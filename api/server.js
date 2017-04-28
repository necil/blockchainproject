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
var	abi	=	[{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},
{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"new_greeter","outputs":[],"payable":false,"type":"function"},
{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},
{"inputs":[{"name":"_greeting","type":"string"}],"payable":false,"type":"constructor"}]
var	contractaddress	=	"0x565bba7fc5b638ee8230d2f78446d1245f155f7d"	;
var	contract	=	web3.eth.contract(abi).at(contractaddress);
if(!web3.isConnected())	{
	console.log("not	connected");
}
// routes ======================================================================
require('./routes/route.js')(app); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

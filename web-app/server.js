var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var path = require('path');
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.get('/',function(req, res){
  res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

app.use(express.static('public'));

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

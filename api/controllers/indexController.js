'use strict'

var express = require('express');
var web3 = global.contract;
exports.getAdmin = function(req, res){
	res.send(contract.getAdmin());
}

exports.giveOffer = function(req, res){
	contract.giveOffer(req.body.offer)
  	res.send("ok")
}

exports.createOffer = function(req, res){
  	res.send('zaa');
}

exports.extendPackage = function(req, res){
  	res.send('zaa');
}

exports.selectOffer = function(req, res){
	res.send('zaa');
}

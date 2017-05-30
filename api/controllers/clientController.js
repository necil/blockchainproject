'use strict'

var express = require('express');

exports.getPackets = function(req, res){
	res.json(contract.viewPackets());
}

exports.selectPacket = function(req, res){
	res.json(contract.selectPacket(req.body.packetNumber, req.body.name, req.body.lastname,{value: web3.toWei(9,"ether"), gas:900000}));
}

exports.getUsage = function(req, res){
	res.json(contract.getUsages());
}

exports.reimburseme = function(req, res){
	res.json(contract.reimburseme());
}

exports.getExamined = function(req, res){
	res.json(contract.getExamined(req.body.serviceType, req.body.patientAddress, {gas:900000}));
}
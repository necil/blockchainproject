'use strict'

var express = require('express');

exports.addHospital = function(req, res){
	res.send(contract.addHospital(req.body.hospitalAddress,{gas:900000}));
}

exports.getHospitals = function(req, res){
	res.json(contract.getHospitals());
}

exports.getAllOffers = function(req,res){
	var offers = [];
	var offer = {};
	var hospitals = contract.getHospitals();
	for(var i = 0; i < hospitals.length; i++){
		offer.hospitalAddress = hospitals[i];
		offer.offerAndPrice = contract.getOffer(hospitals[i]);
		offers.push(offer);
	}
	res.json(offers);
}

exports.getOffer = function(req,res){
	res.json(contract.getOffer(req.body.hospitalAddress))
}

exports.selectOffer = function(req,res){
	res.json(contract.selectOffer(req.body.hospitalAddress));
}

exports.getHospitalNumber = function(req,res){
	res.send(contract.getHospitalNumber());
}

exports.decideHospital = function(req, res){
	contract.decideHospital(req.body.hospitalAddress,{gas:900000});
	res.send("ok");
}

exports.getSelectedHospital = function(req, res){
	res.json(contract.getSelectedHospital());
}
'use strict';
module.exports = function(app){
  var indexController = require('../controllers/indexController');
  var adminController = require('../controllers/adminController');
  var clientController = require('../controllers/clientController');
  

  app.route('/api/getadmin').get(indexController.getAdmin);
  

  app.route('/api/admin/getalloffers').get(adminController.getAllOffers);
  app.route('/api/admin/getselectedhospital').get(adminController.getSelectedHospital);
  app.route('/api/admin/gethospitals').get(adminController.getHospitals);
  app.route('/api/admin/gethospitalnumber').get(adminController.getHospitalNumber);
  app.route('/api/admin/addhospital').post(adminController.addHospital);
  app.route('/api/admin/decidehospital').post(adminController.decideHospital);
  app.route('/api/admin/selectoffer').post(adminController.selectOffer);


  app.route('/api/client/getpackets').get(clientController.getPackets);
  app.route('/api/client/getusage').get(clientController.getUsage);
  app.route('/api/client/selectPacket').post(clientController.selectPacket);
  app.route('/api/client/reimburseme').post(clientController.reimburseme);
  app.route('/api/client/getexamined').post(clientController.getExamined);
}

'use strict';
module.exports = function(app){
  var indexController = require('../controllers/indexController');
  app.route('/package').get(indexController.listAllPackages);
  app.route('/offer').post(indexController.createOffer);
  app.route('/package/extend').post(indexController.extendPackage);
  app.route('/package/change/:packageId').post(indexController.changePackage);
}

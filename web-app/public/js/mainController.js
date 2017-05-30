var app = angular.module("mainApp", []);
app.controller("mainControler", function($scope, $http) {
  var apiBase = "http://localhost:8081";

  $scope.userAuthority = 1;
  $scope.adminAddress = "";
  $scope.infotext = "";
  $scope.hospitals= [];
  $scope.hospitalAdd = "";

  $scope.getUserAuth = function(){
    var req = {
      method : "GET",
      url : apiBase + "/checkadmin",
      dataType: "jsonp"
    }
    $http(req)
    .then(function(data){$scope.userAuthority = data})
    .catch(function(err){console.log(err)});
  }

  $scope.getAdminAddress = function(){
    var req = {
      method: "GET",
      url: apiBase + "/api/getadmin",
      dataType: "jsonp"
    }
    $http(req)
    .then(function(data){$scope.adminAddress = data})
    .catch(function(err){console.log(err)});
  }


  $scope.addHospital = function(){
    var req = {
      method: "POST",
      url: apiBase + "/api/admin/gethospitals",
      dataType: "jsonp",
      data: $scope.hospitalAdd
    }
    $http(req)
    .then(function(data){$scope.hospitals = data})
    .catch(function(err){console.log(err)});
  }

  $scope.getHospitals = function(){
    var req = {
      method: "GET",
      url: apiBase + "/api/admin/gethospitals",
      dataType: "jsonp"
    }
    $http(req)
    .then(function(data){$scope.hospitals = data})
    .catch(function(err){console.log(err)});
  }

  $scope.getOffers = function(){
    var req = {
      method: "GET",
      url: apiBase + "/api/admin/gethospitals",
      dataType: "jsonp"
    }
    $http(req)
    .then(function(data){$scope.hospitals = data})
    .catch(function(err){console.log(err)});
  }

  $scope.getUserAuth();
});

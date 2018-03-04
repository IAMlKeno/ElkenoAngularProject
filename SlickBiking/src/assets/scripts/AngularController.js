angular.module("bikeForm", ['ngRoute'])
  .controller("BikeController", function ($scope, $window, BikeService) {
    $scope.AddBike = function () {
      BikeService.AddBikeCall($scope.bike);
      $window.location.reload();
    }

  })
  .factory("BikeService", ['$http', function ($http, $route) {
    var fac = {};

    fac.AddBikeCall = function (bike) {
      $http.post("/api/Bike", bike).then(function (response) {
        alert("success");
      })
    }

    return fac;
  }])

//var app = angular.module('bikeForm', []);

//(function (app) {
//  "use strict";
//  app.controller("BikeController", function ($scope, $http) {

//    //$scope.studentorder = "StudetnID";
//    $scope.model = "";
//    $scope.description = "";
//    $scope.price = "";
//    $scope.bikeType = "";
//    $scope.qoh = "";
//    $scope.Save = function () {
//      var json = {
//        model: $scope.model, description: $scope.description, price: $scope.price,
//        bikeType: $scope.bikeType, qoh: $scope.qoh
//      }
//      var httpreq = {
//        method: 'POST',
//        url: '/api/Default',
//        headers: {
//          'Content-Type': 'application/json; charset=utf-8',
//          'dataType': 'json'
//        },
//        data: json
//      };
//      $http(httpreq).then(function (data, response) {
//        //$scope.fillList();
//        alert("Saved successfully Changed.\n" + data.model);
//      });

//    };
//  });
//})(app);



angular.module("bikeApp", ['ngRoute'])
  .controller("BikeController", function ($scope, $window, BikeService) {

    $scope.AddBike = function () {
      alert("test");
      BikeService.AddBikeCall($scope.bike);
      $window.location.reload();
    }

    $scope.DeleteBike = function () {
        alert($scope.action);
      //BikeService.DeleteBikeCall($scope.bike.id);
      //$window.location.reload();
    }

    $scope.UpdateBike = function () {
      BikeService.UpdateBikeCall($scope.bike);
      $window.location.reload();
    }

    $scope.GetBike = function () {
      BikeService.GetBikeCall($scope.bike.id);
    }

  })
  .factory("BikeService", ['$http', function ($http, $route) {
    var fac = {};

    fac.AddBikeCall = function (bike) {
      $http.post("/api/Bike/AddBike", bike).then(function (response) {
        alert("success");
      })
    }

    fac.DeleteBikeCall = function (id) {
      $http.post("/api/Bike/DeleteBike", id).then(function () {

      })
    }

    fac.UpdateBikeCall = function (bike) {
      $http.post("/api/Bike/UpdateBike", bike).then(function () {

      })
    }

    fac.GetBikeCall = function (id) {
      $http.get("/api/Bike/" + id).then(function () {

      })
    }

    return fac;
  }])
  .controller("BikeDisplayController", function ($scope, $window, BikeActionService) {
    $scope.DeleteBike = function ($event) {
      var id = $($event.target).attr("value");
      alert("delete: " + id);
      BikeActionService.DeleteBikeAction(id);
      $window.location.reload();
    }
    $scope.UpdateBike = function ($event) {
      var id = $($event.target).attr("value");
      alert("Update: " + id);
      //BikeActionService.UpdateBikeAction(id);
    }
  })
  .factory("BikeActionService", ['$http', function ($http, $route) {
    var fac = {};

    fac.DeleteBikeAction = function (id) {
      $http.post("/api/Bike/DeleteBike", id).then(function () {

      })
    }

    fac.UpdateBikeAction = function (bike) {
      $http.post("/api/Bike/UpdateBike", bike).then(function () {

      })
    }

    fac.GetBikeCall = function (id) {
      $http.get("/api/Bike/" + id).then(function () {

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



angular.module("bikeApp", ['ngRoute'])
  .controller("BikeController", function ($scope, $window, BikeService) {

    $scope.SaveBike = function ($event) {
      var bikeIdInput = $($event.target).find("._bikeId");
      var id = $(bikeIdInput).val();
      BikeService.SaveBikeAction($scope.bike, id);
    }
  })
  .factory("BikeService", ['$http', function ($http, $window) {
    var fac = {};

    fac.SaveBikeAction = function (bike, id) {
      alert("save called");
      $http.post("/api/Bike/SaveBike?id=" + id, bike).then(function successCallback(response) {
        alert("success");
        $window.location.reload();
      }, function errorCallback(response) {
        alert("fail");
      });
    }

    return fac;
  }])
  .controller("BikeDisplayController", function ($scope, $window, BikeActionService) {
    $scope.DeleteBike = function ($event) {
      var isDelete = confirm("Are you sure that you would like to delete this bike?");
      if (isDelete) {
        var id = $($event.target).attr("value");
        BikeActionService.DeleteBikeAction(id);
        $window.location.reload();
      }
    }
    $scope.GetBike = function ($event) {
      var id = $($event.target).val();
      BikeActionService.GetBikeAction(id).then(
        function successCallback(response) {
          var bike = response.data;
          poplateBikeForm(bike);
        },
        function errorCallback() { alert("Failed to retrieve bike information"); });
    }
  })
  .factory("BikeActionService", ['$http', function ($http, $route) {
    var fac = {};

    fac.DeleteBikeAction = function (id) {
      $http.post("/api/Bike/DeleteBike", id);
    }

    fac.GetBikeAction = function (id) {
      return $http.get("/api/Bike/GetBike?id=" + id);
    }

    return fac;
  }])

function poplateBikeForm(bike) {
  var bikeForm = $("._bikeForm");

  bikeForm.find("._bikeModel").val(bike.model);
  bikeForm.find("._bikeModel").trigger("input");

  bikeForm.find("._price").val(bike.price);
  bikeForm.find("._price").trigger("input");

  bikeForm.find("._description").val(bike.description);
  bikeForm.find("._description").trigger("textarea");

  bikeForm.find("._qoh").val(bike.quantityOnHand);
  bikeForm.find("._qoh").trigger("input");

  bikeForm.find("._type").val(bike.bikeType);
  bikeForm.find("._type").trigger("input");

  bikeForm.find("._bikeId").val(bike.id);
  bikeForm.find("._bikeId").trigger("input");
  $("#myModal").modal();
}

function clearBikeForm() {
  var bikeForm = $("._bikeForm");

  bikeForm.find("._bikeModel").val("");
  bikeForm.find("._price").val("");
  bikeForm.find("._description").val("");
  bikeForm.find("._qoh").val("");
  bikeForm.find("._type").val("");
  bikeForm.find("._bikeId").val("-1");
}

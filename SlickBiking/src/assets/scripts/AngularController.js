angular.module("bikeApp", ['ngRoute'])
  .controller("BikeController", function ($scope, $window, BikeService) {

    $scope.SaveBike = function ($event) {
      var bikeIdInput = $($event.target).find("._bikeId");
      var id = $(bikeIdInput).val();
      BikeService.SaveBikeAction($scope.bike, id);
    }
    $scope.disableForm = function () { angularBikeForm.$invalid = true; }
    $scope.enableForm = function () { angularBikeForm.$invalid = false; }
    $scope.isEnable = function () { alert($scope.bike.model); }
  })
  .factory("BikeService", ['$http', '$window', function ($http, $window) {
    var fac = {};

    fac.SaveBikeAction = function (bike, id) {
      $http.post("/api/Bike/SaveBike?id=" + id, bike).then(function successCallback(response) {
        alert("Saved successfully!");
        $window.location.reload();
      }, function errorCallback(response) {
        alert("Failed to save bike!");
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
          disableBtn();
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

  bikeForm.find("._type").val(bike.bikeTypeId);
  bikeForm.find("._type").trigger("select");

  bikeForm.find("._bikeId").val(bike.id);
  bikeForm.find("._bikeId").trigger("input");

  $("#myModal").modal();
}

function disableBtn() {
  var formControls = $("._bikeForm").find(".form-control");
  var disable = false;
  $(formControls).each(function () {
    if ($(this).val() == "") {
      disable = true
    }
  });

  $('button[type="submit"]').attr("disabled", disable);
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

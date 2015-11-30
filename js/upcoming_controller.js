var app = angular.module('myFirstApp', []);

app.controller('UpcomingController', UpcomingController)
app.controller('GeneralinfoController', GeneralinfoController)

function UpcomingController($scope) {
  $scope.upcoming = "The greatest we-don't-care-show of all times";
}

function GeneralinfoController($scope) {
  $scope.info = "not even gonna be open for you";
}


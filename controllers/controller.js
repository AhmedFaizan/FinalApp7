var app= angular.module('mainApp', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'page.html'
  })
  .when('/info',{

      templateUrl: 'info.html'
  })
  .when('/stats',{
/////////
/*function Ctrl($scope, $timeout) {
     $scope.val = false;
     $timeout(function(){$scope.val = true}, 3000);
}*/
/////////
      templateUrl: 'stats.html'
  })
  .when('/medications',{

      templateUrl: 'medications.html'
  })
  .when('/enzymes',{

      templateUrl: 'enzymes.html'
  })
  .when('/regimen',{

      templateUrl: 'regimen.html'
  })
  .when('/foods',{

      templateUrl: 'foods.html'
  });

/*.otherwise({
    redirectTo: '/'
  });*/
});
//  console.log('dsffsssfsdfsdf');

app.controller('medicinesController', function(MedicineService){
  var ctrl = this;
  ctrl.medicines = {};
  MedicineService.whenReady(function(){
      ctrl.medicines = MedicineService.getAllMedicines();
  })
})

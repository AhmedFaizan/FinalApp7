var app = angular.module("mainApp");
app.service('MedicineService', function ($http){
  var medicinesList = undefined;
  var queued =[];
  $http.get('js/myJson.json').then(function(data){
    if(angular.isDefined(data)){
      medicinesList = data.data.medicines;
      processQueue();
    }
  });
function processQueue(){
  angular.forEach(queued, function (callBack){callBack();})
}

  return {
    whenReady: function (callback) {
      if (typeof medicinesList === "undefined")
      {
        queued.push(callback)
      }
      else {
        callback();
      }
    },

    getAllMedicines: function(){
      return medicinesList;
    }
  }
});

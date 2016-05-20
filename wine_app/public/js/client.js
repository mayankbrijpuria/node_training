var app= angular.module("wineApp",["ui.router"]);


app.config(function($stateProvider,$urlRouterProvider){
  $stateProvider.state("wines",{
    url :"/wines",
    templateUrl : "/templates/wineList.html",
    controller : "wineCtrl"
  }).state("/editwines",{
    url : "/wines/:id",
    templateUrl : "/templates/edit.html",
    controller : "wineEditCtrl"
  });

  $urlRouterProvider.otherwise("/wines");

});

app.controller("wineCtrl",function($scope,$http){
  function getWines(){
$http.get("https://myapi.profstream.com/api/ab48cf/wines")
      .success(function(wines){
        $scope.wines=wines;

      })
      .error(function(){
        alert("error");
      });
}

getWines();
   $scope.saveWine= function(){
    console.log($scope.wine);
    $http.post("https://myapi.profstream.com/api/ab48cf/wines",$scope.wine)
              .success(function(){
                $scope.wine={};
                $("#add-wine-modal").modal("hide");
                getWines();
              })
              .error(function(){
                alert("Error in Saving");
              });
   }
});

app.controller("wineEditCtrl",function($scope,$http,$stateParams,$location){
 var wineid=$stateParams.id;

$http.get("https://myapi.profstream.com/api/ab48cf/wines/" + wineid)
      .success(function(wines){
        $scope.wine=wines;

      })
      .error(function(){
        alert("error");
      });

$scope.editWine =function(){

}

})

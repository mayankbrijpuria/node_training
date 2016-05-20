var app=angular.module("myApp", []);


app.controller("appCtrl",function($scope,$http){
  $scope.userEntry="Mayank";

  $scope.sayEntry = function(){
    alert($scope.userEntry);
  }

 /* $scope.users =[
 { firstname:"Mayank",
   lastname : "Brijpuria",
   username : "je423",
   email : "je423@cummins.com"

  },
 { firstname:"Bob",
   lastname : "Jones",
   username : "te423",
   email : "te423@cummins.com"

  }
  ];*/

  $http.get("https://myapi.profstream.com/api/da960f/persons")
              .success(function(users){
               $scope.users=users;
              })
              .error(function(){
                alert("Could not get users");
              });
});

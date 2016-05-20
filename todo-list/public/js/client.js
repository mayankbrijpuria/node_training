var app=angular.module("todoApp", []);
console.log("inside controller");

app.controller("todoCtrl", function($scope){

$scope.todos=["Mayank"];
console.log("inside controller");
  $scope.addTodo = function(){
    $scope.todos.push($scope.todoText);
     $scope.todoText="";
  };



});

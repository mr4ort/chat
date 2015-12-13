'use strict';

/* Controllers */
var app = angular.module('chatApp', ['ngRoute', 'ngResource']);

app.controller('chat', ['$scope','$http', function($scope, $http) {

  $http({method: "get", url: "data.json"}).then(
      function (responce) {

        //$scope.services = responce.data.services;

        //$scope.messages = responce.data.messages;
      }
  );



  $scope.services = [
    {"skill": "Ручное бронирование",
    "count": 11,
    "color": "#3cb305"},
    {"skill": "Пакетные туры",
      "count": 3,
     "color": "#30b6ee"},
    {"skill": "Отели",
      "count": 1,
      "color": "#30b6ee"}
  ];



  $scope.messages = [
    {
      "name": "Cамуил",
      "time" : new Date,
      "message" : "Привет, Верунь! ниче себе ты крутая. фотка класс!!!! "
    },
    {
      "name": "Лилия Семёновна",
      "time" : new Date,
      "message" : "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"
    },
    {
      "name": "Лилия Семёновна",
      "time" : new Date,
      "message" : "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"
    }
  ];


  $scope.monthNames = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];

  $scope.addMessage = function(){
    if ($scope.newMessage){
      var temp = {};
      temp.name = 'test';
      temp.time = new Date;
      temp.message = $scope.newMessage;
      $scope.newMessage = '';
      $scope.messages.push(temp);
    }
  };

  $scope.monthNames = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];

  $scope.showDate = function(item){
    return $scope.messages[item].time.getDate() + " " + $scope.monthNames[$scope.messages[item].time.getMonth()] + " " + $scope.messages[item].time.getFullYear();
  };

  $scope.pressCtrlEnter = function(event){
    if (event.keyCode == 13 && event.ctrlKey)
      $scope.addMessage();
  };

  //$scope.arr = [11,3,1];

  $scope.like = 20;


  //$scope.total = $scope.services.reduce(function(a,b){return a.count + b.count});

  $scope.total = 0;

  $scope.services.forEach(function(el){$scope.total += el.count;});
  console.log($scope.total);

  //$scope.total = $scope.arr.reduce(function(x,y){return x + y;});

  $scope.progressVal = function(index){
    var temp = ($scope.services[index].count/$scope.total*100) + '%';
    return {'width': temp,
      "background-color": $scope.services[index].color };
  };



  //console.log ($scope.total);

}]);
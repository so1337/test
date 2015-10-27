'use strict';

/* Controllers */


var listctrls = angular.module('ListCtrl', []);

listctrls.controller('MainListCtrl', ['$scope',
  function($scope) {

    $scope.byRange = function (fieldName, minValue, maxValue) {
  if (minValue === undefined) minValue = Number.MIN_VALUE;
  if (maxValue === undefined) maxValue = Number.MAX_VALUE;
  return function predicateFunc(item) {
    return minValue <= item[fieldName] && item[fieldName] <= maxValue;
  };
};
$scope.filteredUsers = []
,$scope.currentPage = 1
,$scope.numPerPage = 10
,$scope.maxSize = 5;
    $scope.users=[
  {
    "id": "5627a05348f12ea17711f46f",
    "age": 7,
    "mail": "kathrynsummers@fangold.com",
    "fn": "Adriana",
    "ln": "Hoover"
  },
  {
    "id": "5627a053596ea796a04faf8d",
    "age": 16,
    "mail": "adrianahoover@fangold.com",
    "fn": "Young",
    "ln": "Cash"
  },
  {
    "id": "5627a053b68d363906644352",
    "age": 13,
    "mail": "youngcash@fangold.com",
    "fn": "Carlene",
    "ln": "Hatfield"
  },
  {
    "id": "5627a0535d9cc1a4e25f81e5",
    "age": 19,
    "mail": "carlenehatfield@fangold.com",
    "fn": "Celia",
    "ln": "Eaton"
  },
  {
    "id": "5627a0539d88e1e1c0cff606",
    "age": 27,
    "mail": "celiaeaton@fangold.com",
    "fn": "Howe",
    "ln": "Hebert"
  },
  {
    "id": "5627a05334f015658ba169ba",
    "age": 37,
    "mail": "howehebert@fangold.com",
    "fn": "Odonnell",
    "ln": "Delaney"
  },
  {
    "id": "5627a053e0b9ae2c26073992",
    "age": 16,
    "mail": "odonnelldelaney@fangold.com",
    "fn": "Tanisha",
    "ln": "Harding"
  },
  {
    "id": "5627a053c64970dad8c3cae9",
    "age": 3,
    "mail": "tanishaharding@fangold.com",
    "fn": "Simmons",
    "ln": "Duffy"
  },
  {
    "id": "5627a0537118de8a3ef1d5cf",
    "age": 30,
    "mail": "simmonsduffy@fangold.com",
    "fn": "Collier",
    "ln": "Browning"
  },
  {
    "id": "5627a0531210a70e641f2446",
    "age": 19,
    "mail": "collierbrowning@fangold.com",
    "fn": "Nikki",
    "ln": "Petersen"
  },
  {
    "id": "5627a053b62a0c86793ae1ba",
    "age": 17,
    "mail": "nikkipetersen@fangold.com",
    "fn": "Terri",
    "ln": "Moses"
  },
  {
    "id": "5627a053cf829c0b4082ffa9",
    "age": 16,
    "mail": "terrimoses@fangold.com",
    "fn": "Ann",
    "ln": "Yates"
  },
  {
    "id": "5627a0533334d703b232c3ee",
    "age": 32,
    "mail": "annyates@fangold.com",
    "fn": "Marianne",
    "ln": "Duke"
  },
  {
    "id": "5627a053aeef6ea57efb26a8",
    "age": 25,
    "mail": "marianneduke@fangold.com",
    "fn": "Kirkland",
    "ln": "Vaughn"
  },
  {
    "id": "5627a05353f5b09cb6466977",
    "age": 17,
    "mail": "kirklandvaughn@fangold.com",
    "fn": "Cooper",
    "ln": "Stephens"
  },
  {
    "id": "5627a053f67b1b43da06f665",
    "age": 1,
    "mail": "cooperstephens@fangold.com",
    "fn": "Hines",
    "ln": "Marsh"
  },
  {
    "id": "5627a053db4f4b15eb9424e7",
    "age": 8,
    "mail": "hinesmarsh@fangold.com",
    "fn": "Ford",
    "ln": "French"
  },
  {
    "id": "5627a05363c6756ac79358ef",
    "age": 24,
    "mail": "fordfrench@fangold.com",
    "fn": "Johnson",
    "ln": "Perkins"
  },
  {
    "id": "5627a053ec2ef7a6cde223fb",
    "age": 34,
    "mail": "johnsonperkins@fangold.com",
    "fn": "Brenda",
    "ln": "Keith"
  },
  {
    "id": "5627a0531ae9c46db32d28a8",
    "age": 40,
    "mail": "brendakeith@fangold.com",
    "fn": "Tabatha",
    "ln": "Henry"
  },
  {
    "id": "5627a053a23f2551bbcbe9c1",
    "age": 37,
    "mail": "tabathahenry@fangold.com",
    "fn": "Dyer",
    "ln": "Ferguson"
  },
  {
    "id": "5627a053beea2e072ef7c087",
    "age": 36,
    "mail": "dyerferguson@fangold.com",
    "fn": "Roman",
    "ln": "Lawson"
  },
  {
    "id": "5627a053b75255c4114f2a8c",
    "age": 2,
    "mail": "romanlawson@fangold.com",
    "fn": "Burton",
    "ln": "Arnold"
  }
];
$scope.inc = function(inc, callback){
  $scope.filteredUsers = inc;
  callback();

}
$scope.remove = function(item) {
  var index = $scope.users.indexOf(item);
  var index2 = $scope.filteredUsers.indexOf(item);
  $scope.users.splice(index, 1);
  $scope.filteredUsers.splice(index2, 1);   
}
var end = $scope.numPerPage;
$scope.loadMore = function() {
$scope.inc($scope.users.slice(0, end),function(){
  end = end + $scope.numPerPage;
  });


}
$scope.$watch("currentPage + numPerPage", function() {
   var begin = (($scope.currentPage - 1) * $scope.numPerPage)
   , end = begin + $scope.numPerPage;

   $scope.filteredUsers = $scope.users.slice(begin, end);
 });


  }]);

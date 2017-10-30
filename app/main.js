angular.module('app', [])
var app = angular.module('app')
app.controller('nameController', settingFunc);
function settingFunc($scope)
{
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
 this.names = "test this"
 var self = this
 this.names = []
 this.addName = function(name){
     self.names.push(name);
 };
 }
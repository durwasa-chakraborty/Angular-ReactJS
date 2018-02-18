import angular from 'angular'
// import reactDirective from './src/angular/reactDirective'

const  app = angular.module('app', []);

app.controller('PeriodicCtrl',function($scope,$http){
	$scope.ptable = [
		{name:"Hydrogen",x:1,y:1},
		{name:"Helium",x:2,y:1},
		{name:"Hydrogen 1",x:1,y:2},
		{name:"Hydrogen 2",x:2,y:2},

		{name:"Hydrogen 2",x:2,y:4},
	]
	$http.get("PeriodicTableJSON.json")
    .then(function(response) {
       $scope.pdtable = response.data.elements;
    });
	angular.forEach($scope.ptable,function(element){
		//console.log(element);
	})
}) 


export default app;
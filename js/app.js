//alert(111);
angular.module('myApp', ['ngRoute',
        'routeModule',
        'myServiceModule',
        'in_theatersModule',
        'coming_soonModule',
        'top250Module',
        'searchModule'
    ])
    .controller('commonCtrl', ['$scope', '$location', function ($scope, $location) {
		$scope.currentClass='in_theaters';
        $scope.searchFn = function () {
            // console.log($scope.search_text)
            $location.path('/search/1/' + $scope.search_text);
            $scope.search_text = '';
        }
    }])

// angular.module('myApp',[
// 	'ngRoute',
// 	'myServiceModule',
// 	'routeModule',
// 	'in_theatersModule',
// 	'coming_soonModule',
// 	'top250Module',
// 	'searchModule'
// ])

// .controller('commonCtrl',['$scope','$location',function($scope,$location){


// 	$scope.currentClass = "in_theaters";

// 	$scope.searchFn = function(){

// 		$location.path('/search/1/'+ $scope.search_text);

// 		$scope.search_text = '';

// 	}

// }])
angular.module('routeModule', [])
    .config(['$routeProvider', '$sceDelegateProvider', function ($routeProvider, $sceDelegateProvider) {
        $routeProvider
            .when('/in_theaters/:page', {
                templateUrl: './in_theaters/in_theaters.html',
                controller: 'in_theatersCtrl'
            })
            .when('/coming_soon/:page', {
                templateUrl: './coming_soon/coming_soon.html',
                controller: 'coming_soonCtrl'
            })
            .when('/top250/:page', {
                templateUrl: './top250/top250.html',
                controller: 'top250Ctrl'
            })
            .when('/search/:page/:keyword', {
                templateUrl: './search/search.html',
                controller: 'searchCtrl'
            })
            .otherwise('/in_theaters/1')

        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://api.douban.com/v2/movie/in_theaters'
        ]);
    }])

    // angular.module('routeModule',[])

	// .config(['$routeProvider','$sceDelegateProvider',function($routeProvider,$sceDelegateProvider){

	// 	$routeProvider
	// 		/* 正在热映 */
	// 		.when('/in_theaters/:page',{
	// 			templateUrl:'./in_theaters/in_theaters.html',
	// 			controller:'in_theatersCtrl'
	// 		})
	// 		.when('/coming_soon/:page',{
	// 			templateUrl:'./coming_soon/coming_soon.html',
	// 			controller:'coming_soonCtrl'
	// 		})
	// 		.when('/top250/:page',{
	// 			templateUrl:'./top250/top250.html',
	// 			controller:'top250Ctrl'
	// 		})
	// 		.when('/search/:page/:keyword',{
	// 			templateUrl:'./search/search.html',
	// 			controller:'searchCtrl'
	// 		})

	// 	// $sceDelegateProvider angular提供给我们的设置白名单的对象
	// 	$sceDelegateProvider.resourceUrlWhitelist([
	// 		'self',
	// 		'https://api.douban.com/v2/movie/in_theaters'
	// 	]);

	// }])
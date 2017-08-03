//alert(222);
angular.module('coming_soonModule', [])
    .controller('coming_soonCtrl', ['$scope', '$http', '$routeParams', '$location', 'myService', function ($scope, $http, $routeParams, $location, myService) {
        // $http({
        //     method: 'get',
        //     url: './js/in_theaters.json',
        // }).then(function (res) {
        //     // console.log(res);
        //     $scope.result = res.data;
        //     // $scope.msg = "11111";
        // })

        //https://api.douban.com/v2/movie/in_theaters

        var count = 10;
        var page = $routeParams.page;
        var totalPage = 0;
        var start = page * count - count;

        // $http.jsonp('https://api.douban.com/v2/movie/coming_soon').then(function(res){

		// 	console.log(res)

		// })

        myService.myJsonp('https://api.douban.com/v2/movie/coming_soon', {
            count: count,
            start: start
        }, function (res) {
            //alert(11);
            console.log(res);
            $scope.result = res;
            $scope.$apply();
        })
        
        $scope.changePage = function (flag) {

            if (flag == 'down') {
                // 下一页


                if (page < totalPage) {

                    page++;
                }

            } else if (flag == 'up') {
                // 上一页

                if (page > 1) {

                    page--;

                }

            }
            // 页面跳转 需要传递一个锚点值作为参数 
            // 页面跳转之后会重新执行控制器
            $location.path('/coming_soon/' + page);

        }


    }])
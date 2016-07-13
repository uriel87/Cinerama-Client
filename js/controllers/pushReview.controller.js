




app.controller('pushReviewCtl', ['$scope', '$http','$stateParams', '$state',function($scope, $http, $stateParams, $state) {

    $scope.sendPushReview = function (reviewType) {

        var dataReview = {

        }

        $http.post("https://cinerama.herokuapp.com/setOrderMovie/", dataReview).success(function(res, status) {
            console.log(res);
            $state.go('main');
        });
        $state.go('loading');

    }


}]);




















app.controller('reviewCtl', ['$scope', '$http', '$sce','$stateParams', '$state',function($scope, $http, $sce, $stateParams, $state) {


    console.log($state.params.movieName);
    console.log($state.params.user);


    $scope.pushReview = function(review, comment) {

        var dataReview = {
            nameMovie: $state.params.movieName,
            userName: $state.params.user,
            comment: comment,
            review: review,
        }

        $http.post("https://cinerama.herokuapp.com/pushReview/", dataReview).success(function(res, status) {
            console.log(res);
            $state.go('main');
        });
        $state.go('loading');
    };




}]);



app.controller('orderCtl', ['$scope', '$http', '$sce','$stateParams',function($scope, $http, $sce, $stateParams) {

    //$scope.movie.name = $stateParams.movie_name;

    $scope.CurrentBranch = [];

    var data = {
        name: $stateParams.movie_name
    };

    // $http.post("https://cinerama.herokuapp.com/getMovieDetails/", data).success(function(movie, status) {
    //     $scope.movies = movie;
    //     console.log($scope.movies);
    // });

    $http.post("http://localhost:3000/getMovieDetails/" , data).success(function(movie, status) {
        $scope.movies = movie;
        console.log($scope.movies);
    });



    $http.post("https://cinerama.herokuapp.com/getMovie/", data).success(function(movieDetails, status) {
        $scope.movieDetails = movieDetails;
        console.log($scope.movieDetails);
    });


    $http.post("https://cinerama.herokuapp.com/getMovieTrailer/", data).success(function(movieTrailer, status) {
        $scope.movieTrailer = $sce.trustAsResourceUrl(movieTrailer);
        console.log("movie trailer " + $scope.movieTrailer);
    });


    $http.post("https://cinerama.herokuapp.com/getMovieReview/", data).success(function(review, status) {
        $scope.review = review;
        console.log($scope.review);
    });


    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }


    $scope.changeCurrentMovie = function(currentBranch) {
        $scope.CurrentBranch = [];
        for (var i = 0; i < $scope.movies.length; i++) {
            if( ($scope.movies[i]._id.branch == currentBranch._id.branch) && ($scope.movies[i]._id.cinema == currentBranch._id.cinema) ) {
                $scope.CurrentBranch.push(angular.merge({}, $scope.movies[i]));
            }
        }
        console.log($scope.CurrentBranch);
    };


}]);




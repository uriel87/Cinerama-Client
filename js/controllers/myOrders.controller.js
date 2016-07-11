

app.controller('movieUserCtl', ['$scope', '$http',function($scope, $http) {

    var data = {
        email: "Yossi.Levy@gmail.com"
    };

    $http.post("https://cinerama.herokuapp.com/getMovieUser/", data).success(function(moviesUser, status) {
        $scope.moviesUser = moviesUser;
        console.log($scope.moviesUser);
    })

}]);







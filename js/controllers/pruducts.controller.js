

app.controller('paymentCtl', ['$scope', '$http',function($scope, $http) {

	$scope.cart = [];

	$http.post("https://cinerama.herokuapp.com/getAllProduct/").success(function (data) {
		$scope.products = data;
		console.log(data);
	}).error(function () {
		return "error was happened or the result is empty";
	});


	$scope.addToCart = function (product) {
		var found = false;
		$scope.cart.forEach(function (item) {
			if (item._id == product._id) {
				item.quantity++;
				found = true;
			}
		});
		if (!found) {
			$scope.cart.push(angular.extend(product, {quantity: 1}, product));
		}
	};

	$scope.getCartPrice = function () {
		var total = 0;
		$scope.cart.forEach(function (product) {
			total += product.price * product.quantity;
		});
		return total;
	};

}]);







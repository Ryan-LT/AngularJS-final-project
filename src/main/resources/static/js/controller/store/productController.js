var app = angular.module('myApp');
app.controller("productList", function($scope, $http, productDataOp, $routeParams){

	getData();

	//Product Detail Page Route
	$scope.ProductId = $routeParams.id;

	//Product CRUD Start
	$scope.addAvailable = function(id){
		productDataOp.addAvailable(id).then(Success, Error);
	}

	$scope.minusAvailable = function(id){
		productDataOp.minusAvailable(id).then(Success, Error);
	}

	$scope.addProduct = function() {
		var product = {
				name : $scope.name,
				model : $scope.model,
				year : $scope.year,
				price : $scope.price,
				producer: $scope.producer,
				available : $scope.available
		};
		productDataOp.addProduct(product).then(Success, Error);
		$scope.name = "",
		$scope.model = "",
		$scope.year = "",
		$scope.price = "",
		$scope.producer = "",
		$scope.available = ""
	};

	$scope.deleteProduct = function(id){
		productDataOp.deleteProduct(id).then(Success, Error);
	}
	//Product CRUD End
	
	// Exception Handling
	var Success = function(data, status, headers, config){
		getData();
	};

	var Error = function(data, status, headers, config){
		alert("Error");
	};
	//Get Data
	function getData() { 
		$http({
			method: 'get',
			url: "http://localhost:9000/fresherangular/product/list"
		}).success(function(data, status, headers, config){
			$scope.products = data;
		})
		.error(function(data, status, headers, config){});
	}
});

app.directive("productInfor", function() {
	return {
		templateUrl: '/fresherangular/views/store/ProductInfor.html',
	};
});
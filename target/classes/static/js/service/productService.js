var app = angular.module('myApp');

app.factory('productDataOp',function($http) {
	
	var addAvailable = function(id) {
		return $http({
			method: 'GET',
			url: "http://localhost:9000/fresherangular/product/increase/"+id
		}).then(function(response) {
			return response.data;
		});
	}
	
	var minusAvailable = function(id) {
		return $http({
			method: 'GET',
			url: "http://localhost:9000/fresherangular/product/decrease/"+id
		}).then(function(response) {
			return response.data;
		});
	}
	
	var addProduct = function(product) {
		return $http({
			method: 'POST',
			url: "http://localhost:9000/fresherangular/product/add",
			data: product
		}).then(function(response) {
			return response.data;
		});
	}
	
	var deleteProduct = function(id) {
		return $http({
			method: 'GET',
			url: "http://localhost:9000/fresherangular/product/delete/"+id
		}).then(function(response) {
			return response.data;
		});
	}
	
	
	return {
		addAvailable : addAvailable,
		minusAvailable : minusAvailable,
		addProduct: addProduct,
		deleteProduct : deleteProduct
	}
});
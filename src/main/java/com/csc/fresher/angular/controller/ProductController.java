package com.csc.fresher.angular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.csc.fresher.angular.dto.Product;
import com.csc.fresher.angular.service.ProductService;

/**
 * 
 * @author cnguyen43
 *
 */

@RestController
public class ProductController {

	@Autowired
	ProductService service;
	
	@RequestMapping("/product/list")
	public List<Product> getProductList() {
		return service.getProductList();
	}
	
	@RequestMapping(value="/product/add", method=RequestMethod.POST )
	public void addProduct(@RequestBody Product product) {
		service.addProduct(product);
	}
	
	@RequestMapping("/product/delete/{id}")
	public void deleteProduct(@PathVariable long id) {
		service.deleteProduct(id);
	}
	
	@RequestMapping("/product/get/{id}")
	public Product getProduct(@PathVariable long id) {
		return service.getProduct(id);
	}
	
	@RequestMapping("/product/increase/{id}")
	public Product increaseAvailable(@PathVariable long id) {
		service.increaseAvailableByOne(id);
		return service.getProduct(id);
	}
	
	@RequestMapping("/product/decrease/{id}")
	public Product decreaseAvailable(@PathVariable long id) {
		service.decreaseAvailableByOne(id);
		return service.getProduct(id);
	}
}

package com.csc.fresher.angular.dto;

import java.io.Serializable;

/**
 * 
 * @author cnguyen43
 *
 */
public class Product implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5271434030569471113L;

	private long id;
	private String name;
	private String model;
	private int year;
	private long price;
	private String producer;
	private int available;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public long getPrice() {
		return price;
	}
	public void setPrice(long price) {
		this.price = price;
	}
	public String getProducer() {
		return producer;
	}
	public void setProducer(String producer) {
		this.producer = producer;
	}
	public int getAvailable() {
		return available;
	}
	public void setAvailable(int available) {
		this.available = available;
	}
	
	
}

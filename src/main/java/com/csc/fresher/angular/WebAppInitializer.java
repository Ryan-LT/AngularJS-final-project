package com.csc.fresher.angular;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * 
 * @author cnguyen43
 *
 */

@Configuration
@EnableAutoConfiguration
@ComponentScan("com.csc.fresher.angular")
public class WebAppInitializer{

	public static void main(String[] args) throws Exception{
		SpringApplication.run(WebAppInitializer.class, args);
	}
}
package com.devsuperior.dsdeliver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = 
{DataSourceAutoConfiguration.class
		} )
public class DsdeliverApplication {

	public static void main(String[] args) {
		SpringApplication.run(DsdeliverApplication.class, args);
	}

}

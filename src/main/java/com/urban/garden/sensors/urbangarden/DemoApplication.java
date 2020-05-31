package com.urban.garden.sensors.urbangarden;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class DemoApplication implements WebMvcConfigurer, WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> {

	public static void main(String[] args) {
		System.out.println("starting app...");
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void customize(ConfigurableServletWebServerFactory factory) {
		factory.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/index.html"));
	}

}

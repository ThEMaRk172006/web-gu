package com.silverleaf.demo;package com.silverleaf.demo;package com.silverleaf.demo;



import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.SpringApplication;import org.springframework.boot.SpringApplication;

@SpringBootApplication

public class SilverLeafApplication {import org.springframework.boot.autoconfigure.SpringBootApplication;import org.springframework.boot.autoconfigure.SpringBootApplication;

    public static void main(String[] args) {

        SpringApplication.run(SilverLeafApplication.class, args);import org.springframework.context.annotation.Bean;

    }

}import org.springframework.web.cors.CorsConfiguration;@SpringBootApplication


import org.springframework.web.cors.CorsConfigurationSource;public class SilverLeafApplication {

import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

    public static void main(String[] args) {

import java.util.Arrays;        SpringApplication.run(SilverLeafApplication.class, args);

    }

@SpringBootApplication

public class SilverLeafApplication {}


    public static void main(String[] args) {
        SpringApplication.run(SilverLeafApplication.class, args);
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000", "http://localhost:8000", "http://127.0.0.1:8000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}

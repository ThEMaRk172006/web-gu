package com.silverleaf.demo.config;package com.silverleaf.demo.config;



import org.springframework.context.annotation.Configuration;import org.springframework.context.annotation.Configuration;

import org.springframework.web.servlet.config.annotation.CorsRegistry;import org.springframework.web.servlet.config.annotation.CorsRegistry;

import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



@Configuration@Configuration

public class CorsConfig implements WebMvcConfigurer {public class CorsConfig implements WebMvcConfigurer {

    @Override

    public void addCorsMappings(CorsRegistry registry) {    @Override

        registry.addMapping("/**")    public void addCorsMappings(CorsRegistry registry) {

                .allowedOrigins("*")        registry.addMapping("/api/**")

                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")                .allowedOrigins("*")

                .allowedHeaders("*")                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")

                .allowCredentials(false);                .allowedHeaders("*")

    }                .maxAge(3600);

}    }

}

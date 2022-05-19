# Get Started

## Info
Backend API will be served in the default port `:8080`

To change database configurations, change it in `/src/main/resources/application.properties`

## Requirements
- Java 17
- Spring Boot 2.6.7

## Packages
- Spring Boot
- Spring Web
- Spring Security
- Spring Data JPA
- Spring Boot Dev Tools
- JDBC MySQL driver
- Lombok
- SpringDoc OpenAPI
- ModelMapper
- Auth0 JWT

## Compile and run
*Make sure to use maven using `./mvnw` instead of `mvn` to avoid version conflicts*

Generate jar files with
> `./mvnw package`

Then execute JAR files with
> `java -jar target/twitterclone-0.0.1-SNAPSHOT.jar`

Or do everything in one command
> `./mvnw spring-boot:run`

## OpenAPI

OpenAPI url
> `localhost:8080/api-docs`

Swagger UI:
> `localhost:8080/swagger-ui/index.html`

## Docker
The `Dockerfile` in this directory was designed to work with another container running a `mysql` instance. It might not work on its own.
FROM openjdk:17-jdk-alpine
WORKDIR /backend
COPY . .
RUN ./mvnw clean
RUN ./mvnw package -Dmaven.test.skip
CMD [ "java", "-jar", "target/twitterclone-0.0.1-SNAPSHOT.jar" ]
EXPOSE 8080
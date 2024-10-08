FROM maven:3.9.1 as build
WORKDIR /app
COPY pom.xml .
COPY /src ./src
RUN mvn package -DskipTests

FROM openjdk:17
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
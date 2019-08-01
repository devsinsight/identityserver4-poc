# IdentityServer4 Examples

The following examples shows how identity server interact with different technologies through different grant types:
 - Client Credencial flow
 - Implicit flow
 - .NET Core and Java Spring Boot services as resources

## Folders

This example contains two resources:

 1. resource1: API Rest service  -.NET Core 2.2 
 2. resource2: API REST service - Java Srping Boot 2.1.6
 
 This example contains two clients:
 
 1. client1: Console Application .NET Core 2.2
 2. client2: Angular 8
 
 This example contains one Security Token Service (ids4)

## Client Credential flow

Sequence Diagram for Client Credentian flow:
![alt text](https://raw.githubusercontent.com/devsinsight/identityserver4-poc/master/CreditCredentialFlow.png)

## Implicit flow
Sequence Diagram for Implicit flow:
![alt text](https://raw.githubusercontent.com/devsinsight/identityserver4-poc/master/ImplicitFlow.png)


## How to build

This example is build against .NET Core SDK 2.2 and the latest version of Java SDK
 - Install [.NET Core SDK 2.2](https://dotnet.microsoft.com/download#/current) 
 - Install [Java SDK]([https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)) 
 - Install [Angular](https://angular.io/guide/setup-local)
 - For the STS, execute: 
     - dotnet run --project ids4
 - For the resource1, execute: 
     - dotnet run --project resource1
 - Under the resource2 folder, execute: 
	 - ./gradlew build 
	 - java -jar build/libs/resource2-0.0.1-SNAPSHOT.jar
 - Under the client2 folder, execute: 
     - npm install
 - Under the client2 folder, execute: 
     - ng serve -o
 - client1 is a console app which interacts with bith .NET and Java using Client Credential grant type, to test, execute: 
     - dotnet run --project client1
 

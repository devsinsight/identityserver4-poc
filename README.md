# IdentityServer4 Examples

In the following examples we're going to show how identity server interact with different technologies through different grant types:
 - Client Credencial flow
 - Implicit flow
 - .NET Core and Java Spring Boot services as resourcers

## Folders

This example contains two resources:

 1. Resource1: API Rest service  -.NET Core 2.2 
 2. Resource2: API REST service - Java Srping Boot 2.1.6
 
 This example contains two clients:
 
 1. Client1: Console Application .NET Core 2.2
 2. Client2: Angular 8
 
 This example contains one Security Token Service (ids4)

## Client Credential flow

Sequence Diagram for Client Credentian flow:

```mermaid
sequenceDiagram
Client1 ->> ids4: 1. Authenticate with ClientID/Secret
ids4->>ids4: 2. Validate ClientID/Secret
ids4->>Client1: 3. Access Token
Client1->> Resource: 4. Request data with Access Token
Resource->>ids4:5. Request Validate Token
ids4->>ids4: 6. Validate Token
ids4->>Resource: 7. Response (200|401)
Resource->>Client1: 8. Response
Note right of Resource: The Resource could <br>be Resource1 or <br>Resource2.
```
## Implicit flow
Sequence diagram for Implicit flow:
```mermaid
sequenceDiagram
User ->> Client2: 1. Request Login
Client2 ->> ids4: 2. Request Authentication
ids4->>ids4: 3. Validate Url
ids4->>ids4: 4. Redirect to Login
User->> ids4: 5. Enter User/Password
ids4->>ids4: 6. Validate Credentials
ids4->>Client2: 7. Access Token
Client2->>Client2: 8. Store Access Token
Client2->>Client2: 9. Redirect to Welcome Page
User->>Client2: 10. Request data
Client2->>Resource:11. Request data with Access Token
Resource->>ids4:12. Request Validate Token
ids4->>ids4: 13. Validate Token
ids4->>Resource: 14. Response (200|401)
Resource->>Client2:14. Response data
Client2->>User: 15. Show data
Note right of Resource: The Resource could <br>be Resource1 or <br>Resource2.
```
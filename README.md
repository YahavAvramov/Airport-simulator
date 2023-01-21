# AirportSimulator
This project simulates an airport with 2 main operations:\
Aircraft landing\
Aircraft lifting

The project combines 3 layers including:

SQL database - whose role is to save the details of the planes at the airport

ASP.NET server - whose role is to synchronize the planes, transfer information to the client side and enter and receive information from the database.

Angular client-side - whose role is to show the user the state of the airport field

### Technologies in the project:

##### ASP.NET / SQL / Angular / C# / TypeScript / Html / Css

### `Server-side`
The server side is built in ASP.NET and written in C#,\
it contains the logic that enables synchronization between planes entering and leaving the airport.\
The `AirportContext.cs` file that inherits from DbContext creates the connection with the database.\
The file `SqlAirportData.cs` is the service that contains methods for receiving information and entering information into the database.\
`AirPortController` contains functions with which the server receives information from the client or returns information to the client on demand.\
(through indirect use of the SqlAirportData class)

### `Client-side`
The client side is built in Angular and written in Typescript, and its role is to show the user the current situation at the airport.\
In the `AirportServiceService` class, it uses the address of the server to communicate with it through the controller.\
As a default, the project is hosted at `http://localhost:4200`, which allows it to receive information from the server according to this address.\
If the address changes, it must be added on the server in the Corse section


### `Demo`
youtube - https://www.youtube.com/watch?v=9WAYQBr6BoE&t=1s


# Cesium Mock Project
The primary goal of this project is to implement a materials management component that allows users to create and manage a catalog of materials for construction projects.The following functionality are implemented:

1) Display the current list of materials
2) Allow users to create, edit, and delete materials
3) Allow users to select a material's color through a color picker
4) Calculate and display the total value of materials listed

##### Feature Implemented to use REST API server
5) I have implemented a feature to facilitate the retrieval of data from a server by integrating an API call, which is triggered by a button labeled "Fetch", Upon execution, the retrieved data is then displayed on the console

## Basic overwiew of what this project contains:

1) A reusable component that implements the material management functionality
2) Integration with a REST API server to allow for data persistence and retrieval
3) A Node.js-based server to host the REST API, if necessary
4) Unit tests to ensure the correctness of the implementation

# How to Run the project:

### Running React App.js file
This guide provides steps on how to run the React App.js file located in the /project/src directory.
##### Prerequisites
Before proceeding, ensure that you have the following installed on your machine:

```sh
Node.js
npm (Node Package Manager)
```

#### Steps
1) Open a terminal on your machine
2) Navigate to the project directory
```sh
cd /path/to/project
```
3) Install the dependencies
```sh
npm install
```
4) Start the application
```sh
npm start
```
Navigate to http://localhost:3000/ on your web browser to view the running application.
You should now be able to view the running application in your web browser.

### Running server.js
This guide provides instructions on how to run the server.js file located in the /project/server directory.

##### Prerequisites
Before proceeding, ensure that you have the following installed on your machine:
```sh
Node.js
```

#### Steps
1) Open a terminal on your machine
2) Navigate to the project directory
```sh
cd /path/to/project
```
3) Navigate to the /server directory
```sh
cd server
```
4) Install the dependencies
```sh
npm install
```
5) Start the server
```sh
node server.js
```
The server is now running and listening for requests on http://localhost:8080/.
You should now be able to access the server on your web browser or through a REST client like Postman.

##### Time Spent on Completing the Project: 
* 3 hour 30mins

#### Bugs
1) Color picker does not change to default when add button is clicked, instead it remains on the last added material color
2) Not very well tested for edge cases

#### Note 
I wrote some test cases using simple logic but was unable to run them because of the error "Support for the experimental syntax 'jsx' isn't currently enabled", But I think logically the test cases are correct.

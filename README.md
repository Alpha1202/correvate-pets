# Correvate Pets

> ### Correvate Pets is your one-stop pet store.


This codebase was created to demonstrate a fully fledged application built with Angular, Angular material and ngxs for state management that interacts with an actual backend server including CRUD operations, authentication, and routing. 

# How it works

This app allow users to login and displays a list of pets by status: "available", "pending", "sold". Users can also create new pets.


# Getting started

- Ensure you have the [Angular CLI](https://github.com/angular/angular-cli#installation) installed globally.

- Using the docs [here](https://hub.docker.com/r/swaggerapi/petstore/) as guide, pull the petstore docker image using the commands in the docs

- CD into the app and run `npm install` `yarn install`  to resolve all dependencies (might take a minute).

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

### Building the project
- Run `ng build` to build the project. 
- Use the `-prod` flag for a production build.


## Functionality overview

This application is a solution to correvate's software engineer (angular) test called "Correvate Pets". It uses the [petstore](https://hub.docker.com/r/swaggerapi/petstore/) API for all requests, including authentication.

**General functionality:**

- Login a user (login page on the landing page)
- Logout a user
- Create new pet
- Get and display pets by status
- Get and display a given pets  details


**The general page breakdown looks like this:**

- Login page (URL: /#/ )
- View Pets (URL: /#/pets )
    - Displays a list of pets of the same status in a card
    - Shows a given pet's details when a pet's card is clicked
- Create new pet page (URL: /#/create-pet )
    - Shows a form for adding new pet
<br />


## Developer

Nzubechukwu Nnamani

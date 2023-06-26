#Introduction

This is a website that uses a strapi database that I made for my web technology unit. In this repo I have included the files for frontend, you need to create the backend strapi database yourself. Instructions to do so are included. 

This is a job application website where companies can post jobs and company information, then job applicants can log in and apply for the jobs. A video demonstrated can be seen here: 

After the dependencies are installed using 'npm' such as 'http-server', you can run the frontend:

```shell
npm install
```

```shell
npm run frontend
```
Then you can follow the information on how to create the strapi backend and upload the sample data
[assignment spec](doc/backend.md).

```shell
npm run backend
```
[assignment spec](doc/data.md).


More details of assignment below
# COMP2110 Web Development Assignment

This project implements the Bob's Jobs web application for the COMP2110 
Web Development assignment.  

Full details of the assignment requirements are in [the doc folder](doc/assignment.md). 

## Getting Started

Once you have cloned a copy of this repository locally you need to install the 
dependancies using `npm`.  This requires that you have `node` and `npm` installed.  

The overall project consists of two sub-projects for the backend and the frontend.
Each is independant in terms of code and the backend project (Strapi) will have
its own `package.json` file and node modules installed.  You will need to create
that project when the time comes.

In the main folder, you need to install the project dependencies (`http-server`
to run the frontend server and `cypress` for testing):

```shell
npm install
```

Once you have done this you can run the frontend server from the main project
directory with:

```shell
npm run frontend
```

To run the tests you can open up the Cypress GUI:

```shell
npm run cypress
```

The tests are split into 12 separate files so that we can run them automatically
as part of the Github Classroom grading.  Initially the tests for levels 1 and 2
are provided.  Otherse will be added later.  You may not change anything about
the tests (we would be able to see from the git logs).

## Level 3 and 4

Details of these levels are now in the [assignment spec](doc/assignment.md).

## Extension

If you have implemented an extension to the base requirements, describe it here.

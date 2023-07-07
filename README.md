# Quick Introduction

This is a website that uses a strapi database that I made for my web technology unit. In this repo I have included the files for frontend, you need to create the backend strapi database yourself. Instructions to do so are included. 

This is a job application website where companies can post jobs and company information, then job applicants can log in and apply for the jobs. A video demonstrated can be seen here: https://youtu.be/LLIxlsXStug

After the dependencies are installed using 'npm' such as 'http-server', you can run the frontend:

```shell
npm install
```

```shell
npm run frontend
```
Then you can follow the information on how to create the strapi backend and upload the sample data. 
[BACKEND INFO](doc/backend.md).

You will create a strapi app
```shell
npx create-strapi-app@latest backend --quickstart
```

then run it
```shell
npm run backend
```

Use the data.md file in doc to configure the strapi database for the companines info, jobs and users logins data. [Database setup](doc/data.md).
![image](https://github.com/LukeJenningsMQ/First-Website-Assignment-Using-a-Strapi-Database/assets/61956662/968b2f09-95b5-45b6-a1c9-c658f9236c24)

![image](https://github.com/LukeJenningsMQ/First-Website-Assignment-Using-a-Strapi-Database/assets/61956662/635ab825-730e-4eab-acbf-c54233647cfd)

![image](https://github.com/LukeJenningsMQ/First-Website-Assignment-Using-a-Strapi-Database/assets/61956662/f1b67de5-9edd-4578-b12e-710e606d9c5d)



![image](https://github.com/LukeJenningsMQ/First-Website-Assignment-Using-a-Strapi-Database/assets/61956662/42d280e0-8da9-485f-9a7a-9bb39ec4dbec)






```shell
npm run sampleData
```

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

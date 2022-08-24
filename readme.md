# Natours Application

Natours application is a tour booking api and server-side rendered e-commerce website using node.js, express, mongoDB, mongoose and pug.

## Project Description

### Website Features

- Show all tours and display detail page of each tour with other users' reviews
- User log in, change password, reset password, secure cookies and user role authorization
  - **admin** email: admin@natours.io / password: test1234
  - **user** email: laura@example.com / password: test1234
  - **guide** email: jennifer@example.com / password: test1234
- Book and pay for a tour and check booking history at my bookings in account settings page

### API Documentation

Natours backend api documentation can be found [here](https://documenter.getpostman.com/view/20573425/UyxnF5ty)

### What I've learned

- Node.js and Express
- MongoDB with Mongoose: geospatial, data populates and modeling
- Postman
- RESTful API design and CRUD operations
- Error handling with Express
- Authentication, Authorization and Security (bcrypt, jsonwebtoken)
- Server-side rendering with pug templates
- Credit card payments with stripe
- Sending email using nodemailer
- Uploading files and image processing

### Live demo link

[https://natours-hyeyoung.herokuapp.com/](https://natours-hyeyoung.herokuapp.com/)

## How to Install and Run the Project

1. Clone the project

```bash
  git clone https://github.com/hykim-soulis/natours.git
```

2. Go to the project directory

```bash
  cd project-directory
```

3. Install natours with npm

```bash
  npm install
```

4. Start natours with npm

```bash
  npm run start
```

## Resource

This project is coding-along project from the Udemy Node.js, Express, MongoDB & More: The Complete Bootcamp 2022 by instructor Jonas Schmedtmann. Part of HTML, CSS and image files were provided by the instructor.

The below link is the instructor's github address.

[Instructor's GitHub](https://github.com/jonasschmedtmann/complete-node-bootcamp.git)

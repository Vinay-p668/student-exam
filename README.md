# Student Exam

Hey there! This is a simple app for students to register, log in, and take a JavaScript-themed multiple-choice exam. It has 5 random questions from a pool of 15, runs a 30-minute timer, and shows your score. Built with Node.js, Express, MongoDB, and a frontend with HTML, CSS, JavaScript, and Tailwind CSS. Uses MVC and JWT for secure login.

## What It Does
- Register and log in with a username and password (JWT-based).
- Take an exam with 5 random JavaScript questions.
- Navigate with Next/Previous buttons.
- 30-minute timer that auto-submits.
- View your score and answers on the results page.
- Stores users and questions in MongoDB (Atlas).

## What It Does

 ![Student Exam ](https://github.com/Vinay-p668/student-exam/blob/master/images/login.png)

 ![Student Exam ](https://github.com/Vinay-p668/student-exam/blob/master/images/exam.png)

 ![Student Exam ](https://github.com/Vinay-p668/student-exam/blob/master/images/result.png)



 



## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Auth**: JWT
- **API Testing**: Postman

## Project Structure
- `controllers/`: Backend logic for auth and exams.
- `models/`: MongoDB schemas for users and questions.
- `routes/`: API routes for auth and exams.
- `middleware/`: JWT verification.
- `public/`: Frontend files (HTML, CSS, JS).
- `postman/`: Postman collection.
- `questions.json`: 15 JavaScript questions.
- `server.js`: Main server with MongoDB connection.
- `.env`: MongoDB URI, JWT secret, and port.
- `tailwind.config.js`: Tailwind CSS config.

## Getting Started

### Prerequisites
- Node.js (v24)
- MongoDB (MongoDB Atlas)
- Git
- Postman  (API testing)

### Setup
**Clone the repo** (after pushing):
   ```bash
   git clone https://github.com/Vinay-p668/student-exam.git
   cd student-exam

**Install dependencies**
    ```bash
    npm install

**Set up environment variables**
   Create a .env file:
    MONGO_URI= use local host if using mongoDB in localStorage..
   JWT_SECRET=your_jwt_secret_key
   PORT=2800 or ANY(chace API _URL in froentend if PORT NO is changed)

For MongoDB Atlas:  use your connection string avaiable in MongoDB Atlas.

**Build Tailwind CSS**
   ```bash
    npm run build:css

  Creates public/css/styles.css. If input.css is missing:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

**Start the server**
   ```bash
     npm start

**MongoDB Setup
   Option 1: Local MongoDB
             Ensure MongoDB is running (mongod).
             Open MongoDB shell:
             ```bash
              mongo
   Import questions (see questions.json for full list)

    Option 2: MongoDB Atlas
              Log in to Atlas, choose  exam_db .
              Import questions.json:Collections > exam_db > questions > Add Data > Import                   File.
              Select questions.json, choose JSON format, and import.


  **API Testing**
      Using Postman :
         Import postman/postman_collection.json.
         Set API_URL to http://localhost:2800 or(ANY).
         Run:Register User: Create a user (e.g., {"username": "testuser", "password":                 "password123"}).
         Login User: Get a JWT token, set as TOKEN.
         Get Exam Questions: Fetch 5 questions (needs Bearer {{TOKEN}}).
         Submit Exam: Submit answers ( ["var", "object", "push()", "function myFunc() {}",            "Value and type"]).














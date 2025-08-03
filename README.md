# Student Exam

Hey there! This is a simple app for students to register, log in, and take a JavaScript-themed multiple-choice exam. It has 5 random questions from a pool of 15, runs a 30-minute timer, and shows your score. Built with Node.js, Express, MongoDB, and a frontend with HTML, CSS, JavaScript, and Tailwind CSS. Uses MVC and JWT for secure login.

## What It Does
- Register and log in with a username and password (JWT-based).
- Take an exam with 5 random JavaScript questions.
- Navigate with Next/Previous buttons.
- 30-minute timer that auto-submits.
- View your score and answers on the results page.
- Stores users and questions in MongoDB (Atlas).

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
```bash
cd C:\Users\vinnu\OneDrive\Desktop\Web development\Student Exam
echo. > README.md

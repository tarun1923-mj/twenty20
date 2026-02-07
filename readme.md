# Twenty20 Portfolio Web Application

This is a simple, responsive full-stack web application built as part of the hiring assessment for Twenty20 Systems.  
The application provides user authentication (login and registration) and displays a personal portfolio page after successful login.

The focus of this project is on functionality, clarity, and correctness rather than advanced UI or complex features.


## Features

### Authentication
- Separate Login and Register pages
- Email and password based authentication
- Password confirmation during registration
- Client-side password validation
- Clear success and error messages

### Portfolio Page
- Accessible only after successful login
- Displays:
  - User email
  - About section
  - Skills
  - Projects
- Logout functionality that redirects to login page

### UI
- Clean and minimal UI
- Responsive for desktop and mobile devices
- Consistent design across all pages

---

## Password Criteria
Passwords must:
- Be at least 8 characters long
- Contain one uppercase letter
- Contain one lowercase letter
- Contain one number
- Match the confirm password field

---

## Tech Stack

Frontend:
- HTML
- CSS
- Vanilla JavaScript

Backend:
- Node.js
- Express.js

Database:
- MongoDB Atlas

Deployment:
- Vercel

---

## Project Structure

twenty20-app
|--index.js
|-- server
|   
|   |-- User.js
|
|-- public
|   |-- login.html
|   |-- register.html
|   |-- portfolio.html
|   |-- style.css
|   |-- auth.js
|
|-- .env
|-- package.json
|-- README.md

---

## Local Setup Instructions

1. Clone the repository

git clone https://github.com/<your-username>/<repo-name>
cd twenty20-app

2. Install dependencies

npm install

3. Configure environment variables

Create a .env file in the project root:

MONGO_URI=your_mongodb_atlas_connection_string

Note: Do not commit the .env file to GitHub.

4. Run the application

node server/index.js

Open the application in your browser:

http://localhost:3000

---

## Evaluation Checklist

- Application loads successfully
- User registration works and stores data in MongoDB
- Login works using registered credentials
- Successful login redirects to portfolio page
- Portfolio page displays user email and content
- Logout redirects back to login page
- Responsive on desktop and mobile
- Public GitHub repository
- Live deployed application on Vercel

---

## Author

Tarun MJ
Software Developer · ML Enthusiast · Problem Solver

## Notes
- MongoDB Atlas is used as the cloud database
- Environment variables are handled securely
- UI is intentionally minimal and focused on usability

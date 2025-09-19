Absolutely! Here’s a **complete `README.md`** for your plain HTML/JS Notepad app with **user authentication, MongoDB setup, and commands to run**—everything in a fully **copyable Markdown format**:

sample website : https://mongodb-sample.onrender.com/
---

````markdown
# Notepad App with User Authentication

A simple **Notepad web application** with user registration/login and private notes per user.  

- Backend: Node.js + Express  
- Database: MongoDB Atlas  
- Frontend: Plain HTML, CSS, JavaScript  

---

## Features

- User registration and login  
- JWT-based authentication  
- Add, view, and delete notes  
- Notes are private to each user  

---

## Prerequisites

- Node.js (v14+) and npm installed  
- MongoDB Atlas account (free tier)  

---

## 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/notepad-app.git
cd notepad-app
````

---

## 2. Install Dependencies

```bash
npm install
```

This installs all required packages:

* express
* mongoose
* body-parser
* cors
* bcryptjs
* jsonwebtoken
* dotenv

---

## 3. Set Up MongoDB Atlas

1. Sign up or log in at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a **Free Cluster**.
3. Create a **database user** with username and password.
4. Whitelist your IP address (or use 0.0.0.0/0 to allow all IPs for testing).
5. Create a database (e.g., `notepadDB`).
6. Copy your connection string:

```
mongodb+srv://<username>:<password>@cluster0.mongodb.net/notepadDB?retryWrites=true&w=majority
```

Replace `<username>`, `<password>`, and `notepadDB` with your values.

---

## 4. Configure Environment Variables

Create a `.env` file in the project root:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

* `MONGODB_URI`: The connection string from MongoDB Atlas
* `JWT_SECRET`: Any random string (used to sign JWT tokens)

**Example:**

```
MONGODB_URI=mongodb+srv://admin:pass123@cluster0.mongodb.net/notepadDB?retryWrites=true&w=majority
JWT_SECRET=mysecretkey
```

---

## 5. Run the Application

```bash
node index.js
```

* Server will start at `http://localhost:5000`.
* Open the frontend in your browser:

  * Register: `public/register.html`
  * Login: `public/login.html`
  * Notes page: `public/index.html`

---

## 6. API Endpoints

| Method | Endpoint           | Description                |
| ------ | ------------------ | -------------------------- |
| POST   | /api/auth/register | Register a new user        |
| POST   | /api/auth/login    | Login and get JWT token    |
| GET    | /api/notes         | Get all notes for the user |
| POST   | /api/notes         | Create a new note          |
| PUT    | /api/notes/\:id    | Update a note by ID        |
| DELETE | /api/notes/\:id    | Delete a note by ID        |

> **Note:** Notes endpoints require `Authorization: Bearer <token>` header.

---

## 7. Important Notes

* Do **not** commit your `.env` file to GitHub.
* JWT token is stored in localStorage (for the HTML frontend).
* Each note is linked to the user who created it.

---


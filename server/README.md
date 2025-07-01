# 🎯 Backend - Event Management App (Node.js + Express + MongoDB)

This is the backend of the Event Management web application built using **Node.js**, **Express**, and **MongoDB (native driver)**. It provides a REST API to manage authentication and event operations securely using JWT-based authentication.

## 🧩 Features

- 🔐 Custom registration and login system (no Firebase)
- 🔑 JWT-based token authentication
- ➕ Add new events
- 📄 View all events (searchable + filterable)
- 👤 View and manage user-specific events
- ✅ Join events (once per user)
- ✏️ Update & delete own events

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (native driver)
- JSON Web Tokens (JWT)
- Bcrypt (password hashing)
- Dotenv (for environment variables)

## 🔧 Setup Instructions

1. Clone the repo and install dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Create `.env` file in `/backend`:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

3. Start the server:

   ```bash
   node server.js
   ```

4. Backend will run on:  
   `http://localhost:5000`

## 📁 API Routes

| Method | Endpoint              | Description                 | Protected |
| ------ | --------------------- | --------------------------- | --------- |
| POST   | /api/auth/register    | Register new user           | ❌        |
| POST   | /api/auth/login       | Login and get token         | ❌        |
| GET    | /api/events           | Get all events (searchable) | ❌        |
| POST   | /api/events           | Add a new event             | ✅        |
| POST   | /api/events/join/:id  | Join an event               | ✅        |
| GET    | /api/events/my-events | Get current user's events   | ✅        |
| PUT    | /api/events/:id       | Update user's event         | ✅        |
| DELETE | /api/events/:id       | Delete user's event         | ✅        |

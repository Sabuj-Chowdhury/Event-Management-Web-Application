# 🌐 Frontend - Event Management App (React.js)

This is the frontend of the Event Management web app built using **React**, **React Router**, **Axios**, and **Tailwind CSS**. It communicates with the backend API and provides an intuitive interface for users to manage events.

## ⚙️ Features

- 🔐 Login & registration (with profile photo)
- 🧭 Protected routes using `AuthContext`
- 🔍 Search events by title
- 📅 Filter events by date range
- ➕ Add events
- ✅ Join events (join once per user)
- ✏️ Update and ❌ delete own events
- 📸 Navbar with profile dropdown

## 🛠️ Tech Stack

- React + Vite
- React Router DOM
- Axios
- Tailwind CSS
- Context API (for Auth)
- LocalStorage (for token/user)

## 🔧 Setup Instructions

1. Clone the repo and install dependencies:

   ```bash
   cd event-client
   npm install
   ```

2. Start the frontend:

   ```bash
   npm run dev
   ```

3. Runs on:  
   `http://localhost:5173`

## 📁 Pages and Routes

| Route        | Description               | Access    |
| ------------ | ------------------------- | --------- |
| `/`          | Homepage                  | Public    |
| `/login`     | Login page                | Public    |
| `/register`  | Registration page         | Public    |
| `/events`    | Browse/Search/Join events | Protected |
| `/add-event` | Add new event             | Protected |
| `/my-events` | Update/Delete user events | Protected |

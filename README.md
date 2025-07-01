# 🎉 Event Management Web Application (MERN Stack)

This is a full-stack Event Management Web App built using the **MERN** stack:  
**MongoDB, Express.js, React.js, Node.js**

Users can register, log in, create events, browse/filter/search events, join events, and manage their own listings.

---

## 🌐 Live Links

- 🔗 **Frontend (Live)**: [https://event-mangement-33323.web.app](https://event-mangement-33323.web.app)
- 🔗 **Backend (Live API)**: [https://event-management-task-theta.vercel.app](https://event-management-task-theta.vercel.app/api)
- 🖥️ **Local Frontend**: `http://localhost:5173`
- 🖥️ **Local Backend**: `http://localhost:5000/api`

---

## 🌟 Key Functionalities

### ✅ Authentication

- Custom email/password auth system
- JWT token-based login
- Profile image + name shown in navbar

### 📅 Event Management

- Add events with details (title, time, date, location, etc.)
- See all events sorted by date/time
- Join any event (only once)
- View and manage (update/delete) only your events

### 🔍 Search & Filter

- 🔍 Search by event title
- 📅 Filter by:
  - Today
  - This Week / Last Week
  - This Month / Last Month

### 🔒 Protected Routes

- Events, Add Event, and My Events are all private
- AuthContext used to protect routes and manage session

---

## 🛠️ Technologies Used

| Layer    | Tech                                     |
| -------- | ---------------------------------------- |
| Frontend | React, React Router, Axios, Tailwind CSS |
| Backend  | Express.js, Node.js, JWT, Bcrypt         |
| Database | MongoDB (Native Driver)                  |
| Auth     | Custom JWT-based system                  |

---

## 🚀 How to Run the Project Locally

1. **Clone both folders**: `/backend` and `/event-client`
2. Set up `.env` file for backend
3. Run backend server:

   ```bash
   cd backend
   npm install
   node server.js
   ```

   Local API will run at `http://localhost:5000/api`

4. Run frontend:
   ```bash
   cd event-client
   npm install
   npm run dev
   ```
   Frontend will be available at `http://localhost:5173`

---

## 🧪 Demo Features to Showcase

- Register with profile picture
- Add + join event once
- My Events management (update/delete)
- Live search + dynamic date filtering
- Responsive layout with smooth UI

---

## 📦 Deployment Options

- Frontend: Vercel / Netlify
- Backend: Render / Railway / Cyclic
- DB: MongoDB Atlas (free tier)

---

## 📌 Author

Developed as part of a Web Instructor Assessment Task.

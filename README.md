# 🧠 Thoughts

> **"Turning your Thoughts into Stories"** — A minimal, elegant, and powerful platform to write, read, and engage with ideas.

---

## 🚀 Live Demo

[🔗 Visit Thoughts](http://localhost:5173)  
(Coming soon to production!)

---

## 🏗️ Tech Stack

### Frontend
- ⚛️ React + TypeScript
- 💨 Tailwind CSS
- 📦 Zustand (state management)
- 🔐 JWT Token Handling via Zustand store
- ⚙️ Axios (with `Authorization: Bearer` token header)

### Backend
- 🚂 Express.js
- 🛢️ PostgreSQL (via Prisma ORM)
- 🔐 JWT Authentication
- 🧰 Middleware-based validation
- 📫 REST API structure

---

## 🧠 Features

- ✍️ **Write Stories** - Start typing with a minimalist UI.
- 📖 **Read Stories** - Browse trending or latest posts.
- 🔐 **Authentication** - Login/signup using secure token-based authentication.
- 🪝 **Global State** - Zustand for login status, user details, token.
- 🧵 **Fully Componentized UI** - Reusable, responsive components built from scratch.
- 🎯 **Fullstack Integration** - Proper request handling and token flow from backend to frontend.

---

## 🧭 API Endpoints (Backend)

**Base URL:** `http://localhost:4001/api/v1`

### Auth Routes

| Method | Route          | Description                  |
|--------|----------------|------------------------------|
| POST   | /user/signup   | Create new user              |
| POST   | /user/signin   | Login user and get JWT token |

### Post Routes

| Method | Route             | Description                                              |
|--------|-------------------|----------------------------------------------------------|
| GET    | /get/bulkposts    | Get paginated posts                                      |
|        |                   | **Query Params:** `?type=trending|new&page=1&pageSize=10` |
|        |                   | **Header:** `Authorization: Bearer <token>`             |

---

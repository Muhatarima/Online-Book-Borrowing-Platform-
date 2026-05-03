# 📚 Online Book Borrowing Platform

🔗 **Live Site:** https://online-book-borrowing-platform-gamma.vercel.app/
🔗 **GitHub Repo:** https://github.com/Muhatarima/Online-Book-Borrowing-Platform-

---

## 📖 Project Overview

The **Online Book Borrowing Platform** is a modern web application designed to digitize the traditional library system. Users can browse books, view details, and borrow books seamlessly in a secure and responsive environment.

This project focuses on performance, authentication, and a smooth user experience using modern web technologies.

---

## 🎯 Purpose

* Replace traditional library systems with a digital solution
* Provide easy book discovery and borrowing
* Implement secure authentication using BetterAuth
* Practice full-stack development with Next.js & MongoDB

---

## ✨ Key Features

### 🔐 Authentication

* Email & Password Login/Register
* Google Social Login
* Protected Routes (Profile & Book Details)

### 🏠 Home Page

* Banner with "Find Your Next Read"
* Marquee for announcements
* Featured Books section
* Extra custom sections

### 📚 Books System

* View all books
* Search books by title
* Filter by category (Story, Tech, Science)
* Book details page (Private Route)

### 📖 Borrow Feature

* Borrow books (only for logged-in users)
* Shows available quantity

### 👤 User Profile

* View user info (name, email, image)
* Update profile (name & image)

### 🎨 UI/UX

* Fully responsive (Mobile, Tablet, Desktop)
* Clean and modern design
* Smooth navigation

---

## 🧱 Tech Stack

* **Frontend:** Next.js (App Router)
* **Styling:** Tailwind CSS + DaisyUI
* **Authentication:** BetterAuth
* **Database:** MongoDB
* **Deployment:** Vercel

---

## 📦 NPM Packages Used

* better-auth
* mongoose
* next
* react
* tailwindcss
* daisyui
* swiper (if used)
* react-hot-toast (optional)

---

## 📊 Data Structure

```json
{
  "id": "string",
  "title": "string",
  "author": "string",
  "description": "string",
  "category": "Story | Tech | Science",
  "available_quantity": "number",
  "image_url": "string"
}
```

---

## 🔒 Environment Variables

Create a `.env.local` file and add:

```
MONGODB_URI=your_mongodb_connection
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=your_live_url
BETTER_AUTH_TRUSTED_ORIGINS=your_live_url
```

---

## 🚀 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/Muhatarima/Online-Book-Borrowing-Platform-

# Go to project folder
cd Online-Book-Borrowing-Platform-

# Install dependencies
npm install

# Run the project
npm run dev
```

---

## 🧠 Challenges Implemented

✅ Update Profile Feature
✅ Protected Routes
✅ Category Filtering Sidebar
✅ Authentication System
✅ Responsive Design

---

## 📱 Responsiveness

The website is fully responsive across:

* Mobile 📱
* Tablet 📲
* Desktop 💻

---

## 📌 Future Improvements

* Book return system
* Borrow history
* Admin dashboard
* Image upload (Cloudinary)
* Pagination & advanced filtering

---

## 🙌 Author

**Muhatarima Medha**

---

## ⭐ Final Notes

This project demonstrates a complete full-stack application with authentication, database integration, and modern UI/UX practices.

---

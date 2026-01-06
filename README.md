# 📅 Event Planner

Event Planner is a **modern full-stack application** built with **Next.js, TypeScript, and Tailwind CSS**.  
It allows users to plan, manage, and track events with authentication and a scalable backend. This project demonstrates **real-world full-stack development skills**, including authentication, database management, and clean, modular architecture.

This repository is designed as a **portfolio project** to showcase practical web development experience and best practices.

---

## 📌 Project Overview

Event Planner helps users:

- Create, update, and manage events with date, time, and description.
- Track upcoming and past events.
- Authenticate securely using **NextAuth**.
- Store and query data efficiently using **Prisma** and **Neon (PostgreSQL)**.
- Enjoy a responsive and polished interface built with **Tailwind CSS**.

The app follows a **Next.js best practices architecture**, combining **server-side and client-side rendering** for optimal performance.

---

## ✨ Current Features

- 🔐 **User Authentication**  
  Secure login and signup using **NextAuth** with email or OAuth providers.

- 🗓️ **Event Management**  
  Create, edit, and delete events with details such as date, time, and description.

- 🏗️ **Full-Stack Architecture**  
  Frontend built with Next.js + TypeScript + Tailwind; backend uses Prisma with Neon DB.

- 🧩 **Modular & Scalable Codebase**  
  Separation of concerns and reusable components make it easy to extend.

- 📊 **Responsive Design**  
  Works seamlessly on mobile and desktop devices.

---

## 🔮 Future Improvements

Potential enhancements for upcoming versions:

- 📍 **Event location & map integration**
- 👥 **Invite participants and track RSVPs**
- 🔔 **Email or push notifications for events**
- 🧪 **Unit and integration testing**
- 🚀 **Deployment optimization (Vercel / Docker)**
- 🎨 **Advanced UI/UX improvements**

---

## 📁 Project Structure

```
event-planner/
├── app/             # Next.js app routes and pages
├── components/      # Reusable React components
├── prisma/          # Prisma schema and migrations
├── public/          # Static assets
├── styles/          # Tailwind CSS and global styles
├── .env             # Environment variables
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS  
- **Backend:** Next.js API routes, Prisma ORM  
- **Database:** Neon (PostgreSQL)  
- **Authentication:** NextAuth.js  
- **Deployment-ready:** Vercel / Node.js compatible  

---

## ▶️ Running the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/haroon-code-hub/event-planner.git
cd event-planner
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_neon_database_url
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

### 4️⃣ Run Database Migrations

```bash
npx prisma migrate dev
```

### 5️⃣ Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

# Task Manager

A responsive React application for managing tasks, integrating API data, and supporting light/dark themes using Tailwind CSS. This project demonstrates **component architecture**, **state management**, **React hooks**, **context API**, and **API integration**.
# Deployed website
  - https://taskmanager-reactt.netlify.app/

---

## 🚀 Features

- **Task Manager**

  - Add, complete, and delete tasks
  - Filter tasks: All, Active, Completed
  - Persistent tasks using `localStorage` with a custom hook

- **Theme Support**

  - Toggle between light and dark mode
  - Theme preference saved in `localStorage`

- **API Integration**

  - Fetch and display data from a public API
  - Loading and error states
  - Pagination or filtering

- **Responsive Design**
  - Mobile-friendly navigation with hamburger menu
  - Tailwind CSS responsive utility classes

---

## 📂 Project Structure

  src/
 - ├─ components/
  │ ├─ Button.jsx
  │ ├─ Navbar.jsx
  │ ├─ Footer.jsx
  │ ├─ TaskManager.jsx
  │ └─ ApiData.jsx
  ├─ context/
  │ └─ ThemeContext.jsx
  ├─ Layout/
  │ └─ Layout.jsx
  ├─ App.jsx
  └─ main.jsx

Task data is saved in localStorage and persists across sessions.

Fast Refresh (HMR) is supported; restart dev server if theme context changes aren’t applied immediately.

📷 Screenshots
(Optional: Add screenshots of Task Manager in light/dark mode, mobile menu, and API page.)

📄 License
This project is open-source and available under the MIT License.

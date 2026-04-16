# Product Feedback App

A full-stack web application where users can view, filter, and submit product suggestions. Built as a freelance project for **My Company**.

🌐 **Live Demo:** *(deploy links will be added here)*

---

## 📸 Screenshots

> Home page showing suggestions filtered by category, and the Add Feedback form.

---

## 🛠️ Tech Stack

| Layer       | Technology          |
|-------------|---------------------|
| Frontend    | React, React Router, Vite |
| Backend/API | Node.js, Express    |
| Database    | PostgreSQL (hosted on Neon) |
| Deployment  | Netlify (frontend), Render (backend) |

---

## ✨ Features

- View all product suggestions on the home page
- Filter suggestions by category (UI, UX, Enhancement, Bug, Feature)
- Submit new feedback via a form with validation
- Responsive layout that works on mobile and desktop
- "No feedback" empty state when a filtered category has no results

---

## 🗂️ Project Structure

```
product-feedback-app/
├── client/               # React frontend (deployed to Netlify)
│   └── src/
│       ├── pages/
│       │   ├── Home.jsx          # Home page — view & filter suggestions
│       │   └── AddFeedback.jsx   # Add Feedback page — submit new suggestion
│       ├── components/           # Reusable UI components
│       ├── App.jsx
│       └── main.jsx
├── server/               # Express backend (deployed to Render)
│   └── src/
│       ├── index.js      # API routes and server setup
│       └── config.js     # Database connection config
├── api-documentation.md  # Full API endpoint documentation
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- A PostgreSQL database (e.g. [Neon](https://neon.tech))

### 1. Clone the repo

```bash
git clone https://github.com/YOUR-USERNAME/product-feedback-app.git
cd product-feedback-app
```

### 2. Set up the database

Create a `suggestions` table in your PostgreSQL database:

```sql
CREATE TABLE suggestions (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50)
);
```

Insert some sample data:

```sql
INSERT INTO suggestions (title, description, category) VALUES
  ('Very useful', 'I use it to add value.', 'UX'),
  ('Add animation', 'Make the page sparkle or add some sort of animation for fun interaction', 'UX'),
  ('Dark mode support', 'Allow users to switch between light and dark themes.', 'Feature');
```

### 3. Run the backend

```bash
cd server
npm install
```

Create a `src/config.js` file with your Neon database connection string:

```js
const config = {
  databaseUrl: "YOUR_NEON_DATABASE_URL_HERE"
};

export default config;
```

Start the server:

```bash
node --watch src/index.js
```

The API will be running at `http://localhost:3000`.

### 4. Run the frontend

```bash
cd client
npm install
npm run dev
```

The app will be running at `http://localhost:5173`.

---

## 📘 API Endpoints

Full documentation is available in [`api-documentation.md`](./api-documentation.md).

| Method | Endpoint                                  | Description                        |
|--------|-------------------------------------------|------------------------------------|
| GET    | `/get-all-suggestions`                    | Returns all suggestions            |
| GET    | `/get-suggestions-by-category/:category`  | Returns suggestions by category    |
| POST   | `/add-one-suggestion`                     | Adds a new suggestion              |

---

## 🌍 Deployment

- **Backend** deployed to [Render](https://render.com)
- **Frontend** deployed to [Netlify](https://netlify.com)

Once deployed, update the Base URL in `api-documentation.md` with your live Render URL.

---

## 👤 Author

Built by Haine — freelance full-stack developer project.

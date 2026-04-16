# 📘 Product Feedback API Documentation

Base URL: `https://product-feedback-app-haine.onrender.com`

## Overview

| Resource      | Method | Endpoint                               | Description                           |
|---------------|--------|----------------------------------------|---------------------------------------|
| `suggestions` | GET    | /get-all-suggestions                   | Returns all suggestions               |
| `suggestions` | GET    | /get-suggestions-by-category/:category | Returns suggestions filtered by category |
| `suggestions` | POST   | /add-one-suggestion                    | Adds a new suggestion                 |

---

## 🔹 GET `/get-all-suggestions`

**Description:** Returns an array of all suggestions from the database.

**Example Response:**
```json
[
  {
    "id": 1,
    "title": "Very useful",
    "description": "I use it to add value.",
    "category": "UX"
  },
  {
    "id": 2,
    "title": "Add animation",
    "description": "Make the page sparkle or add some sort of animation for fun interaction",
    "category": "UX"
  }
]
```

---

## 🔹 GET `/get-suggestions-by-category/:category`

**Description:** Returns an array of suggestions that match the given category, passed as a URL parameter.

**Example Request URL:** `/get-suggestions-by-category/UX`

**Example Response:**
```json
[
  {
    "id": 1,
    "title": "Very useful",
    "description": "I use it to add value.",
    "category": "UX"
  }
]
```

---

## 🔹 POST `/add-one-suggestion`

**Description:** Adds a new suggestion to the database. Requires a JSON body with title, description, and category. Returns the newly created suggestion.

**Example Request Body:**
```json
{
  "title": "My new suggestion",
  "description": "Details about this suggestion.",
  "category": "Feature"
}
```

**Example Response:**
```json
{
  "id": 7,
  "title": "My new suggestion",
  "description": "Details about this suggestion.",
  "category": "Feature"
}
```

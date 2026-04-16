import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

app.use(cors());
app.use(express.json());

// GET all suggestions
app.get("/get-all-suggestions", async (req, res) => {
  const result = await pool.query("SELECT * FROM suggestions");
  res.json(result.rows);
});

// GET suggestions by category
app.get("/get-suggestions-by-category/:category", async (req, res) => {
  const { category } = req.params;
  const result = await pool.query(
    "SELECT * FROM suggestions WHERE category = $1",
    [category]
  );
  res.json(result.rows);
});

// POST add a new suggestion
app.post("/add-one-suggestion", async (req, res) => {
  const { title, description, category } = req.body;
  const result = await pool.query(
    "INSERT INTO suggestions (title, description, category) VALUES ($1, $2, $3) RETURNING *",
    [title, description, category]
  );
  res.json(result.rows[0]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

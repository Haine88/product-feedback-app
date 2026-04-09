import express from "express";
import pg from "pg";
import config from "./config.js";

const app = express();
const { Pool } = pg;

const pool = new Pool({
  connectionString: config.databaseUrl,
  ssl: { rejectUnauthorized: false },
});

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

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
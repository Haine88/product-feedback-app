import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import illustrationEmpty from "../../assets/suggestions/illustration-empty.svg";
import iconSuggestions from "../../assets/suggestions/icon-suggestions.svg";
 
function Home() {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
 
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
 
  useEffect(() => {
    fetchSuggestions();
  }, [selectedCategory]);
 
  async function fetchSuggestions() {
    const url =
      selectedCategory === "All"
        ? "/api/get-all-suggestions"
        : `/api/get-suggestions-by-category/${selectedCategory}`;
 
    const response = await fetch(url);
    const data = await response.json();
    setSuggestions(data);
  }
 
  return (
    <div className="page">
      {/* Left sidebar */}
      <div className="sidebar">
        <div className="company-card">
          <h2>My Company</h2>
          <p>Feedback Board</p>
        </div>
 
        <div className="filter-card">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
 
      {/* Main content */}
      <div className="main">
        <div className="top-bar">
          <div className="top-bar-left">
            <img
              src={iconSuggestions}
              alt="suggestions"
              className="suggestions-icon"
            />
            <span>{suggestions.length} Suggestions</span>
          </div>
 
          <Link to="/add-feedback" className="add-btn">
            + Add Feedback
          </Link>
        </div>
 
        {suggestions.length === 0 ? (
          <div className="empty">
            <img src={illustrationEmpty} alt="No feedback" />
            <h3>There is no feedback yet.</h3>
            <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            <Link to="/add-feedback" className="add-btn">+ Add Feedback</Link>
          </div>
        ) : (
          suggestions.map((s) => (
            <div key={s.id} className="card">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <span className="badge">{s.category}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
 
export default Home;
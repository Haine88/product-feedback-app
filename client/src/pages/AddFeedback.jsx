import { useState } from "react";
import { Link } from "react-router-dom";
import iconNewFeedback from "../../assets/icons/icon-new-feedback.svg";

function AddFeedback() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Feature");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (!title) newErrors.title = "Can't be empty";
    if (!description) newErrors.description = "Can't be empty";
    return newErrors;
  }

  async function handleSubmit() {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    await fetch("/api/add-one-suggestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, category }),
    });

    alert("Thank you for your feedback!");
    window.location.href = "/";
  }

  return (
    <div className="form-page">
      <Link to="/" className="back-link">‹ Go Back</Link>

      <div className="form-card">
        <img src={iconNewFeedback} alt="new feedback" className="form-icon" />
        <h1>Create New Feedback</h1>

        <div className="form-group">
          <label>Feedback Title</label>
          <p className="form-hint">Add a short, descriptive headline</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={errors.title ? "input-error" : ""}
          />
          {errors.title && <span className="error-msg">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label>Category</label>
          <p className="form-hint">Choose a category for your feedback</p>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Feature</option>
            <option>UI</option>
            <option>UX</option>
            <option>Enhancement</option>
            <option>Bug</option>
          </select>
        </div>

        <div className="form-group">
          <label>Feedback Detail</label>
          <p className="form-hint">Include any specific comments on what should be improved, added, etc.</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={errors.description ? "input-error" : ""}
          />
          {errors.description && <span className="error-msg">{errors.description}</span>}
        </div>

        <div className="form-buttons">
          <Link to="/" className="cancel-btn">Cancel</Link>
          <button onClick={handleSubmit} className="submit-btn">Submit Feedback</button>
        </div>
      </div>
    </div>
  );
}

export default AddFeedback;
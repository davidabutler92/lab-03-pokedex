import React from "react";
import "./SearchForm.css";

export default function SearchForm({
  handleNameChange,
  handleTypeChange,
  formValues,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleNameChange}
        value={formValues.name}
        className="inputSearch"
        type="text"
        placeholder="Enter search"
      />
      <select onChange={handleTypeChange}
        value={formValues.type}
      >
        <option value="">None</option>
        <option value="grass">Grass</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
      </select>
      <input className="button" type="submit" />
    </form>
  );
}

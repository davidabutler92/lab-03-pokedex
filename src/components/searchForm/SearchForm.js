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
      <select 
        classname='dropDown'
        onChange={handleTypeChange}
        value={formValues.type}
      >
        <option value="">None</option>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
      </select>
      <input className="button" type="submit" />
    </form>
  );
}

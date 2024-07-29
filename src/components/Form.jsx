import React from "react";

export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" name="" id="" placeholder="Item..." />
      <button>Add</button>
    </div>
  );
}

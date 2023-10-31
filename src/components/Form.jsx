import React from "react";
import { useState } from "react";


export default function Form({ onAddItems }) {
    const [desc, setDesc] = useState("");
    const [qty, setQty] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!desc) return;
  
      const newItem = { desc, qty, packed: false, id: Date.now() };
  
      onAddItems(newItem);
      console.log(newItem);
  
      setDesc("");
      setQty(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for yout trip?</h3>
        <select
          name=""
          id=""
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button>Add</button>
      </form>
    );
  }
import React from "react";

export default function Item({ itemObj, onDeleteItem, onToggleItems }) {
    return (
      <li>
        <input
          type="checkbox"
          value={itemObj.packed}
          onChange={() => onToggleItems(itemObj.id)}
        />
        <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.qty} {itemObj.desc} 
        </span>
        <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
      </li>
    );
  }
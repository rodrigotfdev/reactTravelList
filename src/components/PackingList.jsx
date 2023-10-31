import React from "react";
import { useState } from "react";
import Item from "./Item";


export default function PackingList({ items, onDeleteItem, onToggleItems, onClearItems }) {
    const [sortBy, setSortBy] = useState("input");
  
    let sortedItems;
  
    if (sortBy === "input") {
      sortedItems = items;
    }
  
    if (sortBy === "description") {
      sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
    }
  
    if (sortBy === "packed") {
      sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
    }
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              itemObj={item}
              onDeleteItem={onDeleteItem}
              onToggleItems={onToggleItems}
              key={item.id}
            />
          ))}
        </ul>
  
        <div className="actions">
          <select
            name=""
            id=""
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onClearItems}>Clear list</button>
        </div>
      </div>
    );
  }
  
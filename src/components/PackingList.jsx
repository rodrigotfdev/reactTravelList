import React from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: true },
];

export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item itemObj={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ itemObj }) {
  return (
    <li>
      <span
        style={itemObj.packed ? { textDecoration: "line-through" } : {}}
      >
        {itemObj.quantity} {itemObj.description}
      </span>
      <button>❌</button>
    </li>
  );
}

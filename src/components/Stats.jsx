import React from "react";

export default function Stats({ numItems, numPacked }) {
  if (!numItems)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked} ${numPacked > 1 ? "items" : "item"} (${percentage}%)`}
      </em>
    </footer>
  );
}

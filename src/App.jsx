import React from "react";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Stats from "./components/Stats";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  const numItems = items.length;

  const numPacked = items.filter((item) => item.packed).length;

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleClearList(item) {
    setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} onDeleteItem={handleDeleteItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats numItems={numItems} numPacked={numPacked} />
    </div>
  );
}

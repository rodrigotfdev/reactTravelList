import React from "react";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Stats from "./components/Stats";
import { useState } from "react";

export default function App() {
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} onDeleteItem={handleDeleteItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}

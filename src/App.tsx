import React from "react";
import logo from "./logo.svg";
import { v4 } from "uuid";
import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import Item from "./models/item";

function App() {
  const [items, setItems] = React.useState<Item[]>([]);

  const addItem = (product: string, quantity: number) => {
    setItems([
      ...items,
      { id: v4(), product, quantity, price: Math.floor(Math.random() * 100) },
    ]);
  };

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Greeter person="Yunseok" />
      <ShoppingListForm onAddItem={addItem} />
      <ShoppingList items={items} />
    </header>
  );
}

export default App;

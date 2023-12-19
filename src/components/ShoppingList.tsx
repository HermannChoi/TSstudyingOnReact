import React from "react";
import Item from "../models/item";

interface ShoppingListProps {
  items: Item[];
}

export default function ShoppingList({
  items,
}: ShoppingListProps): JSX.Element {
  return (
    <div>
      <p>ShoppingList</p>
      {items.map((item) => (
        <div key={item.id}>
          <li>
            {item.product} - {item.quantity} - ${item.price}
          </li>
        </div>
      ))}
    </div>
  );
}

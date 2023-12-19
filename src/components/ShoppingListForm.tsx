import React, { useRef } from "react";

interface ShoppingListProps {
  onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    const newProduct = productInputRef.current!.value; //value가 없을 수도(null)있으니 ? 붙임
    const quantity = parseInt(quantityInputRef.current!.value);
    onAddItem(newProduct, quantity);
    productInputRef.current!.value = "";
    quantityInputRef.current!.value = "1";
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInputRef} />
      <input
        type="number"
        min={0}
        placeholder="Quantity"
        ref={quantityInputRef}
      />
      <button>Add</button>
    </form>
  );
}

export default ShoppingListForm;

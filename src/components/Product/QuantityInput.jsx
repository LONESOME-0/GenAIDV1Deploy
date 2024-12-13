import React, { useState, useEffect, useRef } from "react";

function QuantityInput({ value = 1, onChange }) {
  const [quantity, setQuantity] = useState(value);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      // Skip the first render

      isFirstRender.current = false;

      return;
    }

    // Call onChange only after the initial render
    if (onChange) {
      onChange(quantity);
    }
  }, [quantity, onChange]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleInputChange = (e) => {
    console.log("Input value:", e.target.value);
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
      if (onChange) {
        onChange(newQuantity);
      }
    }
  };
  return (
    <div className="flex items-center ">
      <button
        className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-l hover:bg-gray-400 border border-gray-300"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-12 text-center border border-gray-300 py-2"
      />
      <button
        className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-r hover:bg-gray-400 border border-gray-300"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
}

export default QuantityInput;

import React, { useState } from 'react';

function QuantityInput() {
  const [quantity, setQuantity] = useState(1);
  
  const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
  const decreaseQuantity = () => setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));

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

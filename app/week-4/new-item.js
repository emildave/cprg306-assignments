"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);


    const increment = () => {
        setQuantity(quantity < 20 ? quantity + 1 : qujantity);
    };
    const decrement = () => {
        setQuantity(quantity > 1 ? quantity - 1 : quantity);
    };

    return (
    <div className="flex gap-3 justify-around items-center min-w-[10%] max-w-[25%] bg-primary overflow-clip">
      <button
        className="flex justify-center px-5 py-2 bg-secondary text-7xl min-w-[5vw] min-h-[5vw]"
        onClick={decrement}
      >
        -
      </button>

      <div className="w-full text-center bg-primary text-text font-bold text-xl">
        {quantity}
      </div>
      
      <button
        className="flex justify-center px-5 py-2 bg-secondary text-7xl min-w-[5vw] min-h-[5vw]"
        onClick={increment}
      >
        +
      </button>
    </div>
    );
}
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
      <div className="flex justify-center items-center space-x-2 bg-violet-200 p-3 rounded-xl w-min h-min">
          <p className="mb-0 text-violet-900 text-xl">{quantity}</p>
          <button className={`px-4 py-2 rounded-xl h-full  ${quantity === 1 ? "bg-violet-100" : "bg-violet-400 && hover:bg-violet-500"} text-violet-900`}type="button"onClick={decrement}>-</button>
          <button className={`px-4 py-2 rounded-xl h-full ${quantity === 20 ? "bg-violet-100" : "bg-violet-400 && hover:bg-violet-500"} text-violet-900`}type="button"onClick={increment}>+</button>
      </div>
    );
}
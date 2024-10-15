"use client";
import items from "./items.json";
import Item from './item.js';
import { useState } from "react";

export default function ItemList() {

    const [sortBy, setSortBy] = useState('name');

    if (sortBy === 'name') {
        items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
        items.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortBy === 'grouped category') {
        items.sort((a, b) => a.category.localeCompare(b.category));
    }

      return (
        <main>
            <div className="flex justify-end">
                <h2 className="text-violet-900 font-bold">
                    <span className="mr-2">Sort By:</span>
                    <button className={`px-4 py-2 rounded-xl h-full  ${sortBy === 'name' ? "bg-violet-400" : "bg-violet-200 && hover:bg-violet-300"}`}onClick={() => setSortBy('name')}>Name </button>
                    <button className={`px-4 py-2 rounded-xl h-full  ${sortBy === 'category' ? "bg-violet-400" : "bg-violet-200 && hover:bg-violet-300"}`} onClick={() => setSortBy('category')}>Category</button>
                </h2>
            </div>
            {items.map((item, id) => (
                <Item
                    key={id}
                    name={item.name}
                    category={item.category}
                />
            ))}
        </main>
      );
}
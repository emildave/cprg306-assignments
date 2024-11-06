"use client";

import { useState } from 'react';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import MealIdeas from './meal-ideas.js'; // Import the new MealIdeas component
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(""); // Additional state variable

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
        // Clean up the item name
        const cleanedName = item.name.split(',')[0].trim().replace(/[\u{1F600}-\u{1F64F}]/gu, '');
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="flex flex-col">
            <h1 className='text-2xl font-bold text-violet-900 mb-4'>Shopping List</h1>
            <div className="flex w-full justify-center space-x-4">
                <div className="flex-1">
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                    
                </div>
                <div className="flex-1">
                    <NewItem onAddItem={handleAddItem} />
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}
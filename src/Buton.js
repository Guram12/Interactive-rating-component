import { useState } from 'react';
import './Buton.css';

export function Buton({ onRatingSelect }) {
    const [selected, setSelected] = useState([false, false, false, false, false]);

    const toggleSelect = index => {
        const newSelected = [false, false, false, false, false];
        newSelected[index] = !selected[index];
        setSelected(newSelected);

        // Notify the parent component if a button is selected or unselected
        if (newSelected[index]) {
            onRatingSelect(index + 1);
        } else {
            onRatingSelect(null); // Clear the rating if a button is unselected
        }
    };

    return (
        <div className='buttons'>
            {selected.map((isSelected, index) => (
                <button
                    key={index}
                    className={isSelected ? 'mark selected' : 'mark'}
                    onClick={() => toggleSelect(index)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}

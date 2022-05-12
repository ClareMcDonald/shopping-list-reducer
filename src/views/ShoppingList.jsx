import { useState } from 'react';
import ToGet from '../components/ToGet';
import { useToGets } from '../context/ListProvider';

export default function ShoppingList() {
    const [newToGet, setNewToGet] = useState('');
    const { togets, handleAddToGet, handleUpdateToGet, handleDeleteToGet } = useToGets();

    return (
        <>
            <h1>ShoppingList</h1>
            <ul>
                {togets.map((toget) => (
                    <li key={toget.id}>
                        <ToGet toget={toget} onUpdate={handleUpdateToGet} onDelete={handleDeleteToGet} />
                    </li>
                ))}
            </ul>
        </>
  )
}

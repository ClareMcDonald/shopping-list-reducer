import { useState } from 'react';
import ToGet from '../components/ToGet';
import { useToGets } from '../context/ListProvider';

export default function ShoppingList() {
    const [newToGet, setNewToGet] = useState('');
    const { togets, handleAddToGet, handleUpdateToGet, handleDeleteToGet } = useToGets();

    return (
        <>
            <h1>ShoppingList</h1>
            <form>
                <label>Add an item:</label>
                <input placeholder='New Item' type='text' name='newToGet' value={newToGet} onChange={(e) => setNewToGet(e.target.value)} ></input>
                <button>Add Item</button>
            </form>
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

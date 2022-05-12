import { useState } from 'react';
import ToGet from '../components/ToGet';
import { useToGets } from '../context/ListProvider';

export default function ShoppingList() {
    const [newToGet, setNewToGet] = useState('');
    const { togets, handleAddToGet, handleUpdateToGet, handleDeleteToGet } = useToGets();
    
  return (
    <div>ShoppingList</div>
  )
}

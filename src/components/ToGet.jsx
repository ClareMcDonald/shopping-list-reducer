import { useState } from 'react';

export default function ToGet({ toget, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    
    let content;

    if (isEditing) {
        content = (
            <form onSubmit={(event) => { event.preventDefault(); setIsEditing(false); }} >
                <input value={toget.text} onChange={(e) => onUpdate({ ...toget, text: e.target.value })}></input>
                <button>Save</button>  
            </form>
        )
    } else {
        content = (
            <button type='button' onClick={() => setIsEditing(true)} >Edit</button>
        )
    }

  return (
    <>
        <input type='checkbox' checked={toget.done} onChange={(e) => {
            onUpdate({ ...toget, done: e.target.checked });
        }} />
        {toget.text}
        {content}
        <button type='button' onClick={() => onDelete(toget.id)} >Delete Item</button>
    </>
)
}

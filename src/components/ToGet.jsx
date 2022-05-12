import { useState } from 'react';

export default function ToGet({ toget, onUpdate, onDelete }) {
  return (
    <>
        <input type='checkbox' checked={toget.done} onChange={(e) => {
              onUpdate({ ...toget, done: e.target.checked });
          }} />
          {toget.text}
        <button type='button' onClick={() => onDelete(toget.id)} >Delete Item</button>
    </>
  )
}

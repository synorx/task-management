import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Task = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className='item'>
        <input 
            type= "checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
        />
        <label
            style={(item.checked) ? {color: 'green'} : null }
            onDoubleClick={() => handleCheck(item.id)}
        >{item.item}</label>
        <FaTrashAlt
            onClick={() => handleDelete(item.id)}
            role="button"
            tabIndex="o"
            aria-label={`Delete ${item.item}`}
        />
    </li>
    
  )
}

export default Task
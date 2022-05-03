import React from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'

const AddTask = ({newTask, setNewTask, handleSubmit }) => {
  
  const inputRef = useRef();
  
  return (
    
    <form className='addForm' onSubmit={handleSubmit} >
        <label htmlFor='addItem'></label>
        <input
            autoFocus
            ref={inputRef}
            id='addItem'
            type='text'
            placeholder='Görev Ekleyiniz'
            required
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}
        > 
            <FaPlus />
        </button>
        
    </form> 

    
  )
}

export default AddTask
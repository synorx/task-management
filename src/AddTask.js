import React from 'react'

const AddTask = () => {
  return (
    <form className='addForm'>
        <label htmlFor='addItem'>Görev Ekleyin</label>
        <input
            autoFocus
            id='addTask'
            type='text'
            placeholder='Görev'
            required
        />
        <button
            type='submit'
            aria-label='Add Item'
        >
        </button>
    </form>
  )
}

export default AddTask
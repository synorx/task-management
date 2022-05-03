import React from 'react'
import Task from './Task'

const TaskList = ({filteredResult, handleCheck, handleDelete}) => {
  
  return (
    <ul>
        {filteredResult.map((item) => (
            <Task 
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ))}
    </ul>
  )
}

export default TaskList
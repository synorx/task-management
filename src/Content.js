import React from 'react'
import Calendar from 'react-calendar'
import TaskList from './TaskList'
import AddTask from './AddTask'

const Content = ({ handleCheck, handleDelete,filteredResult, newDate, onChange, newTask, setNewTask, handleSubmit }) => {
  return (
    <div className='content'>
      <div>
        <Calendar
        value={newDate}
        onChange={onChange}
        />
      </div>
      <AddTask 
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      {  filteredResult.length ?
           <TaskList 
               filteredResult={filteredResult}
               handleCheck={handleCheck}
               handleDelete={handleDelete}  
           />
           : <p>{newDate.toDateString()} için planlamış etkinlik yok.</p> }
    </div>
  )
}

export default Content
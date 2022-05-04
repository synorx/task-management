import React from 'react'
import Calendar from 'react-calendar'
import TaskList from './TaskList'
import AddTask from './AddTask'

const Content = ({ handleCheck, handleDelete,filteredResult, newDate, onChange, newTask, setNewTask, handleSubmit }) => {
  return (
    <div className='content'>
      <div className='result-calendar'>
        <Calendar
        value={newDate}
        onChange={onChange}
        />
      </div>
      <div className='add-task'>
      <AddTask 
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      </div>
      <div className='task-list'>
      {  filteredResult.length ?
           
           <TaskList 
               filteredResult={filteredResult}
               handleCheck={handleCheck}
               handleDelete={handleDelete}  
           />
           : <h3>{newDate.toDateString()} için planlamış etkinlik yok.</h3> }
      </div>
    </div>
  )
}

export default Content
import React from 'react'
import Calendar from 'react-calendar'
import TaskList from './TaskList'

const Content = () => {
  return (
    <div className='content'>
      <div>
        <Calendar />
      </div>
      <TaskList />
    </div>
  )
}

export default Content
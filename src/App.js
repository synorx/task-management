import React, {useState,useEffect} from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer'


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState(new Date());
  const [filteredResult, setFilteredResult] = useState([]);

  
  useEffect(()=> {
    onChange(newDate);

  },[tasks])


  
  // every clicked on date the new date is filter array
  const onChange= (newDate) => {
    
    setNewDate(newDate)
    const filteredResult = tasks.filter(result => {
    const newResultFormat = new Date(result.date).toDateString().split(",")[0]
    const newCalDateFormat = newDate.toDateString().split(",")[0]
    console.log(newCalDateFormat);
    return(newResultFormat === newCalDateFormat)   
    })
    setFilteredResult(filteredResult);   
  }

  const addItem = (item) => {
    const id = tasks.length ? tasks[tasks.length -1].id + 1 : 1;
    
    const myNewItem = {id, checked: false, item, date: newDate};
    const listItems = [...tasks,myNewItem];
    setTasks(listItems);
  }

  const handleCheck = (id) => {
    const listItems = tasks.map((item) => item.id === id ? {...item,
    checked: !item.checked} : item );
    setTasks(listItems);
  }

  const handleDelete =  (id) => {
    const listItems = tasks.filter((item) => item.id !== id);
    setTasks(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    addItem(newTask);
    setNewTask('');
    }

  return (
    <div className="App">
    <Header />
    
    <main>
      <Content 
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        newDate={newDate}
        onChange={onChange}
        filteredResult={filteredResult}
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
    </main>
    <Footer 
      length={tasks.length}
    />
   </div>
  );
}

export default App;

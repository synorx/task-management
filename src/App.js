import React, {useState,useEffect} from 'react';
import Header from './Header';
import Content from './Content';
import ApiRequest from './ApiRequest';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState(new Date());
  const [filteredResult, setFilteredResult] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const API_URL= 'http://localhost:3500/items'


  
  useEffect(()=> {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Expected data do not received');
        const listItems = await response.json();
        
        setTasks(listItems);
        setFetchError(null);
      } catch (err) {
          setFetchError(err.message);
      }
    }
    setTimeout (() => {
      fetchItems();
    },2000)
    onChange(newDate);

  },[tasks])


  
  // every clicked on date the new date is filter array
  const onChange= async (newDate) => {
    
    setNewDate(newDate)
    const filteredResult = tasks.filter(result => {
    const newResultFormat = new Date(result.date).toDateString().split(",")[0]
    const newCalDateFormat = newDate.toDateString().split(",")[0]
    console.log(newCalDateFormat);
    return(newResultFormat === newCalDateFormat)   
    })
    setFilteredResult(filteredResult);   
  }

  const addItem = async (item) => {
    const id = tasks.length ? tasks[tasks.length -1].id + 1 : 1;
    
    const myNewItem = {id, checked: false, item, date: newDate};
    const listItems = [...tasks,myNewItem];
    setTasks(listItems);

    //Add task db.json
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await ApiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  }
  

  const handleCheck = async (id) => {
    const listItems = tasks.map((item) => item.id === id ? {...item,
    checked: !item.checked} : item );
    setTasks(listItems);

    const myItem = listItems.filter((item) => item.id === id );

    //Update task
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    };
    const reqUrl= `${API_URL}/${id}`;
    const result = await ApiRequest(reqUrl,updateOptions);
    if (result) setFetchError(result);
  }

  const handleDelete = async (id) => {
    const listItems = tasks.filter((item) => item.id !== id);
    setTasks(listItems);

    //delete task
    const deleteOptions = {method: 'DELETE'};
    const reqUrl= `${API_URL}/${id}`;
    const result = await ApiRequest(reqUrl,deleteOptions);
    if (result) setFetchError(result);
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
    {fetchError && <p style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}
    {!fetchError &&
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
    }
    </main>
   </div>
  );
}

export default App;

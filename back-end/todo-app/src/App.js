import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios';
import Todo from './componante/Todo'
import Add from './componante/Add';



function App() {
  var [tasks, setTasks] = useState([])

  useEffect(()=>{
    getTasks();
  },[])
 

  

const getTasks = ()=>{ 
  axios
      .get('http://localhost:4000/all')
      .then((response)=>{
        setTasks(response.data)
  })
      .catch((err)=>{
    console.log('ERR: ',err);
  })
};

const addNewTask = (body)=>{
  axios.post('http://localhost:4000/create',body)
      .then((response)=>{
      console.log('DATA :' , response.data)
      getTasks()
})
      .catch((err)=>{
      console.log('ERR: ',err);
})
};

   const deleteTodo =(body)=>{
    axios.delete(`http://localhost:4000/delete/${body }`)
    .then((response)=>{
      getTasks()
    })
    .catch((err)=>{
      console.log('ERR: ',err);
    })
  }

  const changeStateOfTask = (id,result)=>{
    axios.put(`http://localhost:4000/ubdete/${id}/${!result}`)
    .then((response=>{
      console.log('Data : ',response.data);
      getTasks();
    }))
    .catch((err)=>{
      console.log("ERR: ",err);
    })
  }

  
const values = tasks.map((elem, i)=>{
   return <Todo key={i.toString()} db ={elem.title} db_2={elem.isCompleted} fun={deleteTodo}
    fun2={changeStateOfTask}
   />
});


  return (
    <div className="App">
      <h1>To Do App</h1>
     <Add fun={addNewTask} />
     {values}
    </div>
  );
}

export default App;

import React,{useState} from 'react'
import '../App.css'

export default function Add(props) {
  const [newTask, setNewTask] = useState()
  
  

  const getInputValue=(e)=>{
    setNewTask(e.target.value)
  }

  const createNewTodo =()=>{
    props.fun({title : newTask})
  }

  return (
    <div className='add'>
      <input type={'text'} onChange={getInputValue}></input>
      <button onClick={createNewTodo}>add</button>
    </div>
  )
}

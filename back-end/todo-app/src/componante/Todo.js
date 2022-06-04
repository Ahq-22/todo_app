import React,{useRef,useState} from 'react'
import '../App.css'


export default function Todo(props) {


  const deleteone = ()=>{
    props.fun(props.db)
  }

  const changeValOfTask = ()=>{
    props.fun2(props.db,props.db_2)
  }

  return (
       <div className={  props.db_2? 'b':'a'}>
       <p className={props.db_2? 'g':'f'}>{props.db}</p>
        <input type={'checkbox'} className='checkInput' defaultChecked={props.db_2} onClick={changeValOfTask}></input>
        <button onClick={deleteone}>delete</button>
        </div>
    )
}   

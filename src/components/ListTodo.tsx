import React from 'react'
import classes from './ListToDo.module.css' 

const ListTodo : React.FC <{text:string, removeHandler:()=>void,id:string}> =(props)=>{
  return <li className={classes.todos} onClick={props.removeHandler}>{props.text}</li>
     
}
export default ListTodo
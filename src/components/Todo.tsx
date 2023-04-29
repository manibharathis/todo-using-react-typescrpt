import React,{useContext} from 'react'
import ListTodo from './ListTodo'
import classes from './Todo.module.css' 
import { todoContext } from '../store/todoContext'
const Todo : React.FC  =(props)=>{
    const ctx=useContext(todoContext)

   return(
    <div>
        <ul className={classes.item}>
            {
                ctx.items.map(e=><ListTodo id={e.id} text={e.text} removeHandler={ctx.removeToDo.bind(null,e.id)}/>)
            }
          
           
        </ul>
    </div>
   )
}
export default Todo
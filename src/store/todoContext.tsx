import React,{useState} from 'react'
import todos from "../models/todos"
type todosModal ={
    items:todos[],
    addToDo:(text:string )=>void,
    removeToDo:(id:string)=>void
}
export const todoContext=React.createContext<todosModal>(
    {
        items:[],
        addToDo:()=>{},
        removeToDo:()=>{}
    }
)
const TodoProvider:React.FC=(props)=>{
    const [todo,addTodo]=useState<todos[]>([])
    const addToDoToList=(todo:string)=>{
      const newTodo=new todos(todo);
  
           addTodo((prevState)=>{
                 return prevState.concat(newTodo)
           })
           
    }
    const removeHandler=(id:string)=>{
      addTodo((prevState)=>{
        return prevState.filter((item)=> item.id!==id )
  })
    }
    const todoctxValue={
        items:todo,
        addToDo:addToDoToList,
        removeToDo:removeHandler
    }
    return(
        <todoContext.Provider value={todoctxValue}>
           {props.children}
        </todoContext.Provider>
    )
}
export default TodoProvider
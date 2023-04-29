import{ useRef,useContext} from 'react'
import classes from './NewToDo.module.css' 
import { todoContext } from '../store/todoContext'
const NewToDo:React.FC=(props)=>{
    const ctx=useContext(todoContext)
    const addToDoToList=ctx.addToDo
    const inputRef=useRef<HTMLInputElement>(null)
    const handleSubmit=(event:React.FormEvent)=>{
          event.preventDefault()
          const enteredText=inputRef.current!.value
          if(enteredText!.trim().length<0){
                   return
          }
        addToDoToList(enteredText)
    }
    return(
        <form className={classes.form} onSubmit={handleSubmit}>
            <label htmlFor="todo">
                 todo
            </label>
            <input type="text" id="todo" ref={inputRef}/>
            
            <button>submit</button>
        </form>
    )
}
export default NewToDo
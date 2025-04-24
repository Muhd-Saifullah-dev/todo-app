import  { useState } from 'react'
import { Checkbox } from '../ui/checkbox'
import { Delete, Pencil, Save } from 'lucide-react'
import { Todo } from '@/interfaces'
import { useDispatch } from 'react-redux'
import {deleteTodo,updateTodo,completeTodo } from "../../../redux/slices/todoSlice"
import { toast } from 'react-toastify'


function TodoTile({todo}:{todo:Todo}) {
  const dispatch=useDispatch()
  const [editable,setEditable]=useState(false)
  const [title,setTitle]=useState(todo.title)

  const markTodoComplete=({id}:{id:string})=>{
    if(todo.completed) return
    dispatch(completeTodo(id))
    toast.success("todo complete")
  }

const editTodo=({id}:{id:string})=>{
   if(title.trim()!==""){
      dispatch(updateTodo({
        id,
        title,
        completed:todo.completed
      }))
      setEditable(!editable)
      return
    }
    toast.error("todo cannot be empty")
}

  return (
    <div className='flex border-b-2 justify-between p-2'>
        <div className='flex items-center gap-2'>
            <Checkbox className='cursor-pointer' onClick={()=>markTodoComplete({id:todo.id})} checked={todo.completed && true} />
            <h3 className={` capitalize ${todo.completed && "line-through"} ${editable && "font-extralight"} outline-none text-sm font-bold`} contentEditable={editable}
            onInput={(e)=>setTitle(e.currentTarget.innerText)}
            
            >{todo.title}</h3>
        </div>
        {
          !todo.completed && (editable ? <Save size={20} className='cursor-pointer' onClick={()=>editTodo({id:todo.id})}/> :
          <div className='flex items-center gap-2'>
            
              <Pencil size={20} className='cursor-pointer' onClick={()=>setEditable(!editable)}/>
              <Delete size={20} className='cursor-pointer' onClick={()=>dispatch(deleteTodo(todo.id))}/>
            
          </div>)
        }
     
    </div>
  )
}

export default TodoTile
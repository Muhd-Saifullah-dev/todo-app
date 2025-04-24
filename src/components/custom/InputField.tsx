import  { FormEvent } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { addTodo } from '../../../redux/slices/todoSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'


function InputField() {

  const dispatch=useDispatch()
  const  addTodoSubmit=(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      const todo=e.currentTarget.todo.value.trim()
      if(todo){
        const id=crypto.randomUUID()
        dispatch(addTodo({
          id,
          title:todo,
          completed:false
        }))
        e.currentTarget.reset();
        toast.success("Todo add successfully")
        return
      }
      toast.error("Enter valid todo")
  }
  return (
 <form  className=' flex flex-1 gap-6 mt-32' onSubmit={addTodoSubmit}>
    <Input type='text' name='todo' placeholder='Enter the todo...'/>
    <Button type='submit'>Add Todo</Button>
 </form>
  )
}

export default InputField
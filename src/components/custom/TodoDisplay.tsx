
import TodoTile from './TodoTile'

import { Todo } from '@/interfaces'
import { useSelector } from 'react-redux'



function TodoDisplay() {
    const todos =useSelector((state:any)=>state.todo.todos as Todo[])
  return (
    <div>
        {
            todos.map((todo)=><TodoTile key={todo.id} todo={todo}/>)
        }
        
        
    </div>
  )
}

export default TodoDisplay
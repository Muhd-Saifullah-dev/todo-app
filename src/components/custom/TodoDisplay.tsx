import React from 'react'
import TodoTile from './TodoTile'
import { title } from 'process'
import { Todo } from '@/interfaces'

const todos :Todo[]=[
    {
        id:"1",
        title:"learn react",
        completed:false
    }, 
     {
        id:"2",
        title:"learn node ",
        completed:false
    },  {
        id:"3",
        title:"learn next",
        completed:false
    },  {
        id:"4",
        title:"learn js",
        completed:false
    },
]
function TodoDisplay() {
  return (
    <div>
        {
            todos.map((todo)=><TodoTile key={todo.id} todo={todo}/>)
        }
        
        
    </div>
  )
}

export default TodoDisplay
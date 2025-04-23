import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Delete, Pencil } from 'lucide-react'
import { Todo } from '@/interfaces'

function TodoTile({todo}:{todo:Todo}) {
  return (
    <div className='flex border-b-2 justify-between p-2'>
        <div className='flex items-center gap-2'>
            <Checkbox className='cursor-pointer'/>
            <h3 className='font-semibold capitalize'>{todo.title}</h3>
        </div>
        <div className='flex items-center gap-2'>
        <Pencil size={20} className='cursor-pointer'/>
        <Delete size={20} className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default TodoTile
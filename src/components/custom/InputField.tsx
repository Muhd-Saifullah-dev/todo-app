import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function InputField() {
  return (
 <form  className=' flex flex-1 gap-6 mt-32'>
    <Input type='text' name='todo' placeholder='Enter the todo...'/>
    <Button>Add Todo</Button>
 </form>
  )
}

export default InputField
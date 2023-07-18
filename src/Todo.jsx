import React from 'react'
import "../src/index.css"

const Todo = (props) => {
  return (
    <div>
      <li className='live' >{props.todo}</li>
      <button className='btn' onClick={()=>{
        props.onChecked(props.id);
      }}>delete</button>
    </div>
  )
}

export default Todo

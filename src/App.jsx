import React from 'react'
import { useState, useEffect } from 'react'
import "./App.css"
import Todo from './Todo'
const getLocalData = ()=>{
  let list = localStorage.getItem("list");
  if(list){
    return JSON.parse(localStorage.getItem("list"));
  }
  else{
    return [];
  }
}
const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getLocalData());

  function handleChange(event) {
    const newValue = event.target.value;
    setInput(newValue);

  }
  function handleList(id) {
    setItems(prevValue => prevValue.filter((item, index) => index !== id));
  }
  
  function handleClick() {
    if(input===""){
      alert("task not be empty");
    }
    else{
      setItems(prevItems => {
        return [...prevItems, input]
  
      });
    setInput("");

    }
  }
  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(items))
  },[items])

  return (
    <div className='container'>
      <div className="box">
        <h1 className='text'>todolist</h1>
        <form >
          <input onChange={handleChange} type="text" value={input} placeholder='write your task here' />
          <button className='btn1' onClick={handleClick}>+</button>
        </form>
        <hr />
        <h2 className="text">Todos</h2>
        <div className='todos' >
          <ul >
            {items.map((item, index) => {
              return <Todo key={index} id={index} todo={item} onChecked={handleList} />
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;

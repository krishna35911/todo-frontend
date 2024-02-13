import React, { useEffect, useState } from 'react'
import { gettodo } from '../backend services/apis'

function Home() {

  const[todo,settodo]=useState([])

  const todoget=async()=>
  {
    const result=await gettodo()
    if(result.status===200)
    {
      settodo(result.data)
    }
    else
    {
      console.log(result.response.data);
    }
  }
  useEffect(()=>
  {
    todoget()
  },[])

  console.log(todo);
  return (
    <div className='container text-center'>
      <div className='d-flex justify-content-center align-items-center'>
          <div className="col-md-6 p-5">
            <h1>Pending</h1>
            
            {todo?.length>0?
            todo.map((item)=>(<div className='d-flex'>
            <p className='fw-bold'>{item.title}</p>
            <p>:  {item.description}</p>
          </div>))
            :<p>nothing</p>}
          </div>
          <div className="col-md-6 p-5">
            <h1>Completed</h1>
          </div>
      </div>
    </div>
  )
}

export default Home

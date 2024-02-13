import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addtodo } from '../backend services/apis';
import { useNavigate } from 'react-router-dom';

function Todo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[data,setdata]=useState({
    title:"",description:""
  })

  const navigate=useNavigate()

  console.log(data);

  const handleadd=async()=>
  {
    const {title,description}=data

    if(!title || !description)
    {
      alert('fill completely')
    }
    else
    {
      try {
        const result=await addtodo(data)
        if(result.status===200)
        {
          alert('added succesfully')
          setdata(
          {  title:"",
            description:""}
          )
          navigate('/home')
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center shadow rounded w-75 p-5 mx-auto mt-5' style={{backgroundColor:'#F2EFE5'}}>
        <div>
            <h1>ToDo List</h1>
            <hr />
        </div>
        <button className='btn btn-info mt-5' onClick={handleShow}><i class="fa-solid fa-plus me-2"></i>Add</button>

        <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Add items to your list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input type="text" className='form-control' placeholder='Title' value={data.title} onChange={(e)=>setdata({...data,title:e.target.value})}/>
            <textarea name="" id="" cols="30" rows="5" className='form-control mt-3' placeholder='Description' value={data.description} onChange={(e)=>setdata({...data,description:e.target.value})}></textarea>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleadd}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
    </div>
  )
}

export default Todo

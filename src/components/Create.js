import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [email,setEmail]=useState('');
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://63f456fd55677ef68bba0174.mockapi.io/crud',{
            e_name:name,
            e_age:age,
            e_email:email
        })
        .then( ()=>{
            navigate('/');
        })
    }
  return (
    <>
     <div className="row">
        <div className="col-md-4">
            <div className="mb-2 mt-2">
                <Link to='/'>
                  <button className='btn btn-primary'>Read Data</button>
                </Link>
            </div>
            <div className="bg-primary p-4 text-container">
                <h1>Create Form</h1>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="">Name: </label>
                    <input type="text" name='name' placeholder='Enter Name' className='form-control' onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Age: </label>
                    <input type="number" name='age' placeholder='Enter Age' className='form-control' onChange={(e)=>setAge(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email : </label>
                    <input type="text" name='email' placeholder='Enter Email' className='form-control' onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="d-grid">
                    <input type="submit" value="Submit" className='btn btn-primary' />
                </div>
            </form>
        </div>
     </div>
    </>
  )
}

export default Create

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Read() {
    const [apiData,setApiData]=useState([]);
    function getData(){
        axios.get('https://63f456fd55677ef68bba0174.mockapi.io/crud')
        .then( (response)=>{
            setApiData(response.data)
        })
    }

    function setDataToStorage(id,name,age,email){
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('email',email);
    }
    useEffect( ()=>{
        getData();
    },[])

    function handleDelete(id){
        axios.delete(`https://63f456fd55677ef68bba0174.mockapi.io/crud/${id}`)
        .then( ()=>{
            getData();
        })
    }
  return (
    <>
       <div className="row">
        <div className="col-md-12">
            <div className="mb-2 mt-2">
                <Link to='/create'>
                <button className='btn btn-primary'>Create New Data</button>
                </Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    apiData.map((item,index)=>{
                        const {id,e_name,e_age,e_email}=item;
                        return(
                            <React.Fragment key={index}>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{e_name}</td>
                                    <td>{e_age}</td>
                                    <td>{e_email}</td>
                                    <td>
                                        <Link to='/edit'>
                                            <button className=' btn btn-primary' onClick={()=>setDataToStorage(id,e_name,e_age,e_email)}>EDIT</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={ ()=>{if(window.confirm('Are You Sure')){handleDelete(id)}}}>DELETE</button>
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
       </div>
    </>
  )
}

export default Read
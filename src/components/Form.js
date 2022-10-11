import React, { useState } from 'react'
import Complaints from './Complaints';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Form() {
  const [name, setname] = useState('');
  const [branch, setbranch] = useState('');
  const [complaint, setcomplaint] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = name, b = branch, c = complaint;
    Complaints.push({ a, b, c });
    history('/added');


  }

  return (
    <div className='background'>
      <h1>HOSTEL COMPLAINT</h1>
      <form className='container'>
        <label>Name</label><br></br>
        <input type="text"   placeholder='Enter name' onChange={(e) => setname(e.target.value)} required></input><br></br>
        <label>Branch</label><br></br>
        <input type="text"   placeholder='Enter branch' onChange={(e) => setbranch(e.target.value)} required></input><br></br>
        <label>Complaint</label><br></br>
        <input type="text" placeholder='Enter complaint' onChange={(e) => setcomplaint(e.target.value)} required></input><br></br>
        <Link to='/added'>
          <input className='btn' type="submit" onClick={handleSubmit}></input>
        </Link>

      </form>

      

    </div>
  )
}

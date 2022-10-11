import React from 'react'
import {useNavigate} from 'react-router-dom';
import Complaints from './Complaints';
import './added.css';


export default function Added() {
  let history=useNavigate();
  history('/');

  return (
    <div className='background'>
    <h1>Complaints</h1>
    <div className='tablecard'>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>BRANCH</th>
            <th>COMPLAINTS</th>
          </tr>

        </thead>
        <tbody>
          {
            Complaints.map((item)=>{
              return(
                <tr >
                  <td>{item.a}</td>
                  <td>{item.b}</td>
                  <td>{item.c}</td>

                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      </div>

    </div>
  )
}


import React, { useEffect, useState,  } from 'react'
import './User.css'

export default function Users() {

  
  const [user , setUser] = useState([]);

  useEffect(()=>{
    const getData = async ()=>{
      try{
        const res = await fetch('/getuserdetails',{
          method:'GET',
          headers:{
            Accept :"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        })
        const data = await res.json();
        // console.log(data)
        setUser(data);
        console.log(user)
       
      }   
      catch(err){
        console.log(err);
      }
    }
     getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className='user_container container'>
        <div className="user_head row">
          <h2 >Users</h2>
        </div>

        <div className="user_details_row row">
            <table id="user_details">

              <thead>
                 <tr> <th>#</th>
                <th>UserName</th>
                <th>Email</th>
                </tr>
              </thead>

              <tbody>
                {user.map((obj, key)=>{
                  console.log(obj)
                  return(
                    <tr>
                      <td>{key+1}</td>
                      <td>{obj.name}</td>
                      <td>{obj.email}</td>
                   </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
    
  )
}

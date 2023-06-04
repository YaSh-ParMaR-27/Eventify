import React, { useEffect, useState } from 'react'
import './PeopleContacted.css'

export default function PeopleContacted() {

  
  const [contacts , setContacts] = useState([]);

  useEffect(()=>{
    const getData = async ()=>{
      try{
        const res = await fetch('/getcontacts',{
          method:'GET',
          headers:{
            Accept :"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        })
        const data = await res.json();
        // console.log(data)
        setContacts(data);
        console.log(contacts)
       
      }   
      catch(err){
        console.log(err);
      }
    }
     getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='adminContact_container container'>
       <div className="adminContact_head row">
          <h2 >CONTACTS</h2>
        </div>

        <div className="Msg_details_row row">
            <table id="Msg_details">
              <thead>
                <tr> <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                </tr>
              </thead>
              <tbody>

               {contacts.map((obj , key)=>{
                return(
                  <tr>
                    <td>{key+1}</td>
                    <td>{obj.name}</td>
                    <td>{obj.email}</td>
                    <td>{obj.subject}</td>
                    <td>{obj.message}</td>
                  </tr>
              
                )
               })}
              </tbody>
            </table>
          </div>
    </div>
  )
}

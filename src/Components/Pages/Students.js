import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Students() {

    const [studentName, setStudentName] = useState('');
    const [studentEmail, setStudentEmail] = useState('');

    let myFunction = ()=>{
        let data = {
            "data": {
                "name": studentName,
                "email": studentEmail
            }
        };

        fetch("http://localhost:1337/api/students",{
            method: "POST",
            headers:{
                'Content-Type': "application/json",
                'accept': "application/json",
            },
            body: JSON.stringify(data)
        }).then((d)=>{
            console.log(d);
            if(d.status === 200){
                Swal.fire({
                    icon: 'success',
                    text: 'Student added successfully.',
                })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    text: 'Something went wrong. Please try again',
                })
            }
        }).catch((e)=>{
            console.log(e);
        });
        
    }

    return (
    <>
        <div className="container base-container">
            <h3>Add students using strapi api</h3>
            <div className="mydiv py-3">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" value={studentName} onChange={ (e)=>{ setStudentName(e.target.value)  } } />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="email" value={studentEmail} onChange={ (e)=>{ setStudentEmail(e.target.value)  } } />
                </div>
                <button id="add-student" onClick={myFunction} type="button" className="btn btn-primary">Add</button>
            </div>
        </div>
    </>
  )
}

export default Students;    

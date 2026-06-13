import React from 'react'
import { useEffect,useState } from 'react'

function Task2() {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setUsers(data));

    });
  return (
    <div>
        {
            <table border="1" cellPadding="10">
                <thead>
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>phone</td>
                </thead>

                <tbody>
                    {
                        users.map((users,index)=>{
                            return <tr key={index}>
                                <td>{users.id}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.phone}</td>
                            </tr>
                        })
                    }
                </tbody>


            </table>
        }
      
    </div>
  )
}

export default Task2

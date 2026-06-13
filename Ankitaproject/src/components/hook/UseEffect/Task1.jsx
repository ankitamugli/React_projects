import React from 'react'

function Task1() {
  return (
    <div>
        <table border="1"cellPadding="10">
            <thead>
                <td>id</td>
                <td>name</td>
                <td>email</td>
                <td>phone</td>
            </thead>
            <tbody>
                {
                    UserActivation.map((user,index)=>{
                        return <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default Task1

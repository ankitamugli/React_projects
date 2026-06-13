import React, { useEffect, useState } from "react";

function FetchData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user,ind) => (
          <li key={ind}> {user.id} {user.name}
          </li>
        ))}
      </ul>

      <h2>id,Username and Email</h2>
      <ul>
        {users.map((user,ind) => (
          <li key={ind}>{user.id} {user.username} {user.email}
          </li>
        ))}
      </ul>

      

    


    </div>
  );
}

export default FetchData;
import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";

function UserList() {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    UserService.getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load users");
      });
  };

  return (
    <div>
      <h2>User List</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;

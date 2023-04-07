import React, { useContext, useState } from 'react';
import Layout from '../components/shared/Layout';
import useFetch from '../components/hooks/useFtech';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utlis/config';
import Switch from '@mui/material/Switch';

const Customers = () => {
  const { user } = useContext(AuthContext);
  const { data: users } = useFetch(`${BASE_URL}/users?${user}`);
  const [editMode, setEditMode] = useState(false);

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <strong className="text-gray-700 font-medium">Customers</strong>
        <td>
                    <Switch
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                    name="edit-mode"
                    />
                  </td>
        <div className="border-x border-gray-200 rounded-sm mt-3">
          <table className="w-full text-gray">
            <thead>
              <tr>
                <th>Edit</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((e) => (
                <tr key={e._id}>
                 
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                  <td>
                    {editMode ? (
                      <select className="p-1 border rounded">
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    ) : (
                      e.role
                    )}
                  </td>
                  <td>
                    <button
                      className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white"
                      onClick={() => handleDeleteUser(e._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </Layout>
  );
};

export default Customers;
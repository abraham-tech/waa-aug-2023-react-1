import React from 'react';

const styles = {
    table: {
        display: 'flex',
        justifyContent: 'center'
    },
};
const UserTable = ({ data, handleEdit, handleDelete }) => {
    return (
        <div style={styles.table}>
            <h2>Users List</h2>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>
                            <button onClick={() => handleEdit(user.id)}>Edit</button>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
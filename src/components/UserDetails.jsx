import React from 'react';

const UserDetails = ({ user }) => {

    return (
        <div>
            <h2>User details component</h2>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.role}</p>
        </div>
    );
};

export default UserDetails;
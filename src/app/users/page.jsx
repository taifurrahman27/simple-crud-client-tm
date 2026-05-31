import React from 'react';
import getUsers from '../lib/data';
import UserTable from '@/components/UserTable';

const UsersPage = async () => {

    const users = await getUsers();
    console.log(users, "all users");


    return (
        <div>
            <h1>User Management: {users.length} </h1>
            <UserTable users={users} />
        </div>
    );
};

export default UsersPage;
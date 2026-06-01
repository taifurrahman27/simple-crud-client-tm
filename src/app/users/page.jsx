import React from 'react';
import UserTable from '@/components/UserTable';
import { getUsers } from '../lib/data';

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
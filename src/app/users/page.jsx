import React from 'react';
import UserTable from '@/components/UserTable';
import { getUsers } from '../lib/data';
import { deleteUser } from '../lib/actions';
import AddUserModal from '@/components/AddUserModal';

const UsersPage = async () => {

    const users = await getUsers();
    console.log(users, "all users");


    return (
        <div className="max-w-7xl w-full mx-auto px-5 py-6">
            <h1 className='text-5xl font-bold text-center text-violet-600 my-6 bg-blue-500/20 p-4 rounded-lg'>User Management: {users.length} </h1>
            <AddUserModal />
            <UserTable users={users} deleteUserAction={deleteUser} />
        </div>
    );
};

export default UsersPage;
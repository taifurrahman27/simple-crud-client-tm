import { updateUser } from '@/app/lib/actions';
import { getUserById } from '@/app/lib/data';
import UserEditPage from '@/components/UserEditPage';
import React from 'react';

const EditPage = async ({ params }) => {
    const { userId } = await params;
    const user = await getUserById(userId);

    const updateUserWrapper = async (formData) => {
        'use server'
        return await updateUser(formData, userId);
    }

    return (
        <div>
            <h1 className='text-5xl font-bold text-center text-violet-600 my-6 bg-blue-500/20 p-4 rounded-lg'>Edting user : </h1>
            <UserEditPage user={user} updateUserWrapper={updateUserWrapper} />

        </div>
    );
};

export default EditPage;
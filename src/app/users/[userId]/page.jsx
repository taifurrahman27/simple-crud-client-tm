import { getUserById } from '@/app/lib/data';
import UserDetails from '@/components/UserDetails';
import React from 'react';

const UserDetailsPage = async ({ params }) => {
    const { userId } = await params;
    const user = await getUserById(userId);
    console.log(user, "user from data");

    return (
        <div>
            <h1>User detaile of {user.name}</h1>
            <UserDetails user={user} />
        </div>
    );
};

export default UserDetailsPage;
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UserEditPage = ({ user, updateUserWrapper }) => {

    return (
        <div className='card border-2 shadow-2xl max-w-1/2 mx-auto'>
            <h2 >Edit User form</h2>
            <form action={updateUserWrapper} className="flex flex-col gap-4">
                <TextField className="w-full" name="name" type="text" defaultValue={user?.name} variant="secondary">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                </TextField>
                <TextField className="w-full" name="email" type="email" defaultValue={user?.email} variant="secondary">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                </TextField>
                <TextField className="w-full" name="role" type="text" defaultValue={user?.role} variant="secondary">
                    <Label>Role</Label>
                    <Input placeholder="Enter your role" />
                </TextField>
                <div className='flex gap-3'><Button slot="close" variant="secondary">
                    Cancel
                </Button>
                    <Button type='submit' slot="close">Add User</Button></div>
            </form>
        </div>
    );
};

export default UserEditPage;
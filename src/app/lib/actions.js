import { revalidatePath } from "next/cache";


export const createUser = async (FormData) => {
    'use server';

    const newUser = Object.fromEntries(FormData.entries());
    console.log(newUser, "New user from form modal");

    const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    const data = await res.json();
    console.log(data, "Data after post");
    console.log(data, "Data after delete");
    if (data.insertedId) {
        revalidatePath('/users');
    }
    return data;
}


export const deleteUser = async (userId) => {
    'use server';

    const res = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    console.log(data, "Data after delete");
    if (data.deletedCount > 0) {
        revalidatePath('/users');
    }
    return data;
}


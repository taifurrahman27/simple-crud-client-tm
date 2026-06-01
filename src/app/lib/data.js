export const getUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
};

export const getUserById = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch user (${res.status})`);
    }

    return res.json();
};

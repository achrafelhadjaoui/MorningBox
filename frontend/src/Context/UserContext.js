import React, { createContext, useState, useEffect, useContext } from 'react';
import { GetUsers } from '../Services/User/GetUsers.js';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const usersData = await GetUsers();
                console.log('llllllllllll' ,usersData)
                setUsers(usersData.users);
            } catch (error) {
                setError("Failed to load users. Please try again.");
                console.error("Error loading users:", error);
            } finally {
                setLoading(false);
            }
        };
        loadUsers();
    }, []);

    return (
        <UsersContext.Provider value={{ users, loading, error, setUsers }}>
            {children}
        </UsersContext.Provider>
    );
};

const useUsersContext = () => useContext(UsersContext);

export { UsersContext, UsersProvider, useUsersContext };

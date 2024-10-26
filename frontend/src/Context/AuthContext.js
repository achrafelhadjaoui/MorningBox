import {createContext, useState, useEffect, useContext} from 'react'
import api from '../Services/Api.js'
import { Login as authLogin } from '../Services/Auth/Login.js';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const initialize  = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log('i am token', token)
                if (token) {
                    const response = await api.get('/user', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setUser(response.data);
                }
            } catch (err) {
                console.error('Failed to fetch user:', err);
            } finally {
                setLoading(false);
            }
        };
        initialize();

    }, []);



    return (
        <AuthContext.Provider value={{
            user, setUser, loading, setError
        }}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export {AuthContext, AuthProvider, useAuth};


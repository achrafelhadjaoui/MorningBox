import {createContext, useState, useEffect, useContext} from 'react'
import api from '../Services/Api.js'
import { Login as authLogin } from '../Services/Auth/Login.js';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    console.log('I am auth context', user)

    useEffect(() => {
        const initialize  = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log('i am token', token)
                if (token) {
                    const response = await api.get('/user', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    console.log('I am the response', response.data)
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

    // const login = async (email, password) => {
    //     try {
    //         const {token} = await authLogin({email, password});
    //         const userResponse = await api.get('/user', {
    //             headers: { Authorization: `Bearer ${token}` }
    //         });
    //         setUser(userResponse.data);
    //     } catch (err) {
    //         console.error("Login failed:", err);
    //         setError("Login failed. Please check your credentials and try again.");
    //     }
    // };


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


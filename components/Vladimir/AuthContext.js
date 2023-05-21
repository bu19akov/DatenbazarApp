import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const logoutUser = (navigation) => {
        setIsLoggedIn(false);
        navigation.navigate("AuthScreen");
    };

    const authenticateUser = async (username, password, navigation) => {
        try {
            const response = await fetch(`https://datenbazar-app.vercel.app/api/check-credentials`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username, password: password }) 
            });

            const data = await response.json();
          
            if (data.valid) {
                console.log('User credentials are valid! User is logged in!');
                setIsLoggedIn(true);
                navigation.navigate("MyAccount", { username: username });
            } else {
                Alert.alert('Invalid credentials', 'Username or password is incorrect.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, authenticateUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

import React, { useEffect, useState } from 'react';

export function useAuth() {
    const [user, setUser] = useState({
        userName: null,
        userEmail: null,
        userToken: null
    });

    useEffect(() => {
        const userPersisted = JSON.parse(localStorage.getItem('user-auth'));
        if(!userPersisted) return;
        setUser(userPersisted);
    }, []);

    return { ...user, setUser };
}
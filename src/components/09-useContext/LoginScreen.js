import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // 1. Obtener la referencia al userContext
    // 2. setUser
    
    const { setUser } = useContext(UserContext);
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ () => setUser({
                    id: 123,
                    name: 'Fe'
                })}
            >
                Login
            </button>
        </div>
    )
}

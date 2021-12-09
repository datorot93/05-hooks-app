import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    // Hook que permite ejecutar algún efecto secundario cuando algo suceda en nuestros componentes
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });


    const { name, email } = formState;

    useEffect( () => {
        // console.log('Hey!');
    }, [formState]);

    useEffect( () => {
        // console.log('formState cambió');
    }, [formState]);
    
    useEffect( () => {
        // console.log('Email cambió');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState( {
            ...formState,
            [ target.name ]: target.value
        });
    }

    return(
        <>
            <h1>Simple Form</h1>   
            <hr />


            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>


            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="ejemplo@ejemplo.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name === '123' && <Message />}

        </>

    )
    
}

import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './CounterApp.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();


    return (
        <>
            <h1>Counter with Hook: { state } </h1>
            <h3 />

            <button 
                onClick={ () => increment(2) }
                className="btn"
            > 
                +1 
            </button>
                
            <button
                className="btn"
                onClick={ reset }
            >
                Reset
            </button>     
            <button 
                onClick={ () => decrement(2) }
                className="btn"
            > 
                -1 
            </button>
        </>
    )   
}

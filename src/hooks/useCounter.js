import { useState } from 'react';


export const useCounter = ( initialState = 10) => {
    const [state, setState] = useState(initialState);

    const increment = ( steps = 1) => {
        setState( state + steps );
    };

    const decrement = ( steps = 1) => {
        setState( state - steps );
    };

    const reset = () => {
        setState( initialState )
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}

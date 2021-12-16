import React from 'react';
import { useState } from 'react';
import '../02-useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    increment = () => {
        setCounter( counter + 1 );
    }
    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />
        </div>
    )
}

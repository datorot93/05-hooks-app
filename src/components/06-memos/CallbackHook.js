import React, { useCallback } from 'react';
import { useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );



    const increment = useCallback( (num) => {
        setCounter( c => c + num ); // Para eliminar dependencia del Counter
    }, [ setCounter ]);

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment= { increment } />
        </div>
    )
}

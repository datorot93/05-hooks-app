import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react/cjs/react.production.min';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // const increment = () => {
    //     setCounter( counter + 1 );
    // };

    const increment = useCallback( () => {
        setCounter( c => c + 1 );
    }, [ setCounter ]);

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment= { increment } />
        </div>
    )
}

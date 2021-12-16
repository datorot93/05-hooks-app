import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);
    // console.log( `Contador: ${counter}` );

    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
    const { quote } = !!data && data[0];
    
    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect( () => {
        setBoxSize( pTag.current.getBoundingClientRect() );
    }, [quote]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-end">  
                <p 
                    className="mb-1.5"
                    ref={ pTag }
                >{ quote }</p>                
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 )}
            </pre>
            <button 
                className="btn btn-primary" 
                onClick= { increment }
            >
                Next Quote
            </button>

        </div>
    )
}
  
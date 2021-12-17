import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    
    console.log("Hola, me volví a llamar");
    
    return (

        <div>
            <button
                onClick={
                    increment
                }
            >
                +1
            </button>
        </div>
    )
})

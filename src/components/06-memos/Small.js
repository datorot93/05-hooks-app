import React from 'react'

// Solo me vuelve a "renderizar" si las propiedades cambian
export const Small = React.memo(({ value }) => {

    console.log('Me volví a llamar');
    return (
        <small>
            { value }       
        </small>
    )
});
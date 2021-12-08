import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [cords, setCords] = useState({
        x: 0,
        y: 0
    });

    const {x, y } = cords

    useEffect(() => {
        
        const moveMouse = (e) => {
            const cords = { x: e.x, y: e.y};
            setCords( cords );
        }

        window.addEventListener('mousemove', moveMouse);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
        }
    }, [])
    return (
        <div>
            <h3>Eres genial</h3>
            <p>X: { x }, Y: { y } </p>
        </div>
    )
}

import React, { useState } from 'react'
import "./Score.css"


export default function Score({score,youWon}) {
    // const [score, setScore] = useState(0);


    if(score === 8)
    youWon(); 
    return (
        <div className='score'>
            <p>{score}</p>
        </div>
    )
}

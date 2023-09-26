import React, { useState } from 'react'
import "./Score.css"


export default function Score({score,youWon}) {
    // const [score, setScore] = useState(0);


    if(score > 10)
    youWon(); 
    return (
        <div className='score'>
            <p>{score}</p>
        </div>
    )
}

import React from 'react'
import "./Score.css"


export default function Score({score,youWon}) {


    if(score === 8)
    youWon(); 
    return (
        <div className='score'>
            <p>{score}</p>
        </div>
    )
}

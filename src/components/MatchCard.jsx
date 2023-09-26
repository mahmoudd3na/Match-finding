import React from 'react'
import Hp from './Hp'
import "./MatchCard.css"
import Card from './Card'
import Score from './Score'
import clubs from '../models/contants'
import Question from './Question'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MatchCard() {
    const [score, setScore] = useState(0);
    const [hp, setHp] = useState(3);
    const [result, setResult] = useState(null);
    // const [next, setNext] = useState(false);

    const handleClick = (event) => {
        if (event.target.getAttribute("data-key") === clubs[randomClub].name){
            incrementScore();
        }
        else decrementHp();
        // setNext(true);   
    }
    const incrementScore = () => {
        setScore(oldScore => {
            return oldScore + 1;
        })
    }
    const decrementHp = () => {
        setHp(oldHp => {
            return oldHp - 1;
        })
    }
    const endGame = () => {
        setResult(false);
    }
    const youWon =()=>{
        setResult(true); 
    }
    const randomClub = Math.floor(Math.random() * clubs.length);

    return (
        <>
            <div className='card-container'>
                <div className='score-hp'>
                    <Hp hp={hp} endGame={endGame} />
                    <Score score={score} youWon={youWon}/>
                </div>
                <Card randomClub={randomClub} />
                <Question randomClub={randomClub} handleClick={handleClick} />
                {result !== null && <p className="result-message">{result ? "You Won" : "You Lost"}</p>}
                {result !== null && <Link to="/" className='start-again'>Start again</Link>}
            </div>
        </>
    )
}

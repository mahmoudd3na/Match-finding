import Hp from './Hp'
import "./MatchCard.css"
import Card from './Card'
import Score from './Score'
import clubs from '../models/contants'
import Question from './Question'
import { useState, useEffect, useRef } from 'react'
import { Link, UNSAFE_DataRouterStateContext } from 'react-router-dom'

export default function MatchCard() {
    const [score, setScore] = useState(0);
    const [hp, setHp] = useState(3);
    const [result, setResult] = useState(null);
    const [next, setNext] = useState(false);
    const [nextButton, setNextButton] = useState(false);
    const [random, setRandom] = useState(Math.floor(Math.random() * clubs.length));
    const clubsRef = useRef([...clubs]);

    useEffect(() => {
        if (next) {
            handleRandom();
            setNext(false);
        }
        setNextButton(false);
    }, [next]);

    const handleRandom = () => {
        let index = Math.floor(Math.random() * clubsRef.current.length);
        for (let i = 0; i < clubs.length; i++) {
            if (clubs[i].name === clubsRef.current[index].name) {
                setRandom(i);
            }
        }
        console.log(clubsRef.current[index].name);
        console.log(`this is ref ${clubsRef.current}`)
        clubsRef.current.splice(index, 1);

    }



    const handleClick = (answer) => {
        if(result !== null) return

        if (answer) {
            incrementScore();
        }
        else decrementHp();
            setNextButton(true); //only when we press the next button  
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
        setNextButton(false);
    }
    const youWon = () => {
        setResult(true);
    }
    const handleNext = () => {
        if (score < 8)
            setNext(true);
    }

    return (
        <>
            <div className='card-container'>
                <div className='score-hp'>
                    <Hp hp={hp} endGame={endGame} />
                    <Score score={score} youWon={youWon} />
                </div>
                <Card randomClub={random} nextButton={nextButton} />
                <Question randomClub={random} handleClick={handleClick} nextButton={nextButton} />
                {result !== null && <p className="result-message">{result ? "You Won" : "You Lost"}</p>}
                {result !== null && <Link to="/" className='start-again'><img src="/play-again2.png"></img></Link>}
                {nextButton && score < 8 ? <div onClick={handleNext} className='next-icon' ><img src="/right-arrow.png"></img></div> : null}
            </div>
        </>
    )
}

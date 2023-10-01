import "./MatchCard.css"
import Hp from './Hp'
import Card from './Card'
import Score from './Score'
import clubs from '../models/contants'
import Question from './Question'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function MatchCard() {
    const [score, setScore] = useState(0);
    const [hp, setHp] = useState(3);
    const [result, setResult] = useState(null); // to declare the result win or lose
    const [next, setNext] = useState(false); // to show the next question when next button clicked
    const [nextButton, setNextButton] = useState(false); //to show the next button ... it represents the state of the app between the answer and the next question 
    const [random, setRandom] = useState(Math.floor(Math.random() * clubs.length));
    const clubsRef = useRef([...clubs]); //to keep track of the clubs we showed to user

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
        clubsRef.current.splice(index, 1);
    }

    const handleClick = (answer) => {
        if (result !== null) return

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
    const youLost = () => {
        setTimeout(() => {
            setResult(false);
        }, 800)
    }
    const youWon = () => {
        setTimeout(() => {
            setResult(true);
        }, 800)
    }
    const handleNext = () => {
        if (score < 8 && result === null && hp > 0)
            setNext(true);
    }

    return (
        <>
            <div className='card-container'>
                <div className='score-hp'>
                    <Hp hp={hp} youLost={youLost} />
                    <Score score={score} youWon={youWon} />
                </div>
                <Card randomClub={random} nextButton={nextButton} />
                <Question randomClub={random} handleClick={handleClick} nextButton={nextButton} />
                {result !== null && <p className="result-message">{result ? "You Won" : "You Lost"}</p>}
                {result !== null && <Link to="/" className='start-again'><img src="/play-again2.png"></img></Link>}
                {nextButton && hp > 0 && score < 8 ? <div className='next-icon' ><img onClick={handleNext} src="/right-arrow.png"></img></div> : null}
            </div>
        </>
    )
}

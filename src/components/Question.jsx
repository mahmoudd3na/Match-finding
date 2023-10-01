import React from 'react'
import clubs from '../models/constants'
import { useRef } from 'react'
import "../styles/Question.css"


export default function Question({ randomClub, handleClick, nextButton }) {
    const myOptionsRef = useRef({ random: 20, options: [] });

    const options = [];
    const result = [];
    options.push(randomClub);

    while (options.length < 3) {
        let randomOption = Math.floor(Math.random() * clubs.length);
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }
    const chooseRandomOption = () => {
        let index = Math.floor(Math.random() * options.length);
        let option = options[index];
        options.splice(index, 1);
        return option;
    }
    const generateOptions = () => {
        result.push(chooseRandomOption());
        result.push(chooseRandomOption());
        result.push(chooseRandomOption());
        if (randomClub !== myOptionsRef.current.random) {
            myOptionsRef.current.options = [...result];
            myOptionsRef.current.random = randomClub;
        }
    }
    generateOptions();

    const handleAnswer = (event) => {
        if (!nextButton) {
            if (event.target.getAttribute("data-key") === clubs[randomClub].name) {
                handleClick(true);
            }
            else handleClick(false);
        }
    }
    const getRight = () => {
        return {
            backgroundColor: "#64de4f",
            color: "#FFF5E0",

        }
    }
    const getWrong = () => {
        return {
            backgroundColor: "#C70039",
            color: "#FFF5E0",
        }
    }

    return (
        <>
            <ul className="options">
                {myOptionsRef.current.options.map((option, index) => {
                    return <li
                        onClick={handleAnswer}
                        key={index}
                        data-key={clubs[option].name}
                        style={nextButton ? clubs[option].name === clubs[randomClub].name ? getRight() : getWrong() : null}
                    >{clubs[option].name}</li>
                })}
            </ul>
        </>
    )
}
import React from 'react'
import clubs from '../models/contants'
import { useState } from 'react'
import "./Question.css"


export default function Question({ randomClub, handleClick}) {

    const options = [];
    const result = [];
    options.push(randomClub);

    while (options.length < 3) {
        let randomOption = Math.floor(Math.random() * clubs.length);
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }
    console.log(options);
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
    }
    generateOptions();
    console.log(result)

    return (
        <>
            <ul className="options">
                {result.map((option, index) => {
                    return <li onClick={handleClick} key={index} data-key={clubs[option].name}>{clubs[option].name}</li>
                })}
            </ul>
        </>
    )
}
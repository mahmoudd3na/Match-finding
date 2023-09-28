import React from 'react'
import { useState, useRef } from 'react'
import clubs from '../models/contants'
import "./Card.css"
export default function Card({ randomClub ,nextButton}) {

    // const [club, setClub] = useState(randomClub);
    // const usedMap = useRef([]); // to keep track of the cards that we showed so we don't show it again

    return (
        <>
            <div className='card'>
                <img src={nextButton ? clubs[randomClub].normalPic: clubs[randomClub].shadowPic} />
            </div>

        </>
    )
}

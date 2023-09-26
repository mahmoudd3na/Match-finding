import React from 'react'
import { useState, useRef } from 'react'
import clubs from '../models/contants'
import "./Card.css"
export default function Card({ randomClub }) {

    // const [club, setClub] = useState(randomClub);
    // const usedMap = useRef([]); // to keep track of the cards that we showed so we don't show it again
    console.log(clubs);
    return (
        <>
            <div className='card'>
                <img src={clubs[randomClub].normalPic} />
            </div>

        </>
    )
}

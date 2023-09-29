import React from 'react'
import clubs from '../models/contants'
import "./Card.css"

export default function Card({ randomClub ,nextButton}) {

    return (
        <>
            <div className='card'>
                <img src={nextButton ? clubs[randomClub].normalPic: clubs[randomClub].shadowPic} />
            </div>

        </>
    )
}

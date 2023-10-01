import React from 'react'
import clubs from '../models/constants'
import "../styles/Card.css"

export default function Card({ randomClub ,nextButton}) {

    return (
        <>
            <div className='card'>
                <img src={nextButton ? clubs[randomClub].normalPic: clubs[randomClub].shadowPic} />
            </div>

        </>
    )
}

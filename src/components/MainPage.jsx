import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/MainPage.css"

export default function MainPage() {
  return (
    <div className='card-container-main'>
    <h1>Guess the logo of the Club</h1>
    <h1>You have three lifes</h1>
    <Link to="/game">Start Game</Link>
    </div>
  )
}

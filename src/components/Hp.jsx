import React from 'react'
import "./Hp.css"
export default function Hp({hp,endGame}) {
    const hearts = [];
    const updateHearts = () => {
        for (let i = 0; i < 3; i++) {
            if (i < hp) {
                hearts[i] = true;
            }
            else hearts[i] = false;
        }
    }
    updateHearts();

    if(hp === 0)
    endGame(); 

    const checkHeart = (heart) => {
        if (heart)
            return "/heart.png"
        else return "/empty-heart.png"
    }
    return (
        <div className="hearts">
            {
                hearts.map((heart, index) => {
                    return <img key={index} src={checkHeart(heart)} />
                })
            }
        </div>

    )


}

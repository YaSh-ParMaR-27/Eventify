import React from "react"
import "./card.css"

import ballons from '../../assets/balloons.jpg'

const Cards = ({movie}) => {
    return (
    <>
        <div className="cards">
            <img className="cards__img" src={ballons}  alt=""/>
            <div className="cards__overlay">
                <div className="card__title">Music Concert</div>
                    
                <div className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam consequatur maxime eveniet fuga velit illo, officia eaque. Minus, incidunt?</div>
            </div>
        </div>
    </>
    );
}

export default Cards
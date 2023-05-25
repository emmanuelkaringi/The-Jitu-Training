import React from 'react'

function Card() {
    return (
        <article>
            <img src={imageSrc} alt="" />
            <div>
                <span>{number}</span>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </article>
    )
};

export default Card
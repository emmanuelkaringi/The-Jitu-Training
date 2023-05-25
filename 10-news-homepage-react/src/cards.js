import React from 'react'
import Image1 from './assets/images/image-retro-pcs.jpg'
import Image2 from './assets/images/image-top-laptops.jpg'
import Image3 from './assets/images/image-gaming-growth.jpg'

function Cards() {
    return (
        <div className="cards">
            <Card
                imageSrc={Image1}
                number="01"
                title="Reviving Retro PCs"
                description="What happens when old PCs are given modern upgrades?"
            />
            <Card
                imageSrc={Image2}
                number="02"
                title="Top 10 Laptops of 2022"
                description="Our best picks for various needs and budgets."
            />
            <Card
                imageSrc={Image3}
                number="03"
                title="The Growth of Gaming"
                description="How the pandemic has sparked fresh opportunities."
            />
        </div>
    )
};

function Card({ imageSrc, number, title, description }) {
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

export default Cards
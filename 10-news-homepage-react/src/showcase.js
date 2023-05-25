import React from 'react'
import Cover from './assets/images/image-web-3-desktop.jpg'
import Mobile from './assets/images/image-web-3-mobile.jpg'

function Showcase() {
  return (
    <section className="showcase">
    <div>
      <picture>
        <source media="(min-width: 768px)" srcSet={Cover} />
        <img src={Mobile} alt="" />
      </picture>
      <article>
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands
            of the people. But is it really fulfilling its promise?
          </p>
          <button>Read more</button>
        </div>
      </article>
    </div>
    <div>
      <h2>New</h2>
      <article>
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </article>
      <article>
        <h3>The Downsides of AI Artistry</h3>
        <p>What are the possible adverse effects of on-demand AI image generation?</p>
      </article>
      <article>
        <h3>Is VC Funding Drying Up?</h3>
        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </article>
    </div>
  </section>
  )
}

export default Showcase
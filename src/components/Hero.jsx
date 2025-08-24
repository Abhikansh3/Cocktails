import React from 'react'

const Hero = () => {
  return (
    <>
    <section id='hero' className='noisy'>
     <h1 className='title'>MOJITO</h1>

     <img src="/images/hero-left-leaf.png" alt="left leaf" className='left-leaf'/>
     <img src="/images/hero-right-leaf.png" alt="right leaf" className='right-leaf'/>

     <div className='body'>
        <div className='content'>
            <div className='space-y-5 hidden md:block'>
                <p>Sip. Savor. Socialize.</p>
                <p className='sub-content'>
                    Pouring the spirit <br/> of escape
                </p>
            </div>

            <div className='view-cocktails'>
                <p className='subtitle'>
              Each cocktail is a harmony of premium spirits, artistry, and timeless recipes — crafted to awaken your senses.
                </p>
                <a href="#cocktails">View Cocktails</a>
            </div>
        </div>
     </div>
    </section>
    </>
  )
}

export default Hero
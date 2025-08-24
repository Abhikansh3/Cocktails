import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import React from 'react'

const Hero = () => {

    useGSAP(()=>{
        const heroSplit = new SplitText('.title',{type:'chars , words'})
        const paraSplit = new SplitText('.subtitle',{type:'lines'})
        

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars,{
            yPercent:100,
            duration:1.8,
            stagger:0.06,
            ease:'expo.out'
        });

        gsap.from(paraSplit.lines,{
            opacity:0,
            delay:1,
            yPercent:100,
            duration:1.8,
            stagger:0.06,
            ease:'expo.out'
        });

        gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start: 'top top',
                end: 'bottom top',
                scrub:true
            }
        })
        .to('.right-leaf',{y:200,},0)
        .to('.left-leaf',{y:-200,},0)
    
    },[])
  return (
    <>
    <section id='hero' className='noisy'>
     <h1 className='title'>MOJITO</h1>

     <img src="/images/hero-left-leaf.png" alt="left leaf" className='left-leaf'/>
     <img src="/images/hero-right-leaf.png" alt="right leaf" className='right-leaf'/>

     <div className='body'>
        <div className='content'>
            <div className='space-y-5 hidden md:block'>
                <p className='subtitle'>Sip. Savor. Socialize.</p>
                <p className='subtitle'>
                    Pouring the spirit <br/> of escape
                </p>
            </div>

            <div className='view-cocktails'>
                <p className='subtitle'>
              Each cocktail is a harmony of premium spirits, artistry, and timeless recipes — crafted to awaken your senses.
                </p>
                <a href="#cocktails" className='subtitle'>View Cocktails</a>
            </div>
        </div>
     </div>
    </section>
    </>
  )
}

export default Hero
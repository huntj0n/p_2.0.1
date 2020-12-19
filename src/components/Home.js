import React, { useEffect, useState } from 'react';

import IntroOverlay from './IntroOverlay';
import Banner from './Banner';
import Showcase from './Showcase';
import gsap from 'gsap';

const tl = gsap.timeline();
const homeAnimation = (completeAnimation) => {
  tl.from('.line span', 1.8, {
    opacity: 0,
    y: 100,
    ease: 'power4.out',
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })
  .to('.introOverlay__topSection', 1.5, {
    height: 0,
    ease: "expo.inOut",
    stagger: 0.4
  })
  .to('.introOverlay__bottomSection', 1.5, {
    width: 0,
    ease: "expo.inOut",
    delay: -.8,
    stagger: {
      amount: 0.4
    }
  })
  .to('.introOverlay', 0, {css: {display: 'none'}})
  .from('.showcase__img img', 1.5, {
    scale: 1.4,
    ease: "expo.inOut",
    delay: -2,
    stagger: {
      amount: 0.4
    },
    onComplete: completeAnimation
  })
  .to('header', 0, {css: {zIndex: '4'}})
  
}

const Home = () => {
    const [animationComplete, setAnimationComplete] = useState(false)

    const completeAnimation = () => {
      setAnimationComplete(true)
    }


    useEffect(() => {
      homeAnimation(completeAnimation);
      }, [])

    return (
        <>
        {animationComplete === false ? <IntroOverlay/> : null}
          <Banner />
          <Showcase />
        </>
    )
}

export default Home

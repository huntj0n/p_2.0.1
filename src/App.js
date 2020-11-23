import React, { useEffect } from 'react';
import './App.scss';

import Header from './components/Header';
import Banner from './components/Banner';
import Showcase from './components/Showcase';
import IntroOverlay from './components/IntroOverlay';

import gsap from 'gsap';

function App() {

  //mobile device vh
  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    gsap.to('body', 0, {css: {visibility: "visible"}})

    //gsap timeline
    const tl = gsap.timeline();

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
      stagger: 0.3
    })
    .to('.introOverlay__bottomSection', 1.5, {
      width: 0,
      ease: "expo.inOut",
      delay: -.6,
      stagger: {
        amount: 0.3
      }
    })
    .to('.introOverlay', 0, {css: {display: 'none'}})
    .from('.showcase__img img', 1.5, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4
      }
    })

  }, [])

  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Banner />
      <Showcase />
    </div>
  );
}

export default App;

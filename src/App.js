import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import Navigation from './components/Navigation';
import gsap from 'gsap';

//pages
import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

//routes
const routes = [
  {path: '/', name: 'home', Component: Home},
  {path: '/about', name: 'About', Component: About},
  {path: '/contact', name: 'Contact', Component: Contact},
  {path: '/resume', name: 'Resume', Component: Resume},
]

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(()=> {
      timer = null;
      fn.apply(this, arguments)
    }, ms)
  }
}

function App() {

  //prevents white flashing on load
  gsap.to('body', 0, {css: {visibility: "visible"}})

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  }, 1000)

  useEffect(()=>{
    //mobile device vh
    let vh = dimensions.height * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    })

    window.addEventListener("resize", debouncedHandleResize);
    
    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  }, [])

  return (
    <>
      <Header dimensions={dimensions}/>
      {console.log(dimensions)}
      <div className="App">
        {routes.map(({path, Component}) => (
          <Route
            key={path}
            exact path={path}>
              <Component/>
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;

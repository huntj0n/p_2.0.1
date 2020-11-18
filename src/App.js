import React, { useEffect } from 'react';
import './App.scss';

import Header from './components/Header';
import Banner from './components/Banner';
import Showcase from './components/Showcase';

function App() {

  //mobile device vh
  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <div className="App">
      <Header />
      <Banner />
      <Showcase />
    </div>
  );
}

export default App;

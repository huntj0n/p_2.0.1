import React, { useEffect } from 'react';
import './App.scss';

import Header from './components/Header';
import Banner from './components/Banner';

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
    </div>
  );
}

export default App;

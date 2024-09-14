import { useState } from 'react'
import './App.css'

import HeroBanner from './components/HeroBanner'
import TickerComponent from './components/TickerComponent';
import TimelineComponent from './components/TimelineComponent';
import SocialMediaContainer from './components/socials/SocialMediaContainer';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <TickerComponent/>
      <HeroBanner/>
      <TimelineComponent></TimelineComponent>
      <SocialMediaContainer></SocialMediaContainer>
      <Footer/>
    </>
  )
}

export default App

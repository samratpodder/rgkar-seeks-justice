import { useState } from 'react'
import './App.css'

import HeroBanner from './components/HeroBanner'
import TickerComponent from './components/TickerComponent';
import TimelineComponent from './components/TimelineComponent';
import SocialMediaContainer from './components/socials/SocialMediaContainer';

function App() {

  return (
    <>
      <TickerComponent/>
      <HeroBanner/>
      <TimelineComponent></TimelineComponent>
      <SocialMediaContainer></SocialMediaContainer>
    </>
  )
}

export default App

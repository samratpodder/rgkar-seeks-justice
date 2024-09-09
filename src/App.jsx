import { useState } from 'react'
import './App.css'

import HeroBanner from './components/HeroBanner'
import TickerComponent from './components/TickerComponent';
import TimelineComponent from './components/TimelineComponent';

function App() {

  return (
    <>
      <TickerComponent/>
      <HeroBanner/>
      <TimelineComponent></TimelineComponent>
    </>
  )
}

export default App

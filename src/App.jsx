import { useState } from 'react'
import './App.css'

import HeroBanner from './components/HeroBanner'
import TickerComponent from './components/TickerComponent';

function App() {

  return (
    <>
      <TickerComponent/>
      <HeroBanner/>
    </>
  )
}

export default App

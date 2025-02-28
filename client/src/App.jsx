import { Routes, Route } from 'react-router-dom'
import './App.css'
import { EventViews } from './views/EventViews'
import { EventDetails } from './components/EventDetails'
import { useState } from 'react'
import { Header } from './components/Header'

function App() {
  const [headerTxt, setHeaderTxt] = useState("Events @Crusiers")

  return (
    <>
    <Header headerTxt={headerTxt} />
    <Routes>
      <Route path="/" element={<EventViews headerTxt={setHeaderTxt} />} />
      <Route path="/:id" element={<EventDetails headerTxt={setHeaderTxt} /> } />
    </Routes>
    </>
  )
}

export default App

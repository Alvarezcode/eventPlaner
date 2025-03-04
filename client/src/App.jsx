import { Routes, Route } from 'react-router-dom'
import './App.css'
import { EventViews } from './views/EventViews'
import { EventDetails } from './components/EventDetails'
import { useState } from 'react'
import { Header } from './components/Header'
import { EventForm } from './components/EventForm'

function App() {
  const [headerTxt, setHeaderTxt] = useState("Events @Crusiers")

  return (<>
    <Header headerTxt={headerTxt} />
    <Routes>
      <Route path="/" element={<EventViews setHeaderTxt={setHeaderTxt} />} />
      <Route path="/:id" element={<EventDetails setHeaderTxt={setHeaderTxt} />} />
      <Route path="/event" element={<EventForm setHeaderTxt={setHeaderTxt} />} />
      <Route path="/:id/update" element={<EventForm setHeaderTxt={setHeaderTxt} />} />
    </Routes>
  </>)
}

export default App

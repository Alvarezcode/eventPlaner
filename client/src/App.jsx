import { Routes, Route } from 'react-router-dom'
import './App.css'
import { EventViews } from './views/EventViews'

function App() {
  

  return (
    <>
    <h1>Hello Human</h1>
    <Routes>
      <Route path="/" element={<EventViews />} />
    </Routes>
    </>
  )
}

export default App

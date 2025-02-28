import { Routes, Route } from 'react-router-dom'
import './App.css'
import { EventViews } from './views/EventViews'
import { EventDetails } from './components/EventDetails'

function App() {
  

  return (
    <>
    <h1>Hello Human</h1>
    <Routes>
      <Route path="/" element={<EventViews />} />
      <Route path="/:id" element={<EventDetails /> } />
    </Routes>
    </>
  )
}

export default App

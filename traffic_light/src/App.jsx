import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrafficLight from './Components/TrafficLight/TrafficLight'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TrafficLight />
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="App bg-red-200">
      <h1 className="text-3xl font-bold underline">
        Hello, Tailwind CSS with PrimeReact!
      </h1>
    </div>
    </>
  )
}

export default App

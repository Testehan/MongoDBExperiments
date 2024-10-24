import { useState } from 'react'
import './App.css'

import Movies from "./movies.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <main role="main" className="container">
            <h1>Welcome to Vidly app</h1>
            <br />
            <Movies/>
        </main>
    </>
  )
}

export default App

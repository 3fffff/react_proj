import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Split } from './component/split/split'
import left from './index.jpeg'
import right from './tree.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Split left={left} right={right} />
    </div>
  )
}

export default App

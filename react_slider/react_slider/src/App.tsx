import React from 'react'
import { Slider } from './components/slider/slider'
import image from './index.jpeg'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Slider reviews={[{ id: 1, name: "dsgde dfghtrtr", text: "text", image },
      { id: 2, name: "qqqqq dfghtrtr", text: "text", image },
      { id: 3, name: "zzzzzx dfghtrtr", text: "text", image }]}/>
    </div >
  )
}
export default App;

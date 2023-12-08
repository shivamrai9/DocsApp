import React from 'react'
import Background from './componants/Background'
import Foreground from './componants/Foreground'

function App() {
  return (
    <div className='relative w-full  h-screen bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App

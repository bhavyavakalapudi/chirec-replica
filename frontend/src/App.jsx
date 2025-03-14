import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { WhyChirec } from './why-choose-us/WhyChirec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/why-chirec' element={<WhyChirec/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

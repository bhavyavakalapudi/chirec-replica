import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { WhyChirec } from './why-choose-us/WhyChirec'
import { Contact } from './components/Contact'
import { WhatWeStandFor } from './why-choose-us/WhatWeStandFor'
import { SchoolAwards } from './why-choose-us/SchoolAwards'
import { StudentSafeguarding } from './why-choose-us/StudentSafeguarding'
import { CognitaFamily } from './why-choose-us/CognitaFamily'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/why-chirec' element={<WhyChirec/>} />
          <Route path='/what-we-stand-for' element={<WhatWeStandFor/>} />
          <Route path='/school-awards' element={<SchoolAwards/>}/>
          <Route path='/studentcare-safeguarding' element={<StudentSafeguarding/>}/>
          <Route path='/our-cognita-family' element={<CognitaFamily/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

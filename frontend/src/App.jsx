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
import { CareerGuidance } from './academic-excellence/CareerGuidance'
import { LearningSupport } from './academic-excellence/LearningSupport'
import { YourChildsJourney } from './academic-excellence/YourChildsJourney'
import { ActivitiesProgrammes } from './holistic-development/ActivitiesProgrammes'
import { OurCharacterCompass } from './holistic-development/OurCharacterCompass'
import { InnovationHub } from './holistic-development/InnovationHub'
import { StudentAchievement } from './holistic-development/StudentAchievements'
import { IndianGlobalCitizenship } from './holistic-development/IndianGlobalCitizenship'
import AdmissionProcess from './admissions/AdmissionProcess'
import PaymentProcess from './admissions/PaymentProcess'
import FAQS from './admissions/FAQS'
import OurWorkCulture from './work-with-us/OurWorkCulture'
import JobVacancies from './work-with-us/JobVacancies'
import { ProfessionalDevelopment } from './work-with-us/ProfessionalDevelopment'
import NewsLetters from './others/NewsLetters'
import Alumni from './others/Alumni'
import StudentJournals from './others/StudentJournals'

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
          <Route path='/career-guidance' element={<CareerGuidance/>}/>
          <Route path='/learning-support' element={<LearningSupport/>}/>
          <Route path='/your-childs-journey' element={<YourChildsJourney/>}/>
          <Route path='/activities-programmes' element={<ActivitiesProgrammes/>}/>
          <Route path='/our-character-compass' element={<OurCharacterCompass/>}/>
          <Route path='/innovation-hub' element={<InnovationHub/>}/>
          <Route path='/student-achievements' element={<StudentAchievement/>}/>
          <Route path='/indian-global-citizenship' element={<IndianGlobalCitizenship/>}/>
          <Route path='/admission-process' element={<AdmissionProcess/>} />
          <Route path='/payment-process' element={<PaymentProcess/>}/>
          <Route path='faqs' element={<FAQS/>}/>
          <Route path='/our-work-culture' element={<OurWorkCulture/>}/>
          <Route path='/job-vacancies' element={<JobVacancies/>}/>
          <Route path='/professional-development' element={<ProfessionalDevelopment/>}/>
          <Route path='/newletters' element={<NewsLetters/>}/>
          <Route path='/alumni' element={<Alumni/>}/>
          <Route path='/student-journals' element={<StudentJournals/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

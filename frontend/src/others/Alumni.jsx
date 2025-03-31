import React from 'react'
import { Navbar } from '../components/Navbar'
import { BFooter } from '../components/BFooter'
import { Footer } from '../components/Footer'

const Alumni = () => {
    return (
        <div>
            <Navbar />
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/03/1_o_medium.jpg" alt="" className='h-130 mt-30' />
            <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <h1 className="font-bold text-6xl">CHIREC ALUMNI</h1>
            </div>
            <p className='m-5'>For over three decades, CHIREC has been synonymous with excellence in education, shaping the minds and futures of countless students in Hyderabad and beyond. With four campuses spread across the city, we have served as the foundation for generations of learners, instilling in them the values of knowledge, integrity, and community. </p>
            <p className='m-5'>Our legacy is not just measured in years but in the achievements of our alumni, who have gone on to make their mark in every corner of the globe. From entrepreneurs to corporate leaders, from actors gracing the silver screen to artists shaping culture, our alumni are the living embodiment of our school’s mission to make the world a better place. </p>
            <p className='m-5'>Every year, we eagerly anticipate our flagship event, the CHIREC Alumni Meet. It’s a time when the school echo with laughter and memories, as former students reconnect with old friends and teachers, sharing stories of their journey since graduation. It’s a testament to the enduring bonds forged within these walls and the lasting impact of a CHIREC education. </p>
            <p className='m-5'>As we look to the future, our alumni remain our greatest source of inspiration and pride. They carry forward the torch of excellence, embodying the values instilled in them during their time at CHIREC. Whether they’re making groundbreaking discoveries, leading innovative projects, or simply making a difference in their communities, our alumni continue to illuminate the path ahead. </p>
            <p className='m-5'>To all our alumni, near and far, we extend a heartfelt invitation to stay connected with your alma mater. Whether it’s through attending reunions, mentoring current students, or simply sharing your achievements with us, your continued involvement enriches the CHIREC community and strengthens the bonds that unite us all. </p>
            <div className='bg-white shadow-2xl mx-auto w-150 m-10 rounded'>
                <h1 className='text-center font-bold text-2xl p-5 mt-10'>Explore on our alumni portal</h1>
                <div className='flex justify-center'>
                <button type="button" className="text-white focus:outline-none
                        focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-green-500">
                    MORE
                </button>
                </div>
            </div>
            <BFooter/>
            <Footer/>
        </div>
    )
}

export default Alumni
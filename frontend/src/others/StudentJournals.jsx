import React from 'react'
import { Navbar } from '../components/Navbar'
import { BFooter } from '../components/BFooter'
import { Footer } from '../components/Footer'

const StudentJournals = () => {
    return (
        <div>
            <Navbar />
            <div className="flex mt-40 items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <h1 className="font-bold text-6xl">Student Journals</h1>
            </div>
            <p className='p-5'>Welcome to our Student Journals hub! Immerse yourself in the dynamic world of student creativity. From insightful essays to captivating artwork, discover the diverse talents and perspectives of our students showcased on this page.</p>
            <div className='grid grid-cols-4 p-5 gap-1'>
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/05/1.png?w=640" alt="" />
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/05/2.png?w=640" alt="" />
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/05/3.png?w=640" alt="" />
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/05/4.png?w=640" alt="" />
            </div>
            <div className='flex justify-center'>
                <button type="button" className="text-white focus:outline-none
                        focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-500">
                    Read More
                </button>
            </div>
            <BFooter/>
            <Footer/>
        </div>
    )
}

export default StudentJournals
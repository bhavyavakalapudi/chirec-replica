import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { HiPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi";
import { BFooter } from '../components/BFooter';
import { Footer } from '../components/Footer';

const JobVacancies = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    return (
        <div>
            <Navbar />
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Job-Vacancies-1.png" alt="" className='h-130 mt-30' />
            <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <h1 className="font-bold text-6xl">Job Vacancies 2025-26</h1>
            </div>
            <div className='ml-70 mr-60 mt-10'>
                <p>Welcome to CHIREC, ranked no. #1 school in Telangana and one of the top 10 schools in India where fostering growth isn`t just a statement – it’s our culture. We are a leading 34-year-old K12 Institution providing an excellent quality benchmark and a lasting passion for learning. We believe in providing unparalleled opportunities for professional and personal development, supporting our staff to excel in their careers. Our commitment to competitive compensation and a harmonious work-life balance ensures that every member of our team feels valued and empowered. At our school, we prioritize a nurturing environment, fostering a culture of care and support among colleagues. Join us to be part of a community where your talents are recognized, and your growth is encouraged every step of the way.</p>
                <p className='mt-5'>We are looking for enthusiastic teachers who have good communication skills (verbal and written), observation skills, classroom management skills and attention to detail. Our ideal candidates are teachers who are patient, empathetic and collaborative. Teachers should be competent in planning and designing learning materials. They should be proficient in using technology and employing innovative teaching methods to facilitate learning.</p>
                <div className='flex justify-center'>
                    <button type="button" className="text-gray-900 mt-5 bg-white border border-red-500 focus:outline-none
                            focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white
                            dark:border-red-500 dark:bg-red-500 dark:focus:ring-red-500 dark:hover:bg-blue-500 dark:hover:border-blue-500">
                        READ MORE
                    </button>
                </div>
                <h1 className="font-bold text-4xl pt-10">Academic Positions</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <div className="bg-gray-100 mb-20 hover:cursor-pointer">
                    <div className="flex">
                        <button onClick={() => {
                            setIsOpen1(!isOpen1)
                        }} className="flex m-3 hover:cursor-pointer font-bold"><HiPlus className={`${isOpen1 ? 'hidden' : 'block'} text-2xl text-green-500 mr-10`} /> <HiMinus className={`${isOpen1 ? 'block' : 'hidden'} text-2xl text-red-500 mr-10`} />CBSE</button>

                    </div>
                    <div className={`${isOpen1 ? 'block' : 'hidden'}`}>
                        <p className="ml-20 mr-5 pb-5">
                            You can begin the admissions process by filling out the
                            <a href="/contact-us" className='text-blue-500 underline'> Online Enquiry Form. </a> For more details on the admissions process, please
                            <a href="/contact-us" className='text-blue-500 underline'> click here.</a>
                        </p>
                    </div>
                    <hr class="h-px border-0 bg-gray-300"></hr>
                    <div className="flex">
                        <button onClick={() => {
                            setIsOpen2(!isOpen2)
                        }} className="flex m-3 hover:cursor-pointer font-bold"><HiPlus className={`${isOpen2 ? 'hidden' : 'block'} text-2xl text-green-500 mr-10`} /> <HiMinus className={`${isOpen2 ? 'block' : 'hidden'} text-2xl text-red-500 mr-10`} />CIE - (CAMBRIDGE AND IBDP)</button>
                    </div>
                    <div className={`${isOpen2 ? 'block' : 'hidden'}`}>
                        <p className="ml-20 mr-5 pb-5">
                            You can email us at admissions@chirec.ac.in and we will be happy to assist you.

                            You can also call us at 9866461204, 8121004827 or 7702203382. Our working hours are from 9:00 am to 4:00 pm from Monday to Saturday.
                        </p>
                    </div>
                    <hr class="h-px border-0 bg-gray-300"></hr>
                </div>
                <h1 className="font-bold text-4xl pt-10">Academic Support</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <ul className="list-disc pl-5 space-y-2 mt-5">
                    <li>Counsellors
                        <ul className="list-disc pl-5 space-y-2 mt-5">
                            <li>Occupational Therapist</li>
                            <li>Behavioural Counsellor</li>
                            <li>Remedial Counsellor</li>
                            <li>Career Guidance Counsellor</li>
                        </ul>
                    </li>
                    <li>Librarian
                        <ul className="list-disc pl-5 space-y-2 mt-5">
                            <li>Primary</li>
                        </ul>
                    </li>
                    <li>Sports
                        <ul className="list-disc pl-5 space-y-2 mt-5">
                            <li>Physical Education Teacher</li>
                            <li>Gymnastics Coach</li>
                            <li>Basketball Coach</li>
                            <li>Football Coach</li>
                        </ul>
                    </li>
                    <li>Activity
                        <ul className="list-disc pl-5 space-y-2 mt-5">
                            <li>Clay Modelling Coach</li>
                            <li>Tabla Teacher</li>
                            <li>Art and Craft Teacher</li>
                        </ul>
                    </li>
                </ul>
                <h1 className="font-bold text-4xl pt-10">Administrative Support</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <ul className="list-disc pl-5 space-y-2 mt-5">
                    <li>Graphic Designer</li>
                    <li>CCTV Monitoring Technician</li>
                    <li>Network Manager</li>
                    <li>Day Care teacher</li>
                    <li>Parent Relations – Associate</li>
                    <li>Parent Relations – Manager</li>
                    <li>Admissions Counsellor</li>
                    <li>Administrative Associate – Front office</li>
                    <li>First Aid Assistant</li>
                    <li>Human Resources</li>
                    <li>Data Analyst – MIS</li>
                </ul>
                <p className='pt-5'>To submit your application, kindly click on the ‘APPLY NOW‘ button below and complete the form. If you have any inquiries, feel free to reach out to us at careers@chirec.ac.in.</p>
                <p className='pt-5'>Cognita Schools are committed to safeguarding and promoting the welfare of children and young people and expects all staff, volunteers and other third parties to share this commitment. Safer recruitment practice and pre-employment background checks will be undertaken before any appointment is confirmed.</p>
            </div>
            <BFooter/>
            <Footer/>
        </div>
    )
}

export default JobVacancies
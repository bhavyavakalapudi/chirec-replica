import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { HiPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi";
import { BFooter } from '../components/BFooter';
import { Footer } from '../components/Footer';

const FAQS = () => {
    const [aOpen, setAOpen] = useState(true)
    const [arOpen, setArOpen] = useState(false)
    const [SOpen, setSOpen] = useState(false)

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);

    return (
        <div>
            <Navbar />
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/FAQs.png" alt="" className='h-130 mt-30' />
            <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <h1 className="font-bold text-6xl">FAQS</h1>
            </div>
            <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-5 grid grid-cols-3 p-5 rounded-lg">
                <button onClick={() => {
                    setAOpen(true)
                    setArOpen(false)
                    setSOpen(false)
                }} className={`hover:text-red-500 cursor-pointer ${aOpen === true ? 'text-red-500' : 'text-black'}`}>Admission Process</button>
                <button onClick={() => {
                    setAOpen(false)
                    setArOpen(true)
                    setSOpen(false)
                }} className={`hover:text-red-500 cursor-pointer ${arOpen === true ? 'text-red-500' : 'text-black'}`}>Curriculum & Grades</button>
                <button onClick={() => {
                    setAOpen(false)
                    setArOpen(false)
                    setSOpen(true)
                }} className={`hover:text-red-500 cursor-pointer ${SOpen === true ? 'text-red-500' : 'text-black'}`}>School Information</button>
            </div>
            {aOpen && (
                <div className="bg-gray-100 mr-50 ml-50 mb-20 hover:cursor-pointer">
                    <div className="flex">
                        <button onClick={() => {
                            setIsOpen1(!isOpen1)
                        }} className="flex m-3 hover:cursor-pointer font-bold"><HiPlus className={`${isOpen1 ? 'hidden' : 'block'} text-2xl text-green-500 mr-10`} /> <HiMinus className={`${isOpen1 ? 'block' : 'hidden'} text-2xl text-red-500 mr-10`} />How do I apply to CHIREC</button>

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
                        }} className="flex m-3 hover:cursor-pointer font-bold"><HiPlus className={`${isOpen2 ? 'hidden' : 'block'} text-2xl text-green-500 mr-10`} /> <HiMinus className={`${isOpen2 ? 'block' : 'hidden'} text-2xl text-red-500 mr-10`} />How can I contact the Admissions department at CHIREC?</button>
                    </div>
                    <div className={`${isOpen2 ? 'block' : 'hidden'}`}>
                        <p className="ml-20 mr-5 pb-5">
                            You can email us at admissions@chirec.ac.in and we will be happy to assist you.

                            You can also call us at 9866461204, 8121004827 or 7702203382. Our working hours are from 9:00 am to 4:00 pm from Monday to Saturday.
                        </p>
                    </div>
                    <hr class="h-px border-0 bg-gray-300"></hr>
                    <div className="flex">
                        <button onClick={() => {
                            setIsOpen3(!isOpen3)
                        }} className="flex m-3 hover:cursor-pointer font-bold"><HiPlus className={`${isOpen3 ? 'hidden' : 'block'} text-2xl text-green-500 mr-10`} /> <HiMinus className={`${isOpen3 ? 'block' : 'hidden'} text-2xl text-red-500 mr-10`} />When does the school year begin and end?</button>
                    </div>
                    <div className={`${isOpen3 ? 'block' : 'hidden'}`}>
                        <p className="ml-20 mr-5 pb-5">
                            The academic year begins in June and ends in March or April in accordance with government guidelines for both CBSE and International section students. For students in Grade 6 and above, the academic year begins in mid-March for a few weeks before the summer break to prepare our students for a head start in June.
                        </p>
                    </div>
                    <hr class="h-px border-0 bg-gray-300"></hr>
                    <div className="flex">
                        <button onClick={() => {
                            setIsOpen4(!isOpen4)
                        }} className="flex m-3 hover:cursor-pointer font-bold"><HiPlus className={`${isOpen4 ? 'hidden' : 'block'} text-2xl text-green-500 mr-10`} /> <HiMinus className={`${isOpen4 ? 'block' : 'hidden'} text-2xl text-red-500 mr-10`} />What is the age criterion for my child’s class?</button>
                    </div>
                    <div className={`${isOpen4 ? 'block' : 'hidden'}`}>
                        <div className='grid grid-cols-3 ml-20 text-center w-200 p-5'>
                            <h1 className='bg-blue-200 font-bold mr-0.5 p-2'>Grade Level</h1>
                            <h1 className='bg-blue-200 font-bold  mr-0.5 p-2'>Minimum age as on 30th June, 2024</h1>
                            <h1 className='bg-blue-200 font-bold  mr-0.5 p-2'>Date of Birth</h1>
                            <h1 className='mr-0.5 p-2'>Nursery</h1>
                            <h1 className='mr-0.5 p-2'>2 years 6 months</h1>
                            <h1 className='mr-0.5 p-2'>1st Jan and 31st Dec 2021</h1>
                            <h1 className='bg-gray-50 mr-0.5 p-2'>Pre-Primary 1 (PP1)</h1>
                            <h1 className='bg-gray-50 mr-0.5 p-2'>3 years 6 months</h1>
                            <h1 className='bg-gray-50 mr-0.5 p-2'>1st Jan and 31st Dec 2020</h1>
                            <h1 className='mr-0.5 p-2'>Pre-Primary 2 (PP2)</h1>
                            <h1 className='mr-0.5 p-2'>4 years 6 months</h1>
                            <h1 className='mr-0.5 p-2'>1st Jan and 31st Dec 2019</h1>
                            <h1 className='bg-gray-50 mr-0.5 p-2'>Grade 1</h1>
                            <h1 className='bg-gray-50 mr-0.5 p-2'>5 years 6 months</h1>
                            <h1 className='bg-gray-50 mr-0.5 p-2'>1st Jan and 31st Dec 2018</h1>
                        </div>
                    </div>
                    <hr class="h-px border-0 bg-gray-300"></hr>
                    <hr class="h-px border-0 bg-gray-300"></hr>
                    <div className="flex">
                        <button onClick={() => {
                            setIsOpen6(!isOpen6)
                        }} className="flex m-3 hover:cursor-pointer font-bold"><HiPlus className={`${isOpen6 ? 'hidden' : 'block'} text-2xl text-green-500 mr-10`} /> <HiMinus className={`${isOpen6 ? 'block' : 'hidden'} text-2xl text-red-500 mr-10`} />How does the NEP affect my child’s grade level?</button>
                    </div>
                    <div className={`${isOpen6 ? 'block' : 'hidden'}`}>
                        <p className="ml-20 mr-5 pb-5">
                            As you are aware, there is a national debate on age criteria occasioned by the launch of the National Education Policy by the central government. However, this is a policy document that makes recommendations to states, to which states will decide how to respond. Telangana has not yet passed the National Education Policy into law.

                            While the NEP is predicated on entry into school at age 3 years and above, CHIREC in the past has served children of 2 years and 6 months and above.

                            We welcome your applications, but please be aware that the situation is subject to state regulations. If you have any individual worries, please let us know – we are here to help you and set your mind at ease.</p>
                    </div>
                </div>
            )}
            <BFooter/>
            <Footer/>
        </div>
    )
}

export default FAQS
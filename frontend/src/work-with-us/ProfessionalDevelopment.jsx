import React from 'react'
import { Navbar } from '../components/Navbar'
import { IoIosStarOutline } from "react-icons/io";
import { BFooter } from '../components/BFooter';
import { Footer } from '../components/Footer';

export const ProfessionalDevelopment = () => {
    return (
        <div>
            <Navbar />
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/Professional-Development.png" alt="" className='h-130 mt-30' />
            <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <h1 className="font-bold text-6xl">Professional Development</h1>
            </div>
            <div className="text-left ml-70 mr-60 mt-10">
                <h1 className="font-bold text-4xl">Contextualised PD to Share & Learn Best Practices</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>CHIREC recognises that our teachers must lead by example and provides numerous professional development opportunities to sharpen their existing skills and cultivate new ones. We train our faculty to be passionate about teaching and work together towards a collaborative, cohesive and wholesome education.</p>
                <p className='mt-5'>CHIREC has its own in-house professional development programme for teachers.</p>
                <p className='mt-5 font-bold'>We provide the latest training every month, focusing on the following five areas:</p>
                <div className="flex justify-around">
                    <div className="m-5">
                        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-10.png" alt="" className="mx-auto" />
                        <p className="text-center m-3">Curriculum & Pedagogy</p>
                    </div>
                    <div className="m-5">
                        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-2.png" alt="" className="mx-auto" />
                        <p className="text-center m-3">Educational Leadership</p>
                    </div>
                    <div className="m-5">
                        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-2-2.png" alt="" className="mx-auto" />
                        <p className="text-center m-3">Special Education</p>
                    </div>
                </div>
                <div className="flex justify-between ml-40 mr-40 mt-10">
                    <div className="m-5">
                        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-7-1.png" alt="" className="mx-auto" />
                        <p className="text-center m-3">Counselling & Human Development</p>
                    </div>
                    <div className="m-5">
                        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-3-2.png" alt="" className="mx-auto" />
                        <p className="text-center m-3">Human & Organisational Learning</p>
                    </div>
                </div>
                <p>All year round, CHIREC conducts in-school and online professional development workshops, providing teachers opportunities to attend reputed conferences such as the IB World Conference and Connected Learning. We invite in-house and industry experts to guide our teachers in the latest teaching practices and global education standards.</p>
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Decor-1.png" alt="" className='mx-auto' />
                <h1 className="font-bold text-4xl">We are an Authorised Centre for Cambridge Certification!</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>CHIREC is the first school in Andhra Pradesh and Telangana to be authorised as a Centre for Cambridge Certification Programme in two categories – Teaching & Learning and Educational Leadership.</p>
                <p>Since 2020, we have been empowering teachers in the classroom while allowing them to customise practices suitable for their social, cultural, and educational context.</p>
                <p className='font-bold pt-5'>The Cambridge PDQs help practicing teachers and educational leaders to:</p>
                <div className='flex pt-5'>
                    <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                    <p>Engage critically with relevant educational thinking and international best practices</p>
                </div>
                <div className='flex pt-5'>
                    <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                    <p>Apply new ideas and approaches in their practice</p>
                </div>
                <div className='flex pt-5'>
                    <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                    <p>Reflect on and share experiences and outcomes to plan further development</p>
                </div>
                <div className='flex pt-5'>
                    <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                    <p>Improve the quality of their students’ learning</p>
                </div>
                <div className='flex pt-5'>
                    <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                    <p>Apply new ideas and approaches in their practice</p>
                </div>
                <div className='flex pt-5'>
                    <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                    <p>Apply new ideas and approaches in their practice</p>
                </div>
                <p className='font-bold pt-5'>These helps schools to:</p>
                <div className='flex pt-5'>
                    <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                    <p>Access quality accredited professional development programmes locally that are cost-effective and meet individual and school needs</p>
                </div>
                <div className='flex pt-5'>
                    <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                    <p>Establish and nurture school-based professional learning communities</p>
                </div>
                <div className='flex pt-5'>
                    <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                    <p>Promote continuing and collaborative professional learning in school life and culture</p>
                </div>
                <div className='flex pt-5'>
                    <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                    <p>Ensure that professional development is planned, experienced, and evaluated as an integral part of school development</p>
                </div>
                <p className='font-bold text-4xl pt-5'>Latest Trainings at CHIREC</p>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <div className='grid grid-cols-3'>
                    <div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Framing Inquiry Questions</p>
                        </div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Notebook Correction and Maintenance</p>
                        </div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Cambridge Learner and Teacher Attributes</p>
                        </div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>POSH - Prevention of Sexual Harassment</p>
                        </div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Etiquette in Communication</p>
                        </div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Learning Spectrum</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Writing Reflections for Project-based Learning</p>
                        </div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Active Learning</p>
                        </div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Smart Parenting and Teaching</p>
                        </div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Learning Disabilities</p>
                        </div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Learning Spectrum</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Digital Trends in Classroom</p>
                        </div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Improved Learning Objectives</p>
                        </div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>POCSO Act – Good Touch, Bad Touch</p>
                        </div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Inclusive Education</p>
                        </div>
                        <div className='flex pt-5'>
                            <IoIosStarOutline className='mr-1 text-green-400 text-xl' />
                            <p>Intelligent Interactive Panel for Education</p>
                        </div>
                    </div>
                </div>
            </div>
            <BFooter/>
            <Footer/>
        </div>
    )
}

import React from 'react'
import { Navbar } from '../components/Navbar'
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { BFooter } from '../components/BFooter';
import { Footer } from '../components/Footer';

const OurWorkCulture = () => {
  return (
    <div>
        <Navbar/>
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/06/IMG_0533-new.jpg" alt="" className='h-130 mt-30 w-full' />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <h1 className="font-bold text-6xl">Our Work Culture</h1>
            </div>
            <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-20 pt-3">
            <p className="m-10 pb-10 text-xl">With a legacy of 35 years, CHIREC stands as a leading K-12 school in India, where change is constant. We continuously strive to improve our work culture, providing staff members with the facilities and opportunities to grow and making them feel safe and cared for at their workplace.</p>
        </div>
        <h1 className='text-center text-4xl font-bold'>
        What Makes us a Great Place to work</h1>
        <div className="flex justify-between ml-40 mr-40 mt-10">
            <div className="m-5">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-2.png" alt="" className="mx-auto"/>
                <h1 className='text-center font-bold m-2'>Staff Welfare</h1>
                <p className="text-center">Fostering a culture of care by going beyond staff’s professional needs to ensure they feel safe, secure and well.</p>
            </div>
            <div className="m-5">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-11.png" alt="" className="mx-auto" />
                <h1 className='text-center font-bold m-2'>Growth Opportunities</h1>
                <p className="text-center">Providing numerous national and international professional development opportunities to grow.</p>
            </div>
            <div className="m-5">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon3.png" alt="" className="mx-auto" />
                <h1 className='text-center font-bold m-2'>Culture of Innovation</h1>
                <p c
                lassName="text-center">Creating an inspiring environment to work by adopting latest technologies, infrastructure and innovative programmes</p>
            </div>
            <div className="m-5">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-7-1.png" alt="" className="mx-auto" />
                <h1 className='text-center font-bold m-2'>Strong Leadership</h1>
                <p className="text-center">Bringing rich and diverse experiences along with an ability to take CHIREC to greater heights.</p>
            </div>
        </div>
        <div className="ml-90 mr-90 mt-10">
            <h1 className='font-bold'>In a campus where 100% of staff members are vaccinated, health & safety is a top priority; we always ensure to nurture a culture of care within our community. We are committed to providing our staff with benefits and support by way of:</h1>
            <div className='grid grid-cols-2 mt-10'>
                <div>
                    <div className='flex m-3'>
                        <IoIosStarOutline className='text-green-400 m-1'/>
                        <p>Competitive salary packages</p>
                    </div>
                    <div className='flex m-3'>
                        <IoIosStarOutline className='text-green-400 m-1'/>
                        <p>Medical insurance for staff and family</p>
                    </div>
                    <div className='flex m-3'>
                        <IoIosStarOutline className='text-green-400 m-1'/>
                        <p>Accident insurance</p>
                    </div>
                    <div className='flex m-3'>
                        <IoIosStarOutline className='text-green-400 m-1'/>
                        <p>Term life insurance</p>
                    </div>
                    <div className='flex m-3'>
                        <IoIosStarOutline className='text-green-400 m-1'/>
                        <p>All statutory benefits</p>
                    </div>
                </div>
                <div>
                    <div className='flex m-3'>
                        <IoIosStarOutline className='text-green-400 m-1'/>
                        <p>Medical checkups</p>
                    </div>
                    <div className='flex m-3'>
                        <IoIosStarOutline className='text-green-400 m-1'/>
                        <p>Rewards and recognition</p>
                    </div>
                    <div className='flex m-3'>
                        <IoIosStarOutline className='text-green-400 m-1'/>
                        <p>Staff events and festival celebrations</p>
                    </div>
                    <div className='flex m-3'>
                        <IoIosStarOutline className='text-green-400 m-1'/>
                        <p>Complimentary lunch and transport facilities</p>
                    </div>
                </div>
            </div>
        </div>
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Decor.png" alt="" className='mx-auto' />
        <h1 className='font-bold ml-90 mr-90 mt-10'>CHIREC also recognises that our staff must lead by example and provide numerous professional development opportunities to grow. Some of the current opportunities are:</h1>
        <div className="flex justify-between ml-40 mr-40 mt-10">
            <div className="m-5">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/image-22.png" alt="" className="mx-auto"/>
                <p className="text-center m-3">Training Centre for Cambridge International Certificate and Diploma in Teaching and Learning</p>
            </div>
            <div className="m-5">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/image-1.png" alt="" className="mx-auto" />
                <p className="text-center m-3">Fellowship programme with University College of London</p>
            </div>
            <div className="m-5">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/image-1-1.png" alt="" className="mx-auto" />
                <p className="text-center m-3">International Collaboration with Cognita Schools around the world</p>
            </div>
            <div className="m-5">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/Careers-Page-Graphics1-181x62.png" alt="" className="mx-auto" />
                <p className="text-center m-3">CogCon Regional Professional Development Conference</p>
            </div>
        </div>
        <div className='ml-90 mr-90 mt-10'>
            <p>As a well-established school, we know the key to success is continuously innovating to strive to stay ahead of the curve. Through the latest technological practices, continuous professional development and an eager attitude, we nurture a community of future-ready students.</p>
            <p className='mt-5'>CHIREC’s diverse leadership team comes with international expertise and a deep understanding of the local educational context to provide students and teachers with the support they need to grow. To know more, please visit our School Leadership section.</p>
            <Link to='/what-we-stand-for'>
                        <button type="button" className="text-gray-900 mt-5 bg-white border border-red-500 focus:outline-none
                            focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white
                            dark:border-red-500 dark:bg-red-500 dark:focus:ring-red-500 dark:hover:bg-blue-500 dark:hover:border-blue-500">
                            READ MORE
                        </button>
                    </Link>
        </div>
        <BFooter/>
        <Footer/>
    </div>
  )
}

export default OurWorkCulture
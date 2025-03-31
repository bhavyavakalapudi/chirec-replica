import React from 'react'
import { Navbar } from '../components/Navbar'
import { BFooter } from '../components/BFooter'
import { Footer } from '../components/Footer'

const NewsLetters = () => {
    return (
        <div>
            <Navbar />
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/06/IMG_0533-new.jpg" alt="" className='h-130 mt-30 w-full' />
            <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <h1 className="font-bold text-6xl">Newsletters</h1>
            </div>
            <div className='m-10'>
                <p>Our newsletters bring you highlights from all four CHIREC campuses—Kondapur, Jubilee Hills, Gachibowli, and Serilingampally. From student achievements to important updates, we keep you informed and engaged with the exciting happenings across the CHIREC community.</p>
                <div className='flex ml-30 mr-30 justify-around'>
                    <div className='m-10'>
                        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-8.png" alt="" className='mx-auto'/>
                        <button type="button" className="text-gray-900 m-5 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
                        focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:text-white dark:text-blue-500
                        dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:focus:ring-blue-500">
                            Jubliee Hills
                        </button>
                    </div>
                    <div className='m-10'>
                        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-8.png" alt="" className='mx-auto'/>
                        <button type="button" className="text-gray-900 m-5 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
                        focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:text-white dark:text-blue-500
                        dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:focus:ring-blue-500">
                            Gachibowli
                        </button>
                    </div>
                    <div className='m-10'>
                        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-8.png" alt="" className='mx-auto'/>
                        <button type="button" className="text-gray-900 m-5 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
                        focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:text-white dark:text-blue-500
                        dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:focus:ring-blue-500">
                            Kondapur
                        </button>
                    </div>
                    <div className='m-10'>
                        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-8.png" alt="" className='mx-auto'/>
                        <button type="button" className="text-gray-900 m-5 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
                        focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:text-white dark:text-blue-500
                        dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:focus:ring-blue-500">
                            Serilingampally
                        </button>
                    </div>
                </div>
            </div>
            <BFooter/>
            <Footer/>
        </div>
    )
}

export default NewsLetters
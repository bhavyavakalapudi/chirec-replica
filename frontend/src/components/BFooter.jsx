import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaPhone } from 'react-icons/fa';
import { LuMapPin } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";

export const BFooter = () => {
    return <div>
        <div className="bg-blue-600 mt-7 mb-7">
            <div className="grid place-items-center text-white m-3">
                <h1 className="font-bold text-4xl mt-7">We are here to help</h1>
                <p className="mt-7">Choosing the right school is an important step in your child's future</p>
            </div>
            <div className="flex justify-center">
                <div className="mb-7 mt-7">
                    <button type="button" className="text-gray-900 bg-white border border-red-500 focus:outline-none
                    focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-blue-600
                    dark:border-white dark:bg-white dark:focus:ring-white dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-white">
                        ENQUIRE US
                    </button>
                    <button type="button" className="text-gray-900 bg-white border border-red-500 focus:outline-none
                    focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white
                    dark:border-red-500 dark:bg-red-500 dark:focus:ring-red-500 dark:hover:bg-blue-500 dark:hover:border-blue-500">
                        CONTACT US
                    </button>
                </div>
            </div>
        </div>
        <div className="flex justify-around">
            <div className="h-40 rounded-lg w-70">
                <h3 className="text-blue-600 flex justify-center mt-10">Hyderabad's</h3>
                <h1 className="text-blue-600 font-bold text-6xl flex justify-center"># 1</h1>
            </div>
            <div className="bg-white h-40 rounded-lg w-70">
                <h3 className="text-blue-600 flex justify-center mt-10">Telengana's</h3>
                <h1 className="text-blue-600 font-bold text-6xl flex justify-center"># 1</h1>
            </div>
            <div className="bg-white h-40 rounded-lg w-70 pl-2">
                <h3 className="text-blue-600 flex justify-center mt-10">India's</h3>
                <h1 className="text-blue-600 font-bold text-6xl flex justify-center"># 7</h1>
            </div>
        </div>
        <p className="text-center mb-6">*EducationWorld India School Rankings 2024-25: Co-Ed and International Day School Rankings</p>

        <footer className="bg-white dark:bg-gray-100">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="px-4 py-6 lg:py-8 lg: grid grid-cols-6">
                    <div className="mb-6 md:mb-0">
                        <a href="" className="flex items-center">
                            <img src="CHIREC1.webp" className="h-8" alt="FlowBite Logo" />
                        </a>
                    </div>
                    <div>
                        <h2 className="mb-6 font-semibold">Quick Links</h2>
                        <hr className="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class=" hover:underline">Academic Calender</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">Why CHIREC?</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">What we stand for</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">Our Cognita Family</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">School Awards</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">Student Care & Safeguarding</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">Your Child's Journey</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">Day Care</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 font-semibold">Read More</h2>
                        <hr className="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">Preschool</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">Primary Years</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">Secondary</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">Senior Secondary</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">Learning Support</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">Career Guidance</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">Our Character Compass</a>
                            </li>
                            <li className="mb-4 flex">
                                <MdArrowOutward className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="#" class="hover:underline">Activities & Programmes</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 font-semibold">Contact Info</h2>
                        <hr className="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                        <ul className="text-gray-600 font-medium">
                            <li className="mb-4 flex">
                                <FaPhone className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="tel:040-44760999" class="hover:underline">040-44760999</a>
                            </li>
                            <li className="mb-4 flex">
                                <CiMail className="font-bold m-1 text-blue-600 hover:text-blue-800" />
                                <a href="mailto:office.kp@chirec.ac.in" class="hover:underline">office.kp@chirec.ac.in</a>
                            </li>
                            <li className="mb-4 flex">
                                <LuMapPin className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="https://shorturl.at/4nz9S" class="hover:underline">Kondapur Campus</a>
                            </li>
                            <li className="mb-4 flex">
                                <LuMapPin className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="https://shorturl.at/ul78g" class="hover:underline">Gachibowli Campus</a>
                            </li>
                            <li className="mb-4 flex">
                                <LuMapPin className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="https://shorturl.at/ul78g" class="hover:underline">Jublie Hills Campus</a>
                            </li>
                            <li className="mb-4 flex">
                                <LuMapPin className="text-blue-600 m-1 hover:text-blue-800" />
                                <a href="https://shorturl.at/ul78g" class="hover:underline">Serilingampalli Campus</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-2'>
                        <div className="flex md:justify-around">
                            <button type="button" className="text-gray-900 bg-white border border-red-500 focus:outline-none
                                focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white
                                dark:border-red-500 dark:bg-red-500 dark:focus:ring-red-500 dark:hover:bg-blue-500 dark:hover:border-blue-500">
                                CONTACT US
                            </button>
                            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
                                focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:text-white dark:text-blue-500
                                dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:focus:ring-blue-500">
                                CAREERS
                            </button>
                            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
                                focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:text-white dark:text-blue-500
                                dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:focus:ring-blue-500">
                                LOG IN
                            </button>
                        </div>
                        <h2 className="mb-6 mt-6 text-xl ml-4 font-semibold md:text-center lg:text-start">Follow Us</h2>
                        <div className='flex lg:justify-between justify-center ml-4'>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-blue-600 hover:text-blue-800 text-3xl md:mr-3" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-blue-400 hover:text-blue-600 text-3xl md:mr-3" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-pink-500 hover:text-pink-700 text-3xl md:mr-3" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="text-red-500 hover:text-pink-700 text-3xl md:mr-3" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-600 hover:text-blue-800 text-3xl md:mr-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
}

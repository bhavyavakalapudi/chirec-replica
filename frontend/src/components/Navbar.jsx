import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return <div>
        <nav className="fixed top-0 left-0 w-full bg-white shadow-xl">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/CHIREC1.webp" className="h-10 w-full" alt="" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                </a>
                <div>
                    <Link to='/'>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
                        focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:text-white dark:text-blue-500
                        dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:focus:ring-blue-500">
                            LOG IN
                        </button>
                    </Link>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
                    focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:text-white dark:text-blue-500
                    dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:focus:ring-blue-500">
                        ENQUIRE NOW
                    </button>
                    <Link to='/contact-us'>
                        <button type="button" className="text-gray-900 bg-white border border-red-500 focus:outline-none
                            focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white
                            dark:border-red-500 dark:bg-red-500 dark:focus:ring-red-500 dark:hover:bg-blue-500 dark:hover:border-blue-500">
                            CONTACT US
                        </button>
                    </Link>
                </div>
                <svg class="h-10 w-10 text-red-500 border-2 border-red-500 rounded-lg p-2" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>

            {/* NAVBAR SECOND COMPONENT STARTS */}

            <div className="p-2 flex justify-end" id="navbar-default">
                <div className="relative inline-block text-sm text-left group">
                    <div>
                        <button type="button" className="hover:cursor-pointer inline-flex justify-end w-full   px-4 py-2 text-sm font-medium text-gray-700">
                            WHY CHOOSE US
                        </button>
                    </div>

                    <div className="hover:cursor-pointer absolute mt-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity text-black rounded shadow-lg w-48 origin-top-left left-0 z-10 duration-200">
                        <ul className="py-1">
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/why-chirec'>
                                    Why CHIREC?
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/what-we-stand-for'>
                                    What We Stand For
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/school-awards'>
                                    School Awards
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/studentcare-safeguarding'>
                                    Student Care & Safeguarding
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/our-cognita-family'>
                                    Our Cognita Family
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative inline-block text-left group">
                    <div>
                        <button type="button" className="inline-flex justify-end w-full   px-4 py-2 text-sm font-medium text-gray-700">
                            ACADEMIC EXCELLENCE
                        </button>
                    </div>

                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-48 mt-2 origin-top-left left-0 z-10">
                        <ul className="py-1">
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Learning at CHIREC
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Learning Support
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Career Guidance
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative inline-block text-left group">
                    <div>
                        <button type="button" className="inline-flex justify-end w-full   px-4 py-2 text-sm font-medium text-gray-700">
                            HOLISTIC DEVELOPMENT
                        </button>
                    </div>

                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-48 mt-2 origin-top-left left-0 z-10">
                        <ul className="py-1">
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Our Character Compass
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Acativities & Programmes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Indian & Global Citizenship
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Innovation hub
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Student Achievements
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative inline-block text-left group">
                    <div>
                        <button type="button" className="inline-flex justify-end w-full   px-4 py-2 text-sm font-medium text-gray-700">
                            OUR SCHOOLS
                        </button>
                    </div>

                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-48 mt-2 origin-top-left left-0 z-10">
                        <ul className="py-1">
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Jubliee Hills (Preschool)
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Gachibowli (Preschool)
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Kondapur (CBSE)
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Serilingampalli (Cambridge & IBDP)
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative inline-block text-left group">
                    <div>
                        <button type="button" className="inline-flex justify-end w-full   px-4 py-2 text-sm font-medium text-gray-700">
                            ADMISSIONS
                        </button>
                    </div>

                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-48 mt-2 origin-top-left left-0 z-10">
                        <ul className="py-1">
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Apply Now
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Admission Process
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Payment Process
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    FAQS
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative inline-block text-left group">
                    <div>
                        <button type="button" className="inline-flex justify-end w-full   px-4 py-2 text-sm font-medium text-gray-700">
                            WORK WITH US
                        </button>
                    </div>

                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-48 origin-top-left left-0 z-10">
                        <ul className="py-1">
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Our Work Culture
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Job Vacancies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Professional Development
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative inline-block text-left group">
                    <div>
                        <button type="button" className="inline-flex justify-end w-full px-4 py-2 text-sm font-medium text-gray-700">
                            OTHERS
                        </button>
                    </div>

                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-48 mt-2 origin-top-left left-0 z-10">
                        <ul className="py-1">
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Newsletters
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Alumni
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    School Events
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Student journals
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative inline-block text-left group">
                    <div>
                        <button type="button" className="inline-flex justify-end w-full   px-4 py-2 text-sm font-medium text-gray-700">
                            MANDATORY PUBLIC DISCLOSURE
                        </button>
                    </div>
                </div>

            </div>
        </nav>
    </div>
}
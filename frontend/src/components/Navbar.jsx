import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Link } from 'react-router-dom';
import { PiGreaterThanThin } from "react-icons/pi";
import { RxExternalLink } from "react-icons/rx";

export const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return <div>
        <nav className="top-0 left-0 w-full bg-white shadow-xl">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
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
                        <button type="button" className="hover:cursor-pointer inline-flex justify-end w-full px-4 py-2 text-sm font-medium text-gray-700">
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

                <div className="relative inline-block text-sm text-left group">
                    <div>
                        <button type="button" className="hover:cursor-pointer inline-flex justify-end w-full   px-4 py-2 text-sm font-medium text-gray-700">
                            ACADEMIC EXCELLENCE
                        </button>
                    </div>

                    <div className="hover:cursor-pointer absolute mt-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity text-black rounded shadow-lg w-full origin-top-left left-0 z-10 duration-200">
                        <ul className="py-1">
                            <li>
                                <div className="relative inline-block text-sm text-left group hover:bg-blue-200">
                                    <div className="flex">
                                        <button type="button" className="hover:cursor-pointer inline-flex justify-end text-sm font-medium text-gray-700 px-4 py-2 ">
                                            Learning at CHIREC
                                        </button>
                                        <PiGreaterThanThin className="mt-2.5 ml-5" />
                                    </div>
                                    <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                                        <ul className="py-1">
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/your-childs-journey'>
                                                    Your Child's Journey
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    DayCare
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Preschool
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Primary
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Secondary
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Senior Secondary
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/learning-support'>
                                    Learning Support
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/career-guidance'>
                                    Career Guidance
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative group">
                    <button type="button" className="hover:cursor-pointer px-4 py-2 text-sm font-medium text-gray-700">
                        HOLISTIC DEVELOPMENT
                    </button>

                    <div className="cursor-pointer absolute bg-white shadow-lg rounded-md w-48 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ul className="py-1">
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/our-character-compass'>
                                    Our Character Compass
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className=" px-4 py-2 text-sm" to='/activities-programmes'>
                                    Activities & Programmes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/indian-global-citizenship'>
                                    Indian & Global Citizenship
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/innovation-hub'>
                                    Innovation hub
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/student-achievements'>
                                    Student Achievements
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative group">
                    <button type="button" className="hover:cursor-pointer px-4 py-2 text-sm font-medium text-gray-700">
                        OUR SCHOOLS
                    </button>
                    <div className="cursor-pointer absolute bg-white shadow-lg rounded-md w-48 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ul className="py-1">
                            <li>
                                <div className="relative inline-block text-sm text-left group hover:bg-blue-200">
                                    <div className="flex">
                                        <button type="button" className="hover:cursor-pointer inline-flex justify-end text-sm font-medium text-gray-700 px-4 py-2 ">
                                            Jubliee Hills (PreSchool)
                                        </button>
                                        <PiGreaterThanThin className="mt-2.5 ml-5" />
                                    </div>
                                    <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                                        <ul className="py-1">
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/your-childs-journey'>
                                                    Head's Welcome
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Curriculum & Grades
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Campus
                                                </NavLink>
                                            </li>
                                            <li>
                                                <div className="flex">
                                                    <NavLink className="block px-4 py-2 text-sm" to='/contact-us'>
                                                        Enquire Now
                                                    </NavLink>
                                                    <RxExternalLink />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="relative inline-block text-sm text-left group hover:bg-blue-200">
                                    <div className="flex">
                                        <button type="button" className="hover:cursor-pointer inline-flex justify-end text-sm font-medium text-gray-700 px-4 py-2 ">
                                            Gachibowli (PreSchool)
                                        </button>
                                        <PiGreaterThanThin className="mt-2.5 ml-5" />
                                    </div>
                                    <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                                        <ul className="py-1">
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/your-childs-journey'>
                                                    Head's Welcome
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Curriculum & Grades
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Campus
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Primary
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="relative inline-block text-sm text-left group hover:bg-blue-200">
                                    <div className="flex">
                                        <button type="button" className="hover:cursor-pointer inline-flex justify-end text-sm font-medium text-gray-700 px-4 py-2 ">
                                            Kondapur (CBSE)
                                        </button>
                                        <PiGreaterThanThin className="mt-2.5 ml-5" />
                                    </div>
                                    <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                                        <ul className="py-1">
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/your-childs-journey'>
                                                    Head's Welcome
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Curriculum & Grades
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Campus
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Primary
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="relative inline-block text-sm text-left group hover:bg-blue-200">
                                    <div className="flex">
                                        <button type="button" className="hover:cursor-pointer inline-flex justify-end text-sm font-medium text-gray-700 px-4 py-2 ">
                                            Serilingampalli (Cambridge & IBDP)
                                        </button>
                                        <PiGreaterThanThin className="mt-2.5 ml-5" />
                                    </div>
                                    <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                                        <ul className="py-1">
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/your-childs-journey'>
                                                    Head's Welcome
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Curriculum & Grades
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Campus
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                                    Primary
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* <div className="relative inline-block text-left group">
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
                </div> */}

                <div className="relative group">
                    <button type="button" className="hover:cursor-pointer px-4 py-2 text-sm font-medium text-gray-700">
                        ADMISSIONS
                    </button>

                    <div className="cursor-pointer absolute bg-white shadow-lg rounded-md w-48 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ul className="py-1">
                            <li>
                                <div className="flex">
                                    <NavLink className="block px-4 py-2 text-sm" to='/contact-us'>
                                        Apply Now
                                    </NavLink>
                                    <RxExternalLink />
                                </div>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/admission-process'>
                                    Admission Process
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/payment-process'>
                                    Payment Process
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/faqs'>
                                    FAQ's
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative group">
                    <button type="button" className="hover:cursor-pointer px-4 py-2 text-sm font-medium text-gray-700">
                        WORK WITH US
                    </button>

                    <div className="cursor-pointer absolute bg-white shadow-lg rounded-md w-48 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ul className="py-1">
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/our-work-culture'>
                                    Our Work Culture
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className=" px-4 py-2 text-sm" to='/job-vacancies'>
                                    Job Vacancies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/professional-development'>
                                    Professional Development
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative group">
                    <button type="button" className="hover:cursor-pointer px-4 py-2 text-sm font-medium text-gray-700">
                        OTHERS
                    </button>

                    <div className="cursor-pointer absolute bg-white shadow-lg rounded-md w-48 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ul className="py-1">
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className=" px-4 py-2 text-sm" to='/newletters'>
                                    News Letters
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/alumni'>
                                    Alumni
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/'>
                                    School Events
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block px-4 py-2 text-sm" to='/student-journals'>
                                    Student Journals
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div className="relative inline-block text-left group">
                    <div>
                        <Link to='https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Mandatory-Disclosure-2024.pdf'>
                            <button type="button" className="inline-flex justify-end w-full   px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer">
                                MANDATORY PUBLIC DISCLOSURE
                            </button>    
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
}
import { useState } from "react"
import { Navbar } from "./Navbar"
import { IoIosPhonePortrait } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaRegMap } from "react-icons/fa6";
import { BFooter } from "./BFooter";
import { Footer } from "./Footer";

export const Contact = () => {
    const [isYesOpen, setYesOpen] = useState(false)

    const [isNoOpen, setNoOpen] = useState(false)

    return <div>
        <Navbar />
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Contact-Us-1.png" alt="" />
        <div className="flex items-center justify-center h-50 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-4xl">Contact Us</h1>
        </div>
        <div className="text-center m-5">
            <p>Help us direct your enquiry by selecting an option below</p>
            <p>Does your enquiry relate to admissions?</p>
            <div className="m-5">
                <button className="px-6 py-2 mr-3 bg-gray-100 rounded-lg mb-4 hover:cursor-pointer" onClick={() => {
                    setYesOpen(true)
                    setNoOpen(false)
                }}>YES</button>
                <button className="px-6 py-2 bg-gray-100 rounded-lg mb-4 hover:cursor-pointer" onClick={() => {
                    setNoOpen(true)
                    setYesOpen(false)
                }}>NO</button>
            </div>
        </div>
        {isYesOpen && (
            <div className="grid grid-cols-2">
                <form class="m-5 border-1 rounded-lg">
                    <div className="m-10">
                        <h1 className="font-bold">Get In Touch</h1>
                        <div className="flex">
                            <p className="text-red-500">*</p>
                            <p className="text-gray-600">indicates required fields</p>
                        </div>
                        <div class="mb-5">
                            <label for="email" class="block mt-6 mb-2 font-semibold text-sm text-gray-900 dark:text-black">Parent Information</label>
                            <div className="flex">
                                <input type="email" id="email" class="shadow-xs mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter first name" required />
                                <input type="email" id="email" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter last name" required />
                            </div>
                        </div>
                        <div class="mb-5 flex">
                            <div className="mr-8">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">EMAIL</label>
                                <input type="password" id="password" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="e.g: example@gmail.com" required />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">PHONE</label>
                                <input type="password" id="password" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter your phone number" required />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">COUNTRY</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Choose your country">

                                <option>Choose your country</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>United States</option>
                                <option>Germany</option>
                                <option>United States</option>

                            </select>
                        </div>

                        <div className="mb-5">
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Choose Campus</label>
                            <fieldset>
                                <legend class="sr-only">Countries</legend>

                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="country-option-1" class="block ms-2 text-sm font-medium text-gray-900">
                                        CHIREC SERILINGAMPALLY (ISRP)
                                    </label>
                                </div>

                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900">
                                        CHIREC KONDAPUR CAMPUS
                                    </label>
                                </div>

                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="countries" value="Spain" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900">
                                        CHIREC GACHIBOWLI PRESCHOOL
                                    </label>
                                </div>

                                <div class="flex items-center mb-4">
                                    <input id="country-option-4" type="radio" name="countries" value="United Kingdom" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="country-option-4" class="block ms-2 text-sm font-medium text-gray-900">
                                        CHIREC JUBLIE HILLS PRESCHOOL
                                    </label>
                                </div>
                            </fieldset>
                        </div>

                        <div className="mb-5">
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">PREFERRED CURRICULUM</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Choose your country">

                                <option>Choose an option</option>
                                <option>CBSE</option>
                                <option>IB</option>

                            </select>
                        </div>

                        <div className="mb-5">
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">SELECT GRADE</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Choose your country">

                                <option>Choose an option</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>

                            </select>
                        </div>

                        <div>
                            <form class="mb-5">
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">DESCRIPTION</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a description..."></textarea>
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">0 to 600 max characters</label>

                            </form>
                        </div>

                        {/* <div class="flex items-start mb-5">
                            <div class="flex items-center h-5">
                                <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                        </div> */}
                        <button type="submit" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">SUBMIT</button>
                    </div>
                </form>
                <div className="m-5">
                    <p className="border-1 w-40 text-center rounded-lg">Cambridge | IBDP</p>
                    <h1 className="font-bold mt-5 text-3xl">You can contact us in the following ways as well:</h1>
                    <ul>
                        <li className="mb-4 mt-4 flex">
                            <IoIosPhonePortrait className="text-blue-600 m-1 hover:text-blue-800 hover:cursor-pointer" />
                            <a href="tel:9154140312" className="hover:underline">9154140312</a>
                        </li>
                        <li className="mb-4 mt-4 flex hover:cursor-pointer">
                            <IoIosPhonePortrait className="text-blue-600 m-1 hover:text-blue-800" />
                            <a href="tel:9154984903" className="hover:underline">9154984903</a>
                        </li>
                        <li className="mb-4 flex">
                            <CiMail className="font-bold m-1 text-blue-600 hover:text-blue-800" />
                            <a href="mailto:admissions@chirec.ac.in" className="hover:cursor-pointer">admissions@chirec.ac.in</a>
                        </li>
                        <li className=" flex">
                            <FaRegMap className="font-bold m-1 text-blue-600 hover:text-blue-800" />
                            <a href="mailto:admissions@chirec.ac.in" className="hover:cursor-pointer text">
                                CHIREC Serilingampally Campus, Survey No 73,  </a>

                        </li>
                        <li className="ml-5">
                            Behind Candure Marketing Office,Surdarshan Nagar, Gachibowli, Serilingampally, Hyderabad - 500133, Telengana, India
                        </li>
                    </ul>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.6227248045147!2d78.33215947554302!3d17.477762483424858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb939445dac8ed%3A0x8cbe499e963067c5!2sCHIREC%20International%20School%20-%20IBDP%20%26%20Cambridge%20Campus!5e0!3m2!1sen!2sin!4v1742482208531!5m2!1sen!2sin"
                        width="600" height="450" className="mt-10" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        )}
        {isNoOpen && (
            <div className="text-center">
                <p>For any other enquiries not pertaining to admissions, please feel free to email us.</p>
                <p>Contact Details:</p>
                <div className="grid grid-cols-2 bg-gray-100 m-5">
                    <p>Kondapur Campus – office.kp@chirec.ac.in</p>
                    <p>Jubilee Hills Campus – office.jh@chirec.ac.in</p>
                    <p>Serilingampally (ISRP) Campus – office.isrp@chirec.ac.in</p>
                    <p>Gachibowli Campus – office.gb@chirec.ac.in</p>
                </div>
            </div>
        )}
        <BFooter />
        <Footer />
    </div>
}
import { useState } from "react";
import { Navbar } from "../components/Navbar"
import { Link } from 'react-router-dom';
import { BFooter } from "../components/BFooter";
import { Footer } from "../components/Footer";

export const WhatWeStandFor = () => {
    const images = [
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/1-1.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/3-4.webp',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/2-2.png'
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return <div>
        <Navbar />
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Images-1.jpg" alt="" className="h-130 mt-30" />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-4xl">What We Stand For</h1>
        </div>
        <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-20">
            <p className="m-10 p-7">CHIREC’s teaching and learning across the curriculum, both inside and outside the classroom, are directed by our interlinked guiding statements.  Everything we do – from lesson planning, the care of your child, health and safety policies, and the activities we offer – are all infused with these principles.</p>
        </div>
        <div>
            <h1 className="text-center font-bold text-2xl">Our Vision</h1>
            <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p className="mt-5 mr-50 ml-50 mb-10">
                At CHIREC International, we envision an inspiring international school community of thriving, high-achieving critical thinkers, collaborative lifelong learners and compassionate human beings who embrace their role as responsible citizens, dedicated to the common good and to furthering equity, tolerance, democracy, peace, and sustainability in India and across the world.
            </p>
            <h1 className="text-center font-bold text-2xl">Our Mission</h1>
            <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <div className="grid grid-cols-3 ml-10 mr-10">
                <div className="m-10">
                    <div className="flex justify-center items-center mb-3">
                        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon.png" alt="" className="" />
                    </div>
                    <h1 className="text-center font-bold">Empower</h1>
                    <p className="text-center">young individuals to confront global challenges with confidence and high-order skills, which they acquire through innovative learning and cutting-edge technology. We are committed to instilling the values and mindsets of independent, engaged, and thoughtful world citizens.</p>
                </div>
                <div className="m-10">
                    <div className="flex justify-center items-center mb-3">
                        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon2.png" alt="" />
                    </div>
                    <h1 className="text-center font-bold">Nurture</h1>
                    <p className="text-center">the innate potential of all our students through rich academic and co-curricular programmes. Our aim is to help them grow into focused yet open-minded individuals, characterised by their duty, ethics, care, health, and overall flourishing. We encourage our students to set their own goals and surpass them.</p>
                </div>
                <div className="m-10">
                    <div className="flex justify-center items-center mb-3">
                        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon3.png" alt="" />
                    </div>
                    <h1 className="text-center font-bold">Go Beyond</h1>
                    <p className="text-center">our commitment to academic rigour and excellence to offer our students manifold other opportunities for transformative growth in fields such as visual and performing arts, sports, community service, and participation in international events.</p>
                </div>
            </div>
            <div className="relative w-100 m-20 mx-auto">
                <img
                    src={images[currentIndex]}
                    alt=""
                    className="object-cover transition-transform duration-300"
                />

                {/* Navigation Buttons */}
                <button
                    onClick={prevImage}
                    className="hover:cursor-pointer absolute top-1/2 left-0 transform -translate-y-1/2 bg-opacity-50 text-blue-500 p-2 rounded-full focus:outline-none hover:bg-opacity-75"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextImage}
                    className="hover:cursor-pointer absolute top-1/2 right-0 transform -translate-y-1/2 bg-opacity-50 text-blue-500 p-2 rounded-full focus:outline-none hover:bg-opacity-75"
                >
                    &#10095;
                </button>
            </div>
        </div>
        <div>
            <h1 className="text-center font-bold text-2xl">Our Philosophy</h1>
            <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p className="mt-5 mr-50 ml-50 mb-10">
                We believe in the power of education to change individuals and whole societies for the better. Our educational philosophy is dedicated to educating ‘The Whole Child’ through a comprehensive framework that develops key areas essential for shaping a balanced and well-rounded personality. Our holistic system of learning sets quality benchmarks that prepare our students for success in navigating a dynamic, volatile, and ever-changing world.
            </p>
            <p className="ml-50 mr-50">
                CHIREC International is your gateway to a world-class education and an enriching experience in the Indian international school landscape.
            </p>
            <div className="flex justify-center m-10">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Decor-1.png" alt="" />
            </div>
            <h1 className="text-center font-bold text-2xl">School Leadership</h1>
            <h1 className="text-center font-bold text-2xl mt-20">The Founder</h1>
            <div className="flex mt-5 mr-50 ml-50 mb-10">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/dsad.png" alt="" className="rounded-full m-10 w-50 h-50" />
                <div className="m-10">
                    <h2>Ms.Ratna Reddy</h2>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>
                        With over 30 years of experience in education, Ms. Ratna Reddy is an accomplished and visionary educationist who pioneered new-age education in Hyderabad. Over three decades, Ms. Reddy took the school from its inception as The Children’s Recreation Center and CHIREC Preschool in 1989 to its status as one of India’s premiere K-12 educational institutions in 2018. During that time, CHIREC nurtured many thousands of global citizens who are now changing the world for the better in India and abroad.
                    </p>
                    <Link to='/'>
                        <button type="button" className="mt-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
                        focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:text-white dark:text-blue-500
                        dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:focus:ring-blue-500">
                            LEARN MORE
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <BFooter/>
        <Footer/>
    </div>
}
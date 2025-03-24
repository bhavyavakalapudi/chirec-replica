import { useState } from "react";
import { Navbar } from "./Navbar"
import { Footer } from "./Footer";
import { BFooter } from "./BFooter";
import { Link } from 'react-router-dom';

export const Home = () => {

    const images = [
        '/Award1.webp',
        '/CHIREC1.webp',
        '/CHIREC.png'
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    return <div>
        <Navbar />
        <div>
            <Link to='/'>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-200 hover:cursor-pointer" />
            </Link>
            <button onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600">
                <kbd class="rtl:rotate-180 inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                    <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                        <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
                    </svg>
                    <span class="sr-only">Arrow key left</span>
                </kbd>
            </button>
            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600">
                <kbd class="rtl:rotate-180 inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                    <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                        <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                    </svg>
                    <span class="sr-only">Arrow key right</span>
                </kbd>
            </button>
        </div>
        <div className="mt-5">
            <h1 className="flex justify-center font-bold text-4xl">CHIREC Ranks</h1>
            <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <div className="flex justify-around">
                <div className="bg-blue-500 h-40 rounded-lg w-70">
                    <h3 className="text-white flex justify-center mt-10">Hyderabad's</h3>
                    <h1 className="text-white font-bold text-6xl flex justify-center"># 1</h1>
                </div>
                <div className="bg-blue-500 h-40 rounded-lg w-70">
                    <h3 className="text-white flex justify-center mt-10">Telengana's</h3>
                    <h1 className="text-white font-bold text-6xl flex justify-center"># 1</h1>
                </div>
                <div className="bg-blue-500 h-40 rounded-lg w-70 pl-2">
                    <h3 className="text-white flex justify-center mt-10">India's</h3>
                    <h1 className="text-white font-bold text-6xl flex justify-center"># 7</h1>
                </div>
            </div>
            <div className="text-center">
                <p className="mt-7 text-2xl">
                    EducationWorld India School Rankings 2024-25
                </p>
                <h1 className="font-bold text-4xl mt-5">The CHIREC Story</h1>
                <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p className="text-left pl-50 pr-50">
                    CHIREC International School was founded in 1989 by Mrs. Ratna Reddy to address a gap in children’s education in Hyderabad. Originally conceived as a vibrant summer camp, CHIREC has evolved over three decades into the leading K-12 educational institution in the city and one of the highest-ranked schools in India.
                </p>
                <p className="text-left pl-50 pr-50 mt-3">
                    Our commitment to instilling a passion for lifelong learning and innovation sets CHIREC International School apart. We offer the CBSE, Cambridge and the IB Diploma Programme in one of the most dynamic cities globally. Our students consistently achieve some of the best academic results in the country and are well-prepared for top universities in India and abroad. As a valued member of the Cognita global group, and recognized by respected educational bodies like the Council of International Schools (CIS) and the IB Organization, CHIREC International School is known for its exceptional quality of education.
                </p>
                <p className="text-left pl-50 pr-50 mt-3">
                    Continuing our legacy of educational excellence, CHIREC International School is proud to receive authorisation as an IB World School for the Career-related Programme (CP). This esteemed certification highlights our commitment to providing a world-class education that seamlessly integrates academic rigour with practical learning, equipping our students with the skills and knowledge necessary for higher education and successful careers.
                </p>
                <div className="flex justify-center">
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/12/brand.png" alt="" className="" />
                </div>
                <p className="mt-7 text-2xl">
                    CHIREC International School, based in Hyderabad, Telangana
                </p>
                <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            </div>
            <div className="flex justify-center items-center my-8">
                <iframe className="w-full h-150 lg:pl-40 lg:pr-50 pl-10 pr-10" src="https://www.youtube.com/embed/bDGvyvyIjOk?si=FZHtBXMn-1a8bRYL" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>
            <div>
                <img src="CHIREC-2.png.webp" alt="" className="w-full h-120 pb-10" />
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-bold">From Nursery to University</h1>
                <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p className="text-left lg:pl-50 lg:pr-50 p-10">
                    At CHIREC International School, every step of your child’s learning journey is carefully curated with a holistic, globally-conscious, and immersive approach to education. This ensures that they enjoy the wonderful experiences of childhood, while building a strong academic foundation for lifelong success.</p>
            </div>
            <div className="lg:grid grid-cols-2 pl-50 pr-50 pt-10 place-items-center">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/New-GB-PP-1.png" alt="" className="rounded-lg w-100 h-70 md:pb-4" />
                <div className="lg:pl-3">
                    <p>PreSchool</p>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>In our Preschool programme, we nurture children’s curiosity and cultivate essential skills for inquiry and exploration. Our innovative, play-based curriculum focuses on developing strong reading, listening, and speaking skills, that foster a love of learning and a sense of wonder, that last a lifetime.</p>
                </div>
            </div>
            <div className="lg:grid grid-cols-2 pl-50 pr-50 pt-10 place-items-center">
                <div className="pr-3 md:mb-4">
                    <p>CBSE</p>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>
                        CHIREC International School’s CBSE programme provides a learning environment to develop confident, responsible, and enterprising citizens. Our integrated curriculum is built on The Whole Child concept and rigorous CBSE educational practices, making us one of the best CBSE Schools in India.
                    </p>
                </div>
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/D4A9569.jpg" alt="" className="rounded-lg w-100 h-70" />
            </div>
            <div className="lg:grid grid-cols-2 pl-50 pr-50 pt-10 place-items-center">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/Indian-Global-Citizenship-1.png" alt="" className="rounded-lg w-100 h-70 md:mb-4" />
                <div className="lg:pl-3">
                    <p>Cambridge</p>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>CHIREC International School is an award-winning CAIE school that has been affiliated with the University of Cambridge for over 15 years. We champion a hands-on, experiential learning approach, prioritizing an in-depth mastery of subjects, and the development of a global outlook.</p>
                </div>
            </div>
            <div className="lg:grid grid-cols-2 pl-50 pr-50 pt-10 place-items-center">
                <div className="pr-3 md:mb-4">
                    <p>IBDP</p>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>The IB Diploma Programme (DP) at CHIREC International School is a rigorous, challenging, and balanced two-year university-preparation programme for students aged 16 to 19. Our students consistently outperform world averages and gain admission to the best universities in India and around the world, making CHIREC one of India’s Top 10 International Schools for close to a decade.</p>
                </div>
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/D4A9349-1.jpg" alt="" className="rounded-lg w-100 h-70" />
            </div>
            <div className="flex justify-center m-15">
                <Link to='/contact-us'>
                <button type="button" className="text-gray-900 bg-white border border-red-500 hover:border-blue-600 focus:outline-none
                    focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white
                    dark:border-red-500 dark:bg-red-500 dark:focus:ring-red-500 dark:hover:bg-blue-500 dark:hover:border-blue-500">
                    CONTACT US
                </button>
                </Link>
            </div>
            <div className="flex justify-center">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Decor.png" alt=""  className="mb-15"/>
            </div>

        </div>
        <BFooter/>
        <Footer/>
    </div>
}
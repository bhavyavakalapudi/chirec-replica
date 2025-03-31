import { Navbar } from "../components/Navbar"
import { RiBuilding2Line } from "react-icons/ri";
import { HiPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi";
import { useEffect, useState } from "react";
import { BFooter } from "../components/BFooter";
import { Footer } from "../components/Footer";

export const CareerGuidance = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);

    const images = [
        'CHIREC1.webp',
        'vite.svg',
        'CHIREC-2.png.webp',
    ];

    const texts = [
        'I would like to express my sincere thanks and gratitude to CHIREC School and its excellent counselling department for shaping my son’s career and helping us out in various dimensions. The student counsellor is extremely knowledgeable in all the aspects of college admissions, and he is generally our go to person for any clarifications. The counselling department organized various brown bag sessions and invited various top universities/schools to the campus to enrich the student community and helped them make right career choices. I also, would like to call out Rahul Sir for his passion and dedication in helping the students. His in-depth knowledge about extra curriculars, various examinations, and how each country is different in terms of their process is so helpful in giving the right direction and support to the students. With current counselling department in school, parents can save lots of money as they do not have to seek any external professional help.',
        'Hello everyone, I’m Kasvi Agarwal, a student from CBSE Grade 12, and I’m thrilled to share a moment of immense gratitude and excitement with you. During the lockdown, I delved into stitching, sparking a passion for fashion that has now led me to an incredible journey. I am delighted to announce that I’ve been accepted into Parsons School of Design, where I’ll be majoring in Fashion Design.""I owe a heartfelt thank you to my school, especially my fashion teacher, Namitha ma’am, and my counselor, Saritha ma’am, for their unwavering support throughout this transformative period. I’m also grateful for the opportunity to study Fashion as my fourth elective, which has allowed me to explore and cultivate my passion.""A special thanks to CHIREC, for providing an environment where dreams take flight. I’d also like to extend my gratitude to our school principal and vice-principal, Iffat Ma’am and Katyayani ma’am, for their continuous encouragement and guidance. I can’t wait to embark on this new chapter in my life!',
        'CHIREC International School is widely recognized for its commitment to academic excellence, holistic development, and innovative teaching methods. Situated in Hyderabad, the school provides a nurturing environment that fosters intellectual, emotional, and social growth. With a strong emphasis on a well-rounded education, CHIREC offers a blend of traditional and contemporary curricula, including CBSE, Cambridge, and International Baccalaureate (IB) programs. The school boasts state-of-the-art facilities, including modern classrooms, sports complexes, and creative spaces for arts and sciences.',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(nextImage, 3000)
        return () => clearInterval(interval)
    }, [currentIndex])

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
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Career-Guidance-1.png" alt="" className="h-130 mt-30" />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-6xl">Career Guidance</h1>
        </div>
        <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-20">
            <h1 className="font-bold text-4xl text-center pt-10">University & Career Guidance</h1>
            <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p className="m-10 p-7 text-xl">For close to 2 decades, CHIREC students from the CBSE and IBDP curricula have been placed in many prestigious and prominent universities in India and worldwide. We have an impressive track record of college placements, thanks to the College and Career Guidance Department and our students’ hard work and focus.</p>
            <p className="m-10 p-7 text-xl">We offer a spectrum of resources to support students with their college search and application process, including valuable career guidance, college visits, prospective campus tours, and other events. The school also shares resources and support for Indian entrance exams such as NEET and CLAT, and standardised tests such as SAT, ACT, and PSAT, which are required for admission into most foreign universities.</p>
        </div>
        <div className="text-left ml-70 mr-60 mt-10">
            <h1 className="font-bold text-4xl mt-10">Our Students Excel in Their Diverse Fields in India and Around the World</h1>
            <div className="grid grid-cols-3 gap-4 m-10">
                <div className="bg-blue-400 rounded-lg">
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Group-1319.png" alt="" className="mx-auto m-10" />
                    <p className="text-center m-10 text-white">15% of our students are placed in the Top 100 colleges across the globe</p>
                </div>
                <div className="bg-green-400 rounded-lg">
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/9-1.png" alt="" className="mx-auto m-10" />
                    <p className="text-center m-10 text-white">$1 million received in scholarships in 2022</p>
                </div>
                <div className="bg-red-400 rounded-lg">
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/7-6681.png" alt="" className="mx-auto m-10" />
                    <p className="text-center m-10 text-white">Over 30% of our students receive admission into their top-choice University through Early Decision or Early Action</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 m-10">
                <div className="bg-blue-400 rounded-lg">
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Group-1319.png" alt="" className="mx-auto m-10" />
                    <p className="text-center m-10 text-white">15% of our students are placed in the Top 100 colleges across the globe</p>
                </div>
                <div className="bg-green-400 rounded-lg">
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/9-1.png" alt="" className="mx-auto m-10" />
                    <p className="text-center m-10 text-white">$1 million received in scholarships in 2022</p>
                </div>
            </div>
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Decor-1.png" alt="" />
        </div>

        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/map.png" alt="" className="m-10" />
        <div className="text-left ml-70 mr-60 mt-10">
            <h1 className="font-bold text-4xl mt-10">Some Other Universities our Students Graduate to</h1>
            <div className="grid grid-cols-3">
                <div>
                    <h1 className="text-center font-bold text-2xl">India</h1>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>BITS</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>Nalsar University of Law</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>Vellore Institute of Technology</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>National Institute of Fashion Technology</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>Christ University</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>St.Xaviers</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>Ashoka University</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-center font-bold text-2xl">USA</h1>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>Princeton University</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>Coloumbia University</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>University of California, Berkeley</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>Georgia Institute of Technology</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>Parsons School of Design</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>University of Pennsylvania</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>Northwestern University</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-center font-bold text-2xl">UK</h1>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>University College London</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>University of Warwick</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>London College of Fashion</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>University of Arts London</p>
                    </div>
                    <div className="flex m-5">
                        <RiBuilding2Line className="text-green-500 mr-1 text-2xl" />
                        <p>Loughborough University</p>
                    </div>
                </div>
            </div>
            <h1 className="font-bold text-4xl mt-10">We Place our Students in Top Universities of Their Choice</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p>Career guidance begins with our Class 8 children. We facilitate different tests to help reveal students’ potential strengths and individual interests. The school hosts University Fairs, wherein groups of universities from India, US, Canada, UK and other global destinations visit the campus each year to provide information about the courses on offer. The students are provided exposure to the career options available depending on their interests and abilities by our team of Career and College Counsellors at school.</p>
            <div className="bg-gray-100 m-10 hover:cursor-pointer">
                <div className="flex">
                    <button onClick={() => {
                        setIsOpen1(!isOpen1)
                    }} className="flex m-5 hover:cursor-pointer font-bold"><HiPlus className={`${isOpen1 ? 'hidden' : 'block'} text-2xl text-green-500 mr-10`}/> <HiMinus className={`${isOpen1 ? 'block' : 'hidden'} text-2xl text-red-500 mr-10`}/> University fairs</button>

                </div>
                <div className={`${isOpen1 ? 'block' : 'hidden'}`}>
                    <p className="ml-20 mr-5 pb-5">
                        CHIREC organises University Fairs and invites experts from over 100 universities from India, USA, UK, Canada, Europe, Australia and Singapore to conduct career talks to provide professional guidance to students about the career opportunities available to them.
                    </p>
                </div>
                <hr class="h-px border-0 bg-gray-300"></hr>
                <div className="flex">
                    <button onClick={() => {
                        setIsOpen2(!isOpen2)
                    }} className="flex m-5 hover:cursor-pointer font-bold"><HiPlus className={`${isOpen2 ? 'hidden' : 'block'} text-2xl text-green-500 mr-10`}/> <HiMinus className={`${isOpen2 ? 'block' : 'hidden'} text-2xl text-red-500 mr-10`}/> Essay Writing Workshops</button>
                </div>
                <div className={`${isOpen2 ? 'block' : 'hidden'}`}>
                    <p className="ml-20 mr-5 pb-5">
                        While grades and test scores are vitally important, an exceptional college application essay or personal statement is also a crucial factor in determining who is accepted into a great university, and who isn’t. To help students learn much of what is needed to write that standout personal statement or application essay, CHIREC organises Essay Writing Workshops that help students get started and work their way through the essay writing and personal statement processes.
                    </p>
                </div>
                <hr class="h-px border-0 bg-gray-300"></hr>
                <div className="flex">
                    <button onClick={() => {
                        setIsOpen3(!isOpen3)
                    }} className="flex m-5 hover:cursor-pointer font-bold"><HiPlus className={`${isOpen3 ? 'hidden' : 'block'} text-2xl text-green-500 mr-10`}/> <HiMinus className={`${isOpen3 ? 'block' : 'hidden'} text-2xl text-red-500 mr-10`}/>Guest Lectures and Professional Career Advice</button>
                </div>
                <div className={`${isOpen3 ? 'block' : 'hidden'}`}>
                    <p className="ml-20 mr-5 pb-5">
                        Choosing a career or programme of study is a daunting task. CHIREC provides our students with opportunities to meet experts from different fields who can offer a wealth of experience to allow them to make educated decisions for their futures.
                    </p>
                </div>
                <hr class="h-px border-0 bg-gray-300"></hr>
                <div className="flex">
                    <button onClick={() => {
                        setIsOpen4(!isOpen4)
                    }} className="flex m-5 hover:cursor-pointer font-bold"><HiPlus className={`${isOpen4 ? 'hidden' : 'block'} text-2xl text-green-500 mr-10`}/> <HiMinus className={`${isOpen4 ? 'block' : 'hidden'} text-2xl text-red-500 mr-10`}/>Exchange Programmes</button>
                </div>
                <div className={`${isOpen4 ? 'block' : 'hidden'}`}>
                    <p className="ml-20 mr-5 pb-5">
                        Our students travel to different countries for immersive cultural experiences as well as host foreign students in Hyderabad to share and build cultural understanding. Ever since the first exchange programme in 2011 to USA, our students have participated in exchanges to Mauritius and UK, as well as virtual exchange programmes with schools in Singapore, Brazil and Chile.

                        As part of the Cognita family with over 100+ schools across Asia, UK, Europe, Latin America, the Middle East and North America, we plan to build a more diverse and extensive exchange programme for students to build connections with their peers around the world.
                    </p>
                </div>
                <hr class="h-px border-0 bg-gray-300"></hr>
                <div className="flex">
                    <button onClick={() => {
                        setIsOpen5(!isOpen5)
                    }} className="flex m-5 hover:cursor-pointer font-bold"><HiPlus className={`${isOpen5 ? 'hidden' : 'block'} text-2xl text-green-500 mr-10`}/> <HiMinus className={`${isOpen5 ? 'block' : 'hidden'} text-2xl text-red-500 mr-10`}/>Preparatory Courses and testing for SAT, PSAT, AP and NEET</button>
                </div>
                <div className={`${isOpen5 ? 'block' : 'hidden'}`}>
                    <p className="ml-20 mr-5 pb-5">
                        We support students with SAT, PSAT and AP subject tests and conduct the Pre-Oxford and Cambridge Examinations each year. CHIREC is also the first AP, SAT and PSAT testing centre in Telangana and an authorised centre for NEET.
                    </p>
                </div>
                <hr class="h-px border-0 bg-gray-300"></hr>
                <div className="flex">
                    <button onClick={() => {
                        setIsOpen6(!isOpen6)
                    }} className="flex m-5 hover:cursor-pointer font-bold"><HiPlus className={`${isOpen6 ? 'hidden' : 'block'} text-2xl text-green-500 mr-10`}/> <HiMinus className={`${isOpen6 ? 'block' : 'hidden'} text-2xl text-red-500 mr-10`}/>Access to CIALFO</button>
                </div>
                <div className={`${isOpen6 ? 'block' : 'hidden'}`}>
                    <p className="ml-20 mr-5 pb-5">
                        CHIREC students have access to CIALFO – a comprehensive college and career platform that helps students in making informed choices related to their career.

                        We place our students in Top Universities of their choice.</p>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div className="w-200 m-20 mx-auto">
                    <div className="overflow-hidden rounded-lg shadow-lg flex m-5">
                        <img
                            src={images[currentIndex]}
                            alt=""
                            className="object-cover transition-transform duration-300 rounded-full w-30 h-30 m-10"
                        />
                        <p className="m-10">{texts[currentIndex]}</p>
                    </div>
                    <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-opacity-50 text-blue-500 p-2 rounded-full focus:outline-none hover:bg-opacity-75"
                    >
                        &#10094;
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-opacity-50 text-blue-500 p-2 rounded-full focus:outline-none hover:bg-opacity-75"
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </div>
        <BFooter/>
        <Footer/>
    </div>
}
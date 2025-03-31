import { Navbar } from "../components/Navbar"
import { BsBookmarkStar, BsPeople } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { PiBasketball } from "react-icons/pi";
import { BsPersonPlus } from "react-icons/bs";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { BFooter } from "../components/BFooter";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { MightwanttoRead } from "../components/MightwanttoRead";

export const YourChildsJourney = () => {
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
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Your-childs-journey-1.png" alt="" className="h-130" />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-6xl">Your Child's Journey</h1>
        </div>
        <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-20">
            <h1 className="font-bold text-4xl text-center pt-10">Your Child’s Journey to Success</h1>
            <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p className="m-10 pb-10 text-xl">We take great pride in our holistic and globally conscious approach to education, focusing on the Cambridge Curriculum, International Baccalaureate (IB) Diploma Programme and CBSE Curriculum, to provide an immersive learning experience for your child. Each step of your child’s educational journey towards lifelong success is thoughtfully curated to ensure they enjoy the wonderful experiences of childhood, while building a strong academic foundation to excel at the next stage.</p>
        </div>
        <div className="flex justify-center">
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Frame-2215.png" alt="" className="" />
        </div>
        <h1 className="text-center font-bold text-5xl m-10">Our Learning Design Principles</h1>
        <div className="grid grid-cols-2 ml-70 mr-70">
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images-15.png" alt="" />
            <div className="">
                <h1 className="font-bold text-2xl">Each Child is an Individual</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>At CHIREC, we believe – and know – that every child is unique. Through our culture of care, we help children to discover their passions and focus on their individual needs to ensure they develop the right skills and knowledge to flourish in life.</p>
            </div>
            <div className="mt-10">
                <h1 className="font-bold text-2xl">The World is our Classroom</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>Our learning goes beyond the boundaries of any set curriculum. Through real-life examples, outdoor lessons, project-based learning, field trips, guest lectures, international school collaborations and engagement with local and global issues, our students learn by actively exploring the real world.</p>
            </div>
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/3-2.png" alt="" className="m-10" />
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Images-1-3.png" alt="" className="mt-10" />
            <div className="mt-10">
                <h1 className="font-bold text-2xl">Experiential Interdisciplinary Learning</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>In an increasingly volatile and uncertain world, children need to master complexity and to be agile enough to navigate a rapidly evolving social and economic landscape. A CHIREC education, which goes beyond the classroom walls, teaches children ‘joined-up thinking’ underpinned by mastery of multiple academic disciplines not just to survive in the future, but to thrive in it.</p>
            </div>
            <div className="mt-10">
                <h1 className="font-bold text-2xl">Technology-Based Teaching</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>Our strong technological infrastructure enables us to provide diverse and rich learning experiences to students. With a digital board in every classroom, we use online resources, 3D models, guest lectures, and virtual trips around the world to make learning exciting and engaging for your child.</p>
            </div>
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Images-2-2.png" alt="" className="m-10" />
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images3-1.png" alt="" className="mt-10" />
            <div className="mt-10">
                <h1 className="font-bold text-2xl">Wellbeing at the Heart of Successful Learning</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>We believe that children are able to learn only when they feel physically, socially, mentally and emotionally well. Cognita’s globally established Wellbeing Programme and CHIREC’s Social & Emotional Learning curriculum cultivate a positive and child-centric learning environment, where students become optimistic, energetic, motivated, encouraged and empowered to grow to their full potential.</p>
            </div>
        </div>
        <div className="flex justify-center m-10">
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Decor.png" alt="" />
        </div>
        <h1 className="text-center font-bold text-4xl m-5">Learning Journeys to Success</h1>
        <p className="ml-70 mr-60 text-left">CHIREC’s Preschool adopts a specially designed Integrated Curriculum, bringing together the best Preschool practices. It engages your child to explore the world around them and facilitate their physical, intellectual, social, and emotional development. Entering the Primary section in Grade 1, they choose between the nationally recognised CBSE Curriculum and the internationally recognised Cambridge Curriculum that will carry them through Preschool and Secondary until Grade 10. At Senior Secondary (Grades 11 and 12), the school offers two pathways to success: CBSE Curriculum and the International Baccalaureate (IB) Diploma Programme.</p>
        <div className="grid grid-cols-4 m-10 gap-4">

            <div className="w-70 h-68 bg-cover bg-center rounded-lg relative group"
                style={{ backgroundImage: "url('https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/What-we-stand-for_Card.png')" }}>
                <div className="absolute top-0 left-0 bg-red-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="m-10">
                    <hr className="w-10 h-1 my-4 bg-white border-0 rounded-sm md:my-5" />
                    <p className="text-white font-bold">What we Stand For</p>
                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-40 transition-opacity"></div>
                    <button className="absolute rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="w-70 h-68 bg-cover bg-center rounded-lg relative group"
                style={{ backgroundImage: "url('https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/Activities-programmes_card2-280x270.png')" }}>
                <div className="m-10">
                    <hr className="w-10 h-1 my-4 bg-white border-0 rounded-sm md:my-5 dark:bg-white" />
                    <p className="text-white font-bold">Activities & Programmes</p>
                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-40 transition-opacity"></div>
                    <button className="absolute rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="group w-70 h-68 bg-center rounded-lg relative group"
                style={{ backgroundImage: "url('https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/04/our-character-compass_card-1.png')" }}>
                <div className="m-10">
                    <hr className="w-10 h-1 my-4 bg-white border-0 rounded-sm md:my-5 dark:bg-white" />
                    <p className="text-white font-bold">Our Character Compass</p>
                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-40 transition-opacity"></div>
                    <button className="absolute rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="group w-70 h-68 bg-center rounded-lg relative group"
                style={{ backgroundImage: "url('https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Untitled-design-3.png')" }}>
                <div className="m-10">
                    <hr className="w-10 h-1 my-4 bg-white border-0 rounded-sm md:my-5 dark:bg-white" />
                    <p className="text-white font-bold">Apply Now</p>
                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-40 transition-opacity"></div>
                    <button onClick={() => {

                    }} className="absolute rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
        <h1 className="font-bold text-4xl text-center m-10">The numbers speak for themselves</h1>
        <div className="grid grid-cols-4 gap-4 m-10 text-center pl-60 pr-60">
            <div>
                <div className="flex justify-center">
                    <BsBookmarkStar className="text-blue-500 text-4xl font-bold pb-2" />
                </div>
                <h1 className="font-bold text-4xl">35 Year</h1>
                <p>Legacy</p>
            </div>
            <div>
                <div className="flex justify-center">
                    <IoPersonOutline className="text-blue-500 text-4xl font-bold pb-2" />
                </div>
                <h1 className="font-bold text-4xl">2.5 - 17 Years</h1>
                <p>Legacy</p>
            </div>
            <div>
                <div className="flex justify-center">
                    <HiOutlineLightBulb className="text-blue-500 text-4xl font-bold pb-2" />
                </div>
                <h1 className="font-bold text-4xl">3 Curricula</h1>
                <p>Legacy</p>
            </div>
            <div>
                <div className="flex justify-center">
                    <IoIosPeople className="text-blue-500 text-4xl font-bold pb-2" />
                </div>
                <h1 className="font-bold text-4xl">26 - 30</h1>
                <p>Legacy</p>
            </div>
            <div>
                <div className="flex justify-center">
                    <IoBookOutline className="text-blue-500 text-4xl font-bold pb-2" />
                </div>
                <h1 className="font-bold text-4xl">80 +</h1>
                <p>Subjects Offered</p>
            </div>
            <div>
                <div className="flex justify-center">
                    <PiBasketball className="text-blue-500 text-4xl font-bold pb-2" />
                </div>
                <h1 className="font-bold text-4xl">40 +</h1>
                <p>Co-curricular Activities</p>
            </div>
            <div>
                <div className="flex justify-center">
                    <BsPersonPlus className="text-blue-500 text-4xl font-bold pb-2" />
                </div>
                <h1 className="font-bold text-4xl">13 Years</h1>
                <p>Average Teaching Experience</p>
            </div>
            <div>
                <div className="flex justify-center">
                    <LiaGlobeAmericasSolid className="text-blue-500 text-4xl font-bold pb-2" />
                </div>
                <h1 className="font-bold text-4xl">10,000 +</h1>
                <p>Successful Alumni</p>
            </div>
        </div>
        <p className="text-left ml-70 mr-60 mt-10">While all three curricula, including the CBSE Curriculum, Cambridge Curriculum and the International Baccalaureate Diploma Programme provide solid foundations for academic success, CHIREC also places high importance on co-curriculars, life skills, and personality building activities. We go beyond our commitment to academic rigor and excellence to offer our students manifold other opportunities for transformative growth in fields such as visual and performing arts, sports, community service, and participation in international events. With a firm foundation and stellar academic results, CHIREC’s graduates have gone on to achieve commendation and recognition in fields of expertise, enterprise, and endeavour.</p>
        <div className="bg-gray-50">
            <div className="w-200 m-20 pt-20 pb-20 mx-auto relative group">
                <div className="overflow-hidden rounded-lg shadow-lg flex m-5">
                    <img
                        src={images[currentIndex]}
                        alt=""
                        className="object-cover transition-transform duration-300 rounded-full w-30 h-30 m-10"/>
                    <p className="m-10">{texts[currentIndex]}</p>
                </div>
                <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-opacity-50 text-blue-500 p-2 rounded-full focus:outline-none hover:bg-opacity-75">
                    &#10094;
                </button>
                <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-opacity-50 text-blue-500 p-2 rounded-full focus:outline-none hover:bg-opacity-75">
                    &#10095;
                </button>
            </div>
        </div>
        <MightwanttoRead />
        <BFooter />
        <Footer />
    </div>
}
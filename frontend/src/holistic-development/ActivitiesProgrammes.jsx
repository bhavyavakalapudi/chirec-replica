import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import { MightwanttoRead } from "../components/MightwanttoRead";
import { BFooter } from "../components/BFooter";
import { Footer } from "../components/Footer";

export const ActivitiesProgrammes = () => {
    const images = [
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Chess.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/clay-modeling.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/guitar.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/kuchipudi-dance.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/keyboard.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Tabla.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Violin.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/yoga.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Painting.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Chess.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/clay-modeling.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/guitar.png',
    ];

    const texts = [
        'Chess',
        'Clay Modelling',
        'Guitar',
        'Kuchipudi',
        'Keyboard',
        'Tabla',
        'Violin',
        'Yoga',
        'Painting',
        'Chess',
        'Clay Modelling',
        'Guitar',

    ];

    const activities = [
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/basketball.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/criket.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/tennis.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/skating.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/table-tennis.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/handball.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/volleyball.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/gym.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/kabbadi.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/taekwondo.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/athletics1.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/erobic.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/archery.png'
    ]

    const names = [
        'Basketball',
        'Cricket',
        'Tennis',
        'Skating',
        'Table Tennis',
        'Handball',
        'Volleyball',
        'Gymnastics',
        'Kabbadi',
        'Taekwondo',
        'Athletics',
        'Aerobics',
        'Archery'
    ]

    const clubs = [
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/music-club.jpg?resize=768,512',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/culinary-club.jpg',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/Drama-club.jpg',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/ai-club.jpg',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/art-club.jpg',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/theatre-club.jpg',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/3d-printing.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/music-club.jpg?resize=768,512',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/culinary-club.jpg',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/Drama-club.jpg',
    ]

    const cnames = [
        'Music Club',
        'Culinary Club',
        'Elocution, Speech & Drama Club',
        'Artificial Intelligence Club',
        'Art Club',
        'Metamorphosis Theatre Club',
        'Robotics & 3-D printing Club',
        'Music Club',
        'Culinary Club',
        'Elocution, Speech & Drama Club',
    ]

    const logos = [
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/logo1.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/logo2.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/logo3.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/logo4.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/logo5.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/logo1.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/logo2.png',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/logo3.png',
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [index, setIndex] = useState(0)
    const [cindex, setCIndex] = useState(0)
    const [lindex, setLIndex] = useState(0)

    useEffect(() => {
        if (currentIndex > 8) {
            setCurrentIndex(0)
        }
        const interval = setInterval(nextImage, 3000)
        return () => clearInterval(interval)
    }, [currentIndex])

    useEffect(() => {
        if (index > 9) {
            setIndex(0)
        }
        const interval = setInterval(nextImageA, 3000)
        return () => clearInterval(interval)
    }, [index])

    useEffect(() => {
        if (cindex > 6) {
            setCIndex(0)
        }
        const interval = setInterval(nextImageC, 3000)
        return () => clearInterval(interval)
    }, [cindex])

    useEffect(() => {
        if (lindex > 4) {
            setLIndex(0)
        }
        const interval = setInterval(nextImageL, 3000)
        return () => clearInterval(interval)
    }, [lindex])

    const nextImageL = () => {
        setLIndex((prevIndex) => (prevIndex + 1) % logos.length);
    };

    const nextImageC = () => {
        setCIndex((prevIndex) => (prevIndex + 1) % clubs.length);
    };

    const nextImageA = () => {
        setIndex((prevIndex) => (prevIndex + 1) % activities.length);
    };

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
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Activities-Programmes-2.png" alt="" className="h-130 mt-30" />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-6xl">Activities & Programmes</h1>
        </div>
        <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-20">
            <p className="m-10 pb-5 pt-10 text-xl">CHIREC, a premier educational institution in India affiliated with CBSE, IBDP, and CAIE, was founded on the principle of imparting holistic education. We place equal emphasis on arts, sports, and academics, aligning with the curriculum requirements of CBSE, IBDP, and CAIE. Our vision is to nurture well-rounded young men and women who are well-prepared to navigate the world beyond our institution.</p>
            <p className="m-10 pb-10 text-xl">Our comprehensive programme is carefully crafted to strike the right balance between physical, creative, and academic development while instilling invaluable qualities in our students. We focus on motivation, determination, experiencing both success and disappointment, embracing challenges, fostering resilience, managing stress, and overcoming obstacles.</p>
        </div>
        <div className="flex justify-center">
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Decor-1.png" alt="" className="" />
        </div>
        <div className="text-left ml-70 mr-60 mt-10">
            <div className="mt-5">
                <h1 className="font-bold text-4xl text-center">Visual, Literary & Performing Arts</h1>
                <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>Under the CBSE, IBDP, and CAIE curricula, our students explore a wide array of art forms in dedicated spaces. They develop aesthetic sensibilities and become cultured individuals comfortable in sophisticated environments. Our offerings include Painting, Clay Modelling, Keyboard, Guitar, Tabla, Violin, Kuchipudi Dance, Yoga, and Chess.</p>
            </div>
        </div>
        <div className="w-250 mx-auto grid grid-cols-4">
            <div className="overflow-hidden rounded-lg m-5">
                <img src={images[currentIndex + 0]} alt="" className="object-cover transition-transform duration-300 w-70 h-50 rounded-lg" />
                <p className="text-center font-bold">{texts[currentIndex + 0]}</p>
            </div>
            <div className="overflow-hidden rounded-lg m-5">
                <img src={images[currentIndex + 1]} alt="" className="object-cover transition-transform duration-300 w-70 h-50 rounded-lg" />

                <p className="text-center font-bold">{texts[currentIndex + 1]}</p>
            </div>
            <div className="overflow-hidden rounded-lg m-5">
                <img src={images[currentIndex + 2]} alt="" className="object-cover transition-transform duration-300 w-70 h-50 rounded-lg" />
                <p className="text-center font-bold">{texts[currentIndex + 2]}</p>
            </div>
            <div className="overflow-hidden rounded-lg m-5">
                <img src={images[currentIndex + 3]} alt="" className="object-cover transition-transform duration-300 w-70 h-50 rounded-lg" />
                <p className="text-center font-bold">{texts[currentIndex + 3]}</p>
            </div>
        </div>
        <div className="text-left ml-70 mr-60 mt-10">
            <div className="mt-5">
                <h1 className="font-bold text-4xl text-center">Physical Education</h1>
                <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>Exercise is foundational to modern school children’s physical and mental strength and emotional wellbeing. The five most common deficits in twenty-first century school children’s lives have become sunlight, upright posture, physical movement, human social interaction and restful sleep. Exercise and organised sport are two of the most potent antidotes to the debilitating effects of changing modern diets and eating habits and increasingly sedentary lifestyles.</p>
                <p className="mt-5">Boys and girls from Nursery to Class 2 are engaged in a range of exercises focused on the upper body, lower body and core that help in body development, coordination and balance. Girls and boys from Classes 3 to 5 learn eight different sports over the course of three years. During this time, the natural growth of the student along with body training is studied and an analysis is prepared for each student. In Classes 6 to 12, our students are encouraged to pick one sport to train in and play competitively.</p>
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/pt-class.jpeg" alt="" className="pt-5" />
                <h1 className="font-bold text-4xl text-center mt-10">Sports</h1>
                <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>The sports curriculum at CHIREC is planned and designed for students to develop and enhance skills such as strength, speed, endurance, agility, flexibility, control, balance, as well as teamwork, leadership, confidence, and self-discipline. We believe sports are an integral part of the education of a child and allow our students to explore a variety of sports before choosing their specialisation in Secondary classes</p>
                <div className="w-250 mx-auto grid grid-cols-4">
                    <div className="overflow-hidden rounded-lg m-5">
                        <img src={activities[index + 0]} alt="" className="object-cover transition-transform duration-300 w-70 h-50 rounded-lg" />
                        <p className="text-center font-bold">{names[index + 0]}</p>
                    </div>
                    <div className="overflow-hidden rounded-lg m-5">
                        <img src={activities[index + 1]} alt="" className="object-cover transition-transform duration-300 w-70 h-50 rounded-lg" />

                        <p className="text-center font-bold">{names[index + 1]}</p>
                    </div>
                    <div className="overflow-hidden rounded-lg m-5">
                        <img src={activities[index + 2]} alt="" className="object-cover transition-transform duration-300 w-70 h-50 rounded-lg" />
                        <p className="text-center font-bold">{names[index + 2]}</p>
                    </div>
                    <div className="overflow-hidden rounded-lg m-5">
                        <img src={activities[index + 3]} alt="" className="object-cover transition-transform duration-300 w-70 h-50 rounded-lg" />
                        <p className="text-center font-bold">{names[index + 3]}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-left ml-70 mr-60 mt-10">
            <h1 className="font-bold text-4xl text-center">After-School Coaching</h1>
            <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p>The school also offers specialised after-school coaching for all students who wish to take their skills to the next level. Students at CHIREC also attend many sports events and competitions at inter-school, state, national and international levels throughout the year. Some of our teams are well known at the state and national levels.</p>
            <p className="mt-5">The coaches at CHIREC are energetic and experienced and help students develop sportsmanship spirit, fair play, and teach them the ability to work hard and collaborate. We have also partnered with EduSports, a reputed Indian sports education organisation, to implement a structured and holistic sports curriculum at CHIREC. All coaches and activity staff at the school are offered professional development courses before and during the start of the academic year to constantly improve the quality of coaching.</p>
            <div className="flex justify-center mt-10">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images3-4.png" alt="" />
            </div>
            <h1 className="font-bold text-4xl text-center">Student Clubs</h1>
            <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p>CHIREC strongly believes in providing ample opportunities for our students to explore their interests and channel their energy into building a passion and skills for a competitive world. Keeping this philosophy in mind, we offer a range of After School Clubs and activities for students to choose from.</p>

            <div className="w-250 mx-auto grid grid-cols-4">
                <div className="overflow-hidden rounded-lg m-5">
                    <img src={clubs[cindex + 0]} alt="" className="object-cover transition-transform duration-300 w-70 h-50 rounded-lg" />
                    <p className="text-center font-bold">{cnames[cindex + 0]}</p>
                </div>
                <div className="overflow-hidden rounded-lg m-5">
                    <img src={clubs[cindex + 1]} alt="" className="object-cover transition-transform duration-300 w-70 h-50 rounded-lg" />

                    <p className="text-center font-bold">{cnames[cindex + 1]}</p>
                </div>
                <div className="overflow-hidden rounded-lg m-5">
                    <img src={clubs[cindex + 2]} alt="" className="object-cover transition-transform duration-300 w-70 h-50 rounded-lg" />
                    <p className="text-center font-bold">{cnames[cindex + 2]}</p>
                </div>
                <div className="overflow-hidden rounded-lg m-5">
                    <img src={clubs[cindex + 3]} alt="" className="object-cover transition-transform duration-300 w-70 h-50 rounded-lg" />
                    <p className="text-center font-bold">{cnames[cindex + 3]}</p>
                </div>
            </div>
            <p className="m-10">We also offer numerous opportunities for students to lead initiatives such as the Model United Nations, TedxYouth, CHIREC Radio, School Newspapers and more.</p>
            <div className="w-250 mx-auto grid grid-cols-4">
                <div className="overflow-hidden rounded-lg m-5">
                    <img src={logos[lindex + 0]} alt="" className="object-cover transition-transform duration-300 rounded-lg" />
                    {/* <p className="text-center font-bold">{cnames[cindex + 0]}</p> */}
                </div>
                <div className="overflow-hidden rounded-lg m-5">
                    <img src={logos[lindex + 1]} alt="" className="object-cover transition-transform duration-300 rounded-lg" />

                    {/* <p className="text-center font-bold">{cnames[cindex + 1]}</p> */}
                </div>
                <div className="overflow-hidden rounded-lg m-5">
                    <img src={logos[lindex + 2]} alt="" className="object-cover transition-transform duration-300 rounded-lg" />
                    {/* <p className="text-center font-bold">{cnames[cindex + 2]}</p> */}
                </div>
                <div className="overflow-hidden rounded-lg m-5">
                    <img src={logos[lindex + 3]} alt="" className="object-cover transition-transform duration-300 rounded-lg" />
                    {/* <p className="text-center font-bold">{cnames[cindex + 3]}</p> */}
                </div>
            </div>
        </div>
        {/* <MightwanttoRead/> */}
        <BFooter/>
        <Footer/>
    </div>
}
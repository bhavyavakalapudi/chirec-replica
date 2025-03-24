import { BFooter } from "../components/BFooter";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar"
import { useEffect, useState } from "react"

export const WhyChirec = () => {
    const images = [
        'CHIREC1.webp',
        'vite.svg',
        'CHIREC-2.png.webp',
    ];

    const texts = [
        'CHIREC International School is widely recognized for its commitment to academic excellence, holistic development, and innovative teaching methods. Situated in Hyderabad, the school provides a nurturing environment that fosters intellectual, emotional, and social growth. With a strong emphasis on a well-rounded education, CHIREC offers a blend of traditional and contemporary curricula, including CBSE, Cambridge, and International Baccalaureate (IB) programs. The school boasts state-of-the-art facilities, including modern classrooms, sports complexes, and creative spaces for arts and sciences.',
        'CHIREC International School is widely recognized for its commitment to academic excellence, holistic development, and innovative teaching methods. Situated in Hyderabad, the school provides a nurturing environment that fosters intellectual, emotional, and social growth. With a strong emphasis on a well-rounded education, CHIREC offers a blend of traditional and contemporary curricula, including CBSE, Cambridge, and International Baccalaureate (IB) programs. The school boasts state-of-the-art facilities, including modern classrooms, sports complexes, and creative spaces for arts and sciences.',
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
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/why-chirec-banner.jpg" alt="" className="h-130" />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-4xl">Why CHIREC</h1>
        </div>
        <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-20">
            <p className="m-10 pt-5">CHIREC International is consistently ranked as the number one school in Hyderabad and among the top ten in India. CHIREC sets itself apart through thoughtful design and an unwavering commitment to addressing your child’s needs at every stage of their formative years.</p>
            <p className="m-10 pb-5">With over three decades of experience, CHIREC International has emerged as a trusted education brand for holistic development. As part of one of the world’s largest and most respected international school groups, CHIREC International combines innovative practices with a cutting-edge approach, making it a standout choice among international schools in India.</p>
        </div>
        <h1 className="mt-20 mr-50 ml-50 mb-20 text-center font-bold text-4xl pt-10">We provide a positive, caring and engaging learning community</h1>

        <div className="grid grid-cols-3">
            <div className="mr-10 ml-10">
                <h1 className="text-8xl text-green-600 text-center">1</h1>
                <p className="text-center font-bold">Learning That Goes Beyond the Classroom</p>
                <p>CHIREC's high-quality teaching and learning goes beyond any set boundaries of a curriculum or classroom. Our robust academic programmes are complemented by high-value co-curricular activities that enable students to discover their interests and nurture their innate potential.</p>
            </div>
            <div className="mr-10 ml-10">
                <h1 className="text-8xl text-green-600 text-center">2</h1>
                <p className="text-center font-bold">A Culture of Care</p>
                <p>The school is built on a strong family ethos. We bring together rigorous safeguarding principles, health and safety measures, wellbeing practices and a Social & Emotional Learning Programme, to ensure your child is safe, well and growing to their full academic potential.</p>
            </div>
            <div className="mr-10 ml-10">
                <h1 className="text-8xl text-green-600 text-center">3</h1>
                <p className="text-center font-bold">Our Innovative Spirit</p>
                <p>For over 30 years, CHIREC has been a dynamic school always striving to be the best at what we do. Having changed the face of the education landscape in Hyderabad and India, CHIREC is known to set trends in education. We are a school that is not afraid to challenge orthodoxy, think out of the box, and try new things.</p>
            </div>
            <div className="mr-10 ml-10">
                <h1 className="text-8xl text-green-600 text-center">4</h1>
                <p className="text-center font-bold">The Cognita Family</p>
                <p>CHIREC is a part of Cognita, an admired and respected family of 100+ diverse yet connected schools across 16 countries. A key benefit of being part of the global Cognita family is the opportunity to collaborate with four global regions to benchmark and drive outstanding educational practices in CHIREC.</p>
            </div>
            <div className="mr-10 ml-10">
                <h1 className="text-8xl text-green-600 text-center">5</h1>
                <p className="text-center font-bold">Parent & Alumni Network</p>
                <p>Networks are a vital necessity in a densely populated world. Our high-value network of over 6,000 parents and 10,000 alumni helps us leverage rich opportunities and hands-on experiences for your child to prepare them for their future.</p>
            </div>
            <div className="mr-10 ml-10">
                <h1 className="text-8xl text-green-600 text-center">6</h1>
                <p className="text-center font-bold">Our Trustworthiness & 30-Year Track Record</p>
                <p>Over the past three decades, the name CHIREC has become synonymous with excellence in education. We consistently deliver excellent academic results, lead our students to world-renowned universities and prepare them for a successful future.</p>
            </div>
        </div>
        <div>
            <div>
                <div className="relative w-200 m-20 mx-auto">
                    {/* Image Display */}
                    <div className="overflow-hidden rounded-lg shadow-lg flex m-5">
                        <img
                            src={images[currentIndex]}
                            alt=""
                            className="object-cover transition-transform duration-300 rounded-full w-30 h-30 m-10"
                        />
                        <p className="m-10">{texts[currentIndex]}</p>
                    </div>

                    {/* Navigation Buttons */}
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
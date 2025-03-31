import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import { BFooter } from "../components/BFooter";
import { Footer } from "../components/Footer";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

export const IndianGlobalCitizenship = () => {
    const images = [
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/Ananya-Polsani-2.jpg',
        'https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/TNR-Mohit.png',
    ];

    const texts = [
        '"My inclination to give back to the community led me to initiate my project ‘Stories on Wheels’, a mobile library project. This was an initiative to help underprivileged children in rural villages with books, digital learning equipment and sports equipment to enhance their educational experience. I remember when I was starting out the project with a goal of collecting nearly 2000 books, our librarian, Mr. Arun Kumar, helped me out immensely. In order to facilitate the maintenance of the van, I applied for the Global Youth Action Fund, an IB initiative. My project was selected and funded under the same.  Along with the $3000, the IB also offered a Social Entrepreneurship course facilitated by the Sustainable Development Solutions Network. I am extremely grateful for the support I received from my teachers and my peers. Without it, I do not think I would have been able to achieve everything that I have. They have not only helped me inside the school with everything that I require but also outside the school, constantly helping me build my project into something better.  "',
        'I am T.N.R Mohit, a professional cricket player, and my journey is intricately woven with the experiences I’ve had at CHIREC. From proudly representing the Hyderabad Ranji trophy team to currently serving as a net bowler for the Chennai Super Kings, CHIREC has been a cornerstone in my path to success. My time during the 11th and 12th grade were particularly transformative. CHIREC not only provided crucial support for my burgeoning cricketing journey but also became a nurturing ground for leadership qualities. In the 11th grade, I served as the Red House Captain and in the 12th grade, I took on the role of Sports Committee Head, which helped me develop the leadership skills I have today. My experience inside the classroom and on the pitch was carefully nurtured and balanced by the school’s commitment to academic and extracurricular pursuits. CHIREC is more than just an educational institution; it’s a nurturing space that fosters holistic development. The school not only provided top-notch facilities for cricket but also played a crucial role in developing resilience, discipline, and effective leadership qualities. These character-building aspects have proven to be invaluable in my journey, both on and off the field.',
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
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Indian-Global-Citizenship.png" alt="" className="h-130 mt-30" />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-6xl">Indian Global Citizenship</h1>
        </div>
        <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-20">
            <p className="m-10 text-xl">At CHIREC, we are dedicated to developing responsible Indian and global citizens through our comprehensive citizenship curriculum. As the world becomes more interconnected, we believe it is essential to instill a sense of identity and belonging to one’s own country while fostering global mindedness in our students.</p>
            <p className="m-10 pb-10 text-xl">In our commitment to nurturing responsible citizens, we offer various avenues for students to make a positive impact on society and the environment. Our citizenship curriculum is designed to help students cultivate a deep understanding of India, its culture, values, and their role in a global landscape. We emphasise essential values such as hard work, honesty, strong family bonds, respect for elders, gratitude, and compassion for those who are less fortunate, all while nurturing an international outlook that makes them open-minded, adaptable, and resilient.</p>
        </div>
        <div className="flex justify-center">
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Decor-1.png" alt="" />
        </div>
        <div className="text-left ml-70 mr-60 mt-10">
            <h1 className="font-bold text-4xl">Building Social & Environmentally Responsible Citizens</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p>Through our Interact Club, Community Service Community and CAS Projects, our students cultivate deep respect and passion to address social problems through creative solutions. Via individual and collective efforts, our students spearhead awareness campaigns, donation drives and fundraising events to address various issues such as poverty, healthcare, educational underprivilege and climate change. Many of our students have gone on to create their own NGOs and their work is often recognised in local and national newspapers and internationally by the IB Diploma Programme, Diana Award and more.</p>
            <p>As part of its CSR, the school also provides financial support to over 15 different NGOs, Old Age Homes, Government Schools, Hospitals and Orphanages.</p>
        </div>
        <div className="flex justify-between ml-50 mr-50 mt-10">
            <div className="m-5">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-7.png" alt="" className="mx-auto"/>
                <p className="text-center">Adoption of Masjid Banda Primary & Secondary Government Schools since 2012</p>
            </div>
            <div className="m-5">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-9.png" alt="" className="mx-auto" />
                <p className="text-center">Infrastructure, maintenance support and school supplies to Anjaiyanagar & Gopinagar Primary Government Schools</p>
            </div>
            <div className="m-5">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Featured-icon-1-3.png" alt="" className="mx-auto" />
                <p className="text-center">Need-based support to 5 NGOs, 4 Elderly Homes, 3 Orphanages and 2 Government Hospitals</p>
            </div>
        </div>
        <div className="text-left ml-70 mr-60 mt-10">
            <h1 className="font-bold text-4xl">An Opportunity to Present at the United Nations Headquarters</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p>We are proud to be a pioneer in introducing the Future Leaders Programme by 1M1B to Hyderabad. Affiliated with the United Nations Department of Global Communications, 1M1B aims to activate 1 million leaders and entrepreneurs who will make a positive impact on 1 billion people.</p>
            <p>Every year, our young students develop solutions to address real-world issues such as poverty, wage gap, unemployment, climate change. Our students evolve into compassionate human-centered leaders by building essential skills such as leadership, project management, empathy, collaboration, communication, and problem-solving.</p>
            <p>Many of our students have been selected to present their work at the United Nations Headquarters in New York.</p>
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/1M1B-1.png" alt="" className="mt-5"/>
            <h1 className="font-bold text-4xl">Exploring & Learning Beyond the Classroom</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p>Harbouring the aspect of experiential learning, our students participate in numerous field trips and learning excursions throughout the year. These sojourns prove to be a learning journey infused with an element of fun. Ranging from local, and national to international trips, we offer:</p>
            <ul className="list-disc pl-5 space-y-2 mt-5">
                <li>
                    Field Trips and Excursions to local destinations around Hyderabad such as Botanical Gardens, Active Farms, Salarjung Museum, Zoo, Golconda Fort, Chowmohalla Palace, Birla Planetarium and Science Museum, Weavers Service Centre, Qualcomm, NIRD, Coca-Cola factory, NIN, Agricultural University farm, JNTU Biotechnology Lab, Asha Hospital, TV 5, Centre of Excellence-horticulture, BHEL.
                </li>
                <li>Institutional Trips to interact and learn from subject experts in organisations such as IIT Hyderabad, Center for Cellular and Molecular Biology, Dr Reddy’s Labs, ISRO, Krishnapatnam Port, JNAFAU Arts College, Weavers Service Centre and more.</li>
                <li>Outbound Trips to places like Mali Pass Trek, Geejgarh, Ranthambore, Bangalore, Guntur, Ooty, Delhi and Pondicherry to build student bonding around specific themes such as social outreach, community building, understanding diversity, heritage analysis, and more.</li>
                <li>International Trips to experience different cultures and have rich learning experiences at International College of Liberal Arts, Japan and CERN, Switzerland.</li>
            </ul>
            <h1 className="font-bold text-4xl mt-5">Nurturing Global Citizenship Through International Student Exchanges</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p>At CHIREC, we foster global citizenship through international student exchanges. Our students travel to different countries for immersive cultural experiences and host foreign students in Hyderabad to share and build cultural understanding. We have been organising exchange programmes since 2011, enabling our students to interact with peers from around the world.</p>
            <p>Now, as part of the Cognita family with over 100+ schools across Asia, the UK, Europe, Latin America, the Middle East and North America, we plan to build a more diverse and extensive exchange programme for students to build and maintain international connections.</p>
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/DSC_1259.jpg" alt="" className="mt-5"/>
            <h1 className="font-bold text-4xl mt-5">Staging the Prestigious Model United Nations & Tedx Events</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p>Since its inception in 2012, CHIREC MUN is one of the most eagerly awaited Model United Nations in Hyderabad, with over 500 delegates from all over India vying to attend. Every year, this student-led initiative offers a captivating platform to discuss and debate a diverse spectrum of issues ranging from health emergencies to political, economic, and sociological perspectives.</p>
            <p className="mt-5">With the aim to inspire, imagine and impact, our students organise the prestigious annual TedxYouth event that showcases speakers who are prominent figures in their diverse fields, talented students and, above all, people with big ideas about how they change the world, one idea at a time.</p>
            <p className="mt-5">At CHIREC, our commitment to developing responsible global citizens and fostering global mindedness is at the core of our educational philosophy.</p>
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Images-2.png" alt="" className="mt-5"/>
        </div>
        <div className="w-250 m-20 mx-auto flex">
            {/* <HiOutlineArrowSmallLeft className="text-6xl"/> */}
            <div className="overflow-hidden rounded-lg shadow-lg flex m-5">
                <img
                    src={images[currentIndex]}
                    alt=""
                    className="object-cover transition-transform duration-300 rounded-full w-50 h-50 m-10"
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
        <BFooter/>
        <Footer/>
    </div>
}
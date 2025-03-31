import { BFooter } from "../components/BFooter"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import NavBar from "../NavBar/NavBar"
import SideBar from "../NavBar/SideBar"

export const OurCharacterCompass = () => {
    return <div>
        <Navbar/>
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/04/Our-Character-Compass-1.png" alt="" className="h-130 mt-30" />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-6xl">Our Character Compass</h1>
        </div>
        <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-20">
            <p className="m-10 p-10 text-xl">At CHIREC, the journey we embark upon with each child is meticulously crafted towards a horizon of success. For over three decades, we’ve ardently worked to sculpt young minds, ensuring they bloom into the best versions of themselves. Guiding this transformative journey is our Character Compass, an embodiment of the ideals and virtues that we instill in our learners, ensuring that they not only excel academically but also evolve as compassionate and responsible citizens of India and the world.</p>
        </div>
        <div className="flex justify-center">
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Decor.png" alt="" className="" />
        </div>
        <h1 className="text-4xl font-bold text-center m-10">At CHIREC, Your Child will be a:</h1>
        <div className="grid grid-cols-2 ml-50 mr-50">
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/i-vDWzMc3-L.jpg" alt="" className="rounded-lg " />
            <div className="m-10 p-10">
                <h1 className="font-bold text-2xl">Responsible Citizen</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>
                    Our students are educated on their pivotal role in the community, emphasising empathy, ethical values, and the importance of contributing positively to society.</p>
            </div>

            <div className="m-10 p-10">
                <h1 className="font-bold text-2xl">Compassionate & Caring Individual</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>By exposing our students to various social and environmental issues in our own community, they cultivate deep respect and passion to address these issues through creative solutions.</p>
            </div>
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/respect.png" alt="" className="m-10" />

            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Images-1.png" alt="" className="mt-10 w-full h-100" />
            <div className="m-10 p-10">
                <h1 className="font-bold text-2xl">Lifelong Learner</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>CHIREC students exhibit insatiable curiosity and drive, ensuring their journey of discovery and growth is enriched by the academic curriculum and engaging co-curricular activities, extending into their adult lives.</p>
            </div>

            <div className="m-10 p-10">
                <h1 className="font-bold text-2xl">Tech-Savvy Innovator</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>Leveraging technology for effective learning, CHIREC students are always at the forefront of the digital age, ready to harness its potential.</p>
            </div>
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Images-1-1.png" alt="" className="m-10" />

            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/leaders.png" alt="" className="mt-10" />
            <div className="m-10 p-10">
                <h1 className="font-bold text-2xl">Confident Leader</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>Through exposure to global perspectives and active engagement with India’s and international challenges, our students grow into self-assured leaders, ready to make a positive mark on their own country and the world.</p>
            </div>

            <div className="m-10 p-10">
                <h1 className="font-bold text-2xl">Goal-Setter</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>Each student’s potential is nurtured and fostered, empowering them to set ambitious goals and relentlessly chase them.</p>
            </div>
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/basketball.png" alt="" className="m-10" />

            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/D8A2197.jpg?resize=768,513" alt="" className="mt-10 rounded-lg" />
            <div className="m-10 p-10">
                <h1 className="font-bold text-2xl">Collaborative Team Player</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>Whether in academics, sports, or community service, our students have internalised the immense power and benefits of teamwork and collaboration.</p>
            </div>

        </div>
        <h1 className="ml-50 mr-50 font-bold text-xl mt-10">What sets CHIREC apart is our unwavering commitment to ensuring our students make the most of their formative years. Through a rare blend of curriculum, co-curricular activities, and a strong value system, we enable students to make a positive difference in the world.</h1>
        <BFooter />
        <Footer />
    </div>
}
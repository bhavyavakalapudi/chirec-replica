import { useState } from "react"
import { Navbar } from "../components/Navbar"
import { BFooter } from "../components/BFooter"
import { Footer } from "../components/Footer"

export const StudentAchievement = () => {
    const [aOpen, setAOpen] = useState(false)
    const [arOpen, setArOpen] = useState(true)
    const [SOpen, setSOpen] = useState(false)
    const [COpen, setCOpen] = useState(false)

    const Cards = ({ image, text, descp }) => {
        console.log(image)
        console.log("hello")
        return <div>
            <img src={image} alt="" className="rounded-lg" />
            <h1 className="font-bold text-xl pt-2">{text}</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p className="">{descp}</p>
        </div>
    }

    return <div>
        <Navbar />
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/04/Student_achievements.jpg" alt="" className="h-130 mt-30" />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-6xl">Student Achievements</h1>
        </div>
        <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-20">
            <h1 className="font-bold text-4xl text-center pt-10">Laurels</h1>
            <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p className="m-10 pb-10 text-xl">At CHIREC, our commitment to excellence is ingrained in the numerous laurels garnered by our students over the years. We provide a nurturing environment for learners to explore their potential and reach the pinnacle of success. Our students boast remarkable achievements in international, national, and state-level competitions across academic, sports, co-curricular, and extracurricular activities. This snapshot of our students’ myriad accomplishments not only showcases their prowess, but also signifies the assurance of a brilliant future for every student entering through the doors of CHIREC.</p>
        </div>
        <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-20 grid grid-cols-4 p-5 rounded-lg">
            <button onClick={() => {
                setAOpen(true)
                setArOpen(false)
                setSOpen(false)
                setCOpen(false)
            }} className={`hover:text-red-500 cursor-pointer ${aOpen === true ? 'text-red-500' : 'text-black'}`}>Academics</button>
            <button onClick={() => {
                setAOpen(false)
                setArOpen(true)
                setSOpen(false)
                setCOpen(false)
            }} className={`hover:text-red-500 cursor-pointer ${arOpen === true ? 'text-red-500' : 'text-black'}`}>Arts</button>
            <button onClick={() => {
                setAOpen(false)
                setArOpen(false)
                setSOpen(true)
                setCOpen(false)
            }} className={`hover:text-red-500 cursor-pointer ${SOpen === true ? 'text-red-500' : 'text-black'}`}>Sports</button>
            <button onClick={() => {
                setAOpen(false)
                setArOpen(false)
                setSOpen(false)
                setCOpen(true)
            }} className={`hover:text-red-500 cursor-pointer ${COpen === true ? 'text-red-500' : 'text-black'}`}>Co-curriulars</button>
        </div>
        {aOpen && (
            <div className="mt-10 mr-50 ml-50 mb-20 grid grid-cols-3 gap-4">
                <div>
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/09/Kian-Varma.png" alt="" className="rounded-lg" />
                    <h1 className="font-bold text-xl pt-2">Kian Varma wins First Place at Talkalogy (JAM) Event</h1>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p className="">Kian Varma from Grade 6 won First Place at the Talkalogy (JAM) event during Meridian School’s Inter-School</p>
                </div>
                <div>
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/08/Divya-Loka.png" alt="" className="rounded-lg" />
                    <h1 className="font-bold text-xl pt-2">Diya Loka’s E-Cycl Initiative: A Remarkable Achievement</h1>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>Diya Loka from IB11 educated over 1,000 students and recycled a ton of e-waste through her E-cycl initiative</p>
                </div>
                <div>
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/08/Nihar-Jain.png" alt="" className="rounded-lg" />
                    <h1 className="font-bold text-xl pt-2">Celebrating Excellence: Nihar Jain’s Crest Gold Award Triumph</h1>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>Honoured with the Crest Gold Award for his outstanding project work on Blood Cell Detection using Deep</p>
                </div>
                <div>
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/stem-315x240.png" alt="" className="rounded-lg" />
                    <h1 className="font-bold text-xl pt-2">Ruhaan of Stage 8 achieves a remarkable feat!</h1>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>In a proud achievement, Ruhaan of Stage 8 won an Online Robotics Contest organized by STEMpedia</p>
                </div>
                <div>
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/3-4-315x240.png" alt="" className="rounded-lg" />
                    <h1 className="font-bold text-xl pt-2">AISSCE Results 2023</h1>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>Once again, we`re thrilled to share the incredible success of our top-performing students in the AISSCE</p>
                </div>
                <div>
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/2-2-315x240.png" alt="" className="rounded-lg" />
                    <h1 className="font-bold text-xl pt-2">AISSE Results 2023</h1>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>Scaling the zenith of success, our students bagged exceptional scores in their AISSE 2023</p>
                </div>
                <div>
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/1-4-315x240.png" alt="" className="rounded-lg" />
                    <h1 className="font-bold text-xl pt-2">IBDP Results 2023</h1>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>It`s time to celebrate our incredible IBDP students and their remarkable achievements, the Batch of 2023</p>
                </div>
                <div>
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/robo-315x240.png" alt="" className="rounded-lg" />
                    <h1 className="font-bold text-xl pt-2">CHIRECians qualify for the School of the Future Conference 2023</h1>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>We are delighted to announce that five outstanding team projects by CHIRECians have been selected to be</p>
                </div>
                <div>
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/4-2.png" alt="" className="rounded-lg" />
                    <h1 className="font-bold text-xl pt-2">IGCSE Results 2023</h1>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>CHIREC proudly reveals an extraordinary display of academic achievement</p>
                </div>
                <div>
                    <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/new-website-student-achievement-2-315x240.png" alt="" className="rounded-lg" />
                    <h1 className="font-bold text-xl pt-2">CHIREC students win the World Robotics Olympiad nationals</h1>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>At the World Robotics Olympiad regionals in Hyderabad, Charvi  from Grade 11 and SriTejas Mohan  from</p>
                </div>
            </div>

        )}
        {arOpen && (
            <div className="mt-10 mr-50 ml-50 mb-20 grid grid-cols-3 gap-4">
                <Cards image='https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/09/Merutsav-Competition_hindi-315x240.jpg'  text='Hindi Advertisement Team wins Second Place at Merutsav' descp='The Hindi Advertisement Team from Grades 9 and 10 won Second Place at the Merutsav Competition. Their' /> 
                <Cards image='https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/09/Burrakatha-Performance.png' text='Burrakatha Performance wins First Place at Merutsav' descp='Students from Grades 7 and 8 secured First Place at the Merutsav Competition with their outstanding'/>
                <Cards image='https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/Picture1-e1704342598363-315x240.png' text='Our little brave heart winning hearts!' descp='Yashvi from PPI won a place in the Top 100 in the Fancy Dress Competition' />
                <Cards image='https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images-10.png' text='Radiant Rhapsody fest – CHIREC Band wins the Band Competition!' descp='Congratulations to the students from both CAIE and CBSE sections for securing the first prize in the Radiant'/>
                <Cards image='https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images-8-1.png' text='Winners of Cognita Photography Contest' descp='“In photography, there is a reality so subtle that it becomes more real than reality’’ — Alfred Stieglitz. A big'/>
                <Cards image='https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images-7-1.png' text='Sinchan Sahoo – Cognita Photography contest winner' descp='We are so delighted to share that our student, Sinchan Sahoo of Stage 8 C, won the first prize in the Cognita Asia'/>
                <Cards image='https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images-6-2.png'  text='Hitisha bags 4th position internationally in the Global Art Singapore Contest!' descp='Congratulations to Hitisha Pottangi of Grade VII A for winning in the 17th anniversary Art Contest organised by' /> 
                <Cards image='https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images-5-1.png' text='Elluri Srinitha Reddy bags the 3rd prize at The Print’s Campus Voice Opinion Writing Contest.' descp='Elluri Srinitha Reddy of Grade 12D at CHIREC bags the 3rd prize at The Print’s Campus Voice Opinion Writing'/>
                <Cards image='https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images-3-2.png' text='Esha is the youngest winner among expert writers and poets at the contest.' descp='“Dandelions and Dynamite”, a poem composed by Esha Shah of Class 10, is one of the 5 winning entries at the TW' />
                <Cards image='https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images-2-1.png' text='Rohan S. and Karthik P. won the International Competition for Young Debaters' descp='Rohan Seelamsetty and Karthik Palakodeti of Stage 10 win the International Competition for Young'/>
                <Cards image='https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images-1-1.png' text='Students win prizes at the Annual Art Festival organized by Glendale Academy' descp='Kartika Balaram of Grade 5B, Aadi Rammani of Grade 7A and Shriyaa Sagaram of Grade 10A secured the'/>
                <Cards image='https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images-11.png' text='Nyla Siddique wins the second prize in the Pioneer Fantasy Writing Competition' descp='Nyla Siddique of Stage 7C won the second prize in the Pioneer Fantasy Writing Competition, 2021. Her fantasy'/>
                <Cards image='https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images-7.png' text='Rapolu Kruthika won the Third Prize at World Dancers Online International Dance Contest 2021' descp='Rapolu Kruthika from Grade 9 won the Third Prize at Season 2 of the World Dancers Online International Dance'/>
            </div>
        )}
        {SOpen && (
            <div>
                Hey
            </div>
        )}
        {COpen && (
            <div>
                Hey
            </div>
        )}
        <BFooter />
        <Footer />
    </div>
}
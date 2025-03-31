import { BFooter } from "../components/BFooter"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const LearningSupport = () => {
    return <div>
        <Navbar />
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Learning-Support.png" alt="" className="h-130 mt-30" />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-6xl">Learning Support</h1>
        </div>
        <div className="text-left ml-70 mr-60 mt-10">
            <div className="mt-5">
                <h1 className="font-bold text-4xl">Here to Help</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p className="">Whatever their level of ability and attainment, many of our boys and girls need additional learning support at some stage in their long school careers so that they can thrive and flourish at CHIREC and in later life. Early intervention is important, but it is never too late for us to help them and their parents to address their needs, however large or small (including last-minute examination revision classes!). Most students do not need learning support for their entire time with us, but even the most successful students can do with a little help from time to time. Others may have more profound and complex special educational needs that require long term support and more specialised interventions.</p>
                <p className="">We are here to help them all.</p>
                <p className="">Teachers across various curricula and departments are trained to provide academic support to students of different age groups, based on their varying needs and we have teams of specialised counselors.</p>
                <h1 className="font-bold text-4xl mt-10">Enrichment Classes</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p className="">CHIREC provides an enrichment programme for boys and girls who have a special aptitude for particular fields, either academic or co-curricular. Gifted learners, who learn quickly and recall facts and concepts easily, often enter classrooms with prior knowledge of content that is advanced for their age. At CHIREC, we believe that exceptional girls and boys require adjustments to their education in the form of advanced intellectual stimulation to help them reach their fullest potential and to prevent possible underachievement.</p>
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/DSC02648-copy1-1.jpg" alt="" className="mt-10" />
                <h1 className="font-bold text-4xl mt-10">Additional Help</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p className="">At CHIREC, we recognise the importance of paying special attention to struggling learners who might not be performing at the same levels as their peers. We use personal interactions to offer constructive feedback, and extra instruction in areas of need. These after-school classes are designed to give students the tools they need to gain a more complete grasp of difficult ideas, allowing them to work at par with their classmates. CHIREC creates a positive and safe environment for all students, and we encourage them to ask as many questions as necessary and apply creative teaching and learning methodologies to help them understand a subject or concept, rather than feel pressured to learn everything immediately.</p>
                <h1 className="font-bold text-4xl mt-10">Remedial Classes</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p className="">Boys and girls with learning difficulties and those who are differently abled possess the same psychological needs and characteristics as their peers. Learning disabilities are often wrongly attributed to laziness, and students who encounter academic failure for too long may appear to lose interest in learning or be confused by schoolwork. CHIREC recognises and offers these students opportunities to succeed and regain their confidence and motivation. We understand that girls and boys with learning disabilities require evidence-based instruction and educational support.</p>
                <p>CHIREC International has an in-house Remedial Counselling Department with trained counsellors who work with students to thoroughly understand their strengths and weaknesses. Timely and consistent support can enable those with learning disabilities to become successful students and adults.</p>
                <h1 className="font-bold text-4xl mt-10">Behavioural Counselling</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>All human behaviour has an origin. The behavioural counsellors at CHIREC foster positive student behaviour to provide a safe and active learning environment for all our boys and girls. They work very closely in tandem with the teachers, parents, and sometimes with remedial counsellors to:</p>
                <ul className="list-disc pl-5 space-y-2 mt-5">
                    <li>Conduct individual as well as group counselling sessions on various relevant age-specific issues that encourage girls and boys to find comfort through talking openly.</li>
                    <li>Design and implement positive behaviour and intervention support plans for individual boys and girls in collaboration with teachers.</li>
                    <li>Observe students in both formal classroom settings and various informal settings to get a better perspective on our children’s behaviour concerning others.</li>
                </ul>
                <h1 className="font-bold text-4xl mt-10">Supportive Counselling</h1>
                <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                <p>CHIREC believes that the mental and emotional well-being of boys and girls lies at the heart of a successful education. With the aim of ensuring that every student feels safe and supported, the counselors at CHIREC provide necessary professional care to any student needing guidance.</p>
                <p>Through one-on-one sessions, the counselors:</p>
                <ul className="list-disc pl-5 space-y-2 mt-5">
                    <li>develop a supportive and trusting relationship, where they actively listen to students’ concerns.</li>
                    <li>assist them in working through challenges in the best interest of their personal and social development.</li>
                    <li>serve as a mediator between a student, their parents, and teachers, as needed to bridge the gap.</li>
                </ul>
            </div>
        </div>
        <BFooter/>
        <Footer/>
    </div>
}
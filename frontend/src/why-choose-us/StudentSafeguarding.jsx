import { BFooter } from "../components/BFooter"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const StudentSafeguarding = () => {

    return <div>
        <Navbar/>
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Culture-of-Care-1.png" alt="" className="h-130 mt-30"/>
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-6xl">Student Care & Safeguarding</h1>
        </div>
        <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-20">
            <p className="m-10 p-7 text-xl">CHIREC is dedicated to fostering a strong culture of care and safety for all students, with a comprehensive framework of School Health and Safety Guidelines, Safeguarding Principles, Wellbeing Practices, and compliance with internationally benchmarked standards from the Cognita Group, as well as the requirements of examination boards such as CBSE and IB, along with Indian Government regulations.</p>
        </div>
        <div className="flex justify-center">
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/image-31.jpg" alt="" className=""/>
        </div>
        <div className="text-left ml-60 mr-50">
            <h1 className="font-bold text-4xl">Safeguarding</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p>CHIREC is committed to the physical and mental health and safety of all our pupils, including CBSE and international students. We maintain a set of rigorous policies and an airtight framework to ensure that students are protected from harm, abuse, or neglect. Our Safeguarding Policy is designed to have systems and procedures in place, utilising all available resources to safeguard the best interests of every child.</p>
            <h1 className="font-bold text-4xl mt-5">Health and Safety</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p>Our Health & Safety Policy is a comprehensive framework of rules, policies and procedural guidelines enshrining preventive measures that aim to create a safe environment for children, starting from their homes to their schools and back. This includes, but is not limited to, safety from any kind of violence, disaster, online threats, fire, food quality and transportation.</p>
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/D8A1785.jpg" alt="" />
            <h1 className="font-bold text-4xl mt-5">Wellbeing</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p>Wellbeing lies at the heart of a child’s successful learning and prepares them to navigate through a dynamic and volatile world.</p>
            <p className="mt-10">Derived from the Cognita Be Well Charter, wellbeing at CHIREC focuses on 6 contributors:</p>
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Screenshot-2023-10-02-at-14.52.20.webp?w=1024" alt="" className="mx-auto"/>
            <p>Wellbeing programmes at CHIREC create a living and breathing culture of wellbeing in which students, parents and educators collaborate to build positive habits that enhance student motivation, as well as their physical and emotional wellness.</p>
            <p className="mt-5">These programmes include weekly wellness activities that specifically address each element of wellbeing, ensuring it becomes an integral part of our school culture. We also participate in the annual ‘Global Be Well Day,’ a flagship event dedicated by Cognita Schools worldwide to practice and promote wellness elements in the lives of all students, including CBSE and international students.</p>
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/image-31.png" alt="" className="mt-10"/>
            <h1 className="font-bold text-4xl mt-10">Social and Emotional Learning</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p>SEL is a systemic, school-wide, age-appropriate programme and process through which children and adults build the competencies of self-awareness, self-management, social awareness, relationship skills, and responsible decision-making. The SEL curriculum at CHIREC helps students achieve personal and collective goals that enhance learning and attainment, regulate their emotions and impulses, feel and show empathy for others, share perspectives, establish and maintain supportive relationships, and make ethically responsible and caring decisions. Students participating in SEL programmes show improved classroom behaviour, an increased ability to manage stress and depression, and enhanced attitudes towards themselves, others, and school.</p>
            <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/image-33.png" alt="" className="mt-10"/>
            <h1 className="font-bold text-4xl mt-10">Board & Government Compliance</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p>All Health & Safety, Safeguarding, Wellbeing, and SEL policies developed in this framework are in compliance with Cognita Group’s requirements, CBSE, Cambridge and IBDP boards and Indian Government regulations, including the Protection of Children from Sexual Offences (POCSO) Act and the Prevention of Sexual Harassment (PoSH) at Workplace Act of India. The school also has a dedicated team of Safeguarding Leads led by Cognita’s Regional Safeguarding Lead as well as Safety Clubs, Health & Wellness activities, and SEL Committees consisting of students, parents, and teachers.</p>
        </div>
        <BFooter/>
        <Footer/>
    </div>
    
}
import { BFooter } from "../components/BFooter";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar"
import { PiGlobeSimpleLight } from "react-icons/pi";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export const CognitaFamily = () => {
    const navigate = useNavigate();

    return <div>
        <Navbar />
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Our-Cognita-Family.png" alt="" className="h-130 mt-30" />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-6xl">Our Cognita Family</h1>
        </div>
        <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-20">
            <h1 className="font-bold text-4xl text-center pt-10">About Cognita</h1>
            <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p className="m-10 p-7 text-xl">CHIREC International School is part of Cognita, an extraordinary family of diverse yet connected schools spanning 16 countries that share one common purpose: to deliver an outstanding holistic education that will enable our students to thrive in a rapidly evolving world. With over 100 schools in Asia, Europe, Latin America, Middle East and North America, Cognita employs 15,000 teaching and support staff in the care and education of more than 85,000 students.</p>
        </div>
        <div className="bg-gray-100 grid grid-cols-7 text-center">
            <div className="m-10">
                <h1 className="text-blue-600 text-4xl font-bold">100 +</h1>
                <p>Schools</p>
            </div>
            <div className="flex items-center">
                <div className="h-30 border-l-1 border-blue-500"></div>
            </div>
            <div className="m-10">
                <h1 className="text-blue-600 text-4xl font-bold">16</h1>
                <p>Countries</p>
            </div>
            <div className="flex items-center">
                <div className="h-30 border-l-1 border-blue-500"></div>
            </div>
            <div className="m-10">
                <h1 className="text-blue-600 text-4xl font-bold">85,000</h1>
                <p>Students</p>
            </div>
            <div className="flex items-center">
                <div className="h-30 border-l-1 border-blue-500"></div>
            </div>
            <div className="m-10">
                <h1 className="text-blue-600 text-4xl font-bold">15,000</h1>
                <p>Employees</p>
            </div>
        </div>
        <div className="text-left ml-70 mr-60 mt-10">
            <p>Together, Cognita schools provide a truly holistic education based on rich and varied experiences that focus on social, emotional, physical and cognitive learning. This results in excellent academic outcomes for our students, who are also equipped with the agency, adaptability and positive attitudes to set them up for success in our fast changing world.</p>
            <h1 className="font-bold text-4xl mt-10">Academic Excellence</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p className="mt-5">Continuous improvement is at the heart of the Cognita Way. Our Global Education Team comprises of leaders based in each of Cognita’s four global regions and together they utilise evidence – from within our group as well as external sources – to drive outstanding educational practice across all our schools.</p>
            <p className="mt-5">Our global diversity fuels our innovation. We take our best and share it so everyone can improve. A key benefit of being part of the global Cognita family is the opportunity to connect and collaborate with peers across the world.</p>
            <p className="mt-5">For example, our partnership with University College London (UCL) sees teachers undertake research projects linked to personalising learning for students. This work has a high impact on student progress and agency.</p>
            <h1 className="font-bold text-4xl mt-10">Wellbeing</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p className="mt-5">Wellbeing forms an integral part of a Cognita Education. We believe that every child has the right to flourish emotionally, socially, and physically and that the education we provide must help them achieve this in a sustainable and meaningful way.</p>
            <p className="mt-5">The mental and physical health challenges facing children and young people today are well documented, and the evidence showing the correlation between wellbeing and learning is clear.</p>
            <p className="mt-5">Research also emphasizes the importance of a proactive approach to wellbeing in schools, embedding a culture that promotes ownership and prioritization of wellbeing for all members of its community.</p>
            <p className="mt-5">Cognita’s annual Global Be Well Day each September sees Chirec join together with all other Cognita schools to collapse the curriculum for an entire day to focus solely on wellbeing. Based on the contributors to wellbeing outlined in our Be Well Charter, schools enjoy a range of activities to remind their communities about what they need to do to look after their own wellbeing.</p>
            <h1 className="font-bold text-4xl mt-10">Governance</h1>
            <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p className="mt-5">Cognita is a global system of schools. Each Cognita school offers a distinctive curriculum and approach, tailored to the individual context.</p>
            <p className="mt-5">Group-wide policies and expectations are set by the parent company (Cognita Holdings Ltd.). These policies and expectations relate to standards for Student Safeguarding, Health & Safety, Financial Management, Data Protection as well as governance and responsibility for operational oversight of the regions (which is devolved to the Regional Chief Executive Officer).</p>
            <p className="mt-5">Governance oversight of Student Safeguarding and Health & Safety is executed through the deployment of Independent Reviewers. The Group expects each school to ensure clear systems for listening to and responding to members of the school community, this includes use of annual Voice of the Student, Parent and Employee surveys.</p>
            <p className="mt-5">Cognita has four Group senior executives:</p>
            <ul className="list-disc pl-5 space-y-2 mt-5">
                <li>Group Chief Executive Officer</li>
                <li>Group Chief Finance Officer</li>
                <li>Group Chief Education Officer</li>
                <li>Group General Counsel</li>
            </ul>
            <p className="mt-5">Cognita is headquartered in London.</p>
            <p className="mt-5">Cognita governs and manages each school via one of four regions. Each region has its own Chief Executive Officer and regional team. Responsibility for operational oversight and governance of schools is devolved from the parent company to the Regional Chief Executive Officer. Each region has published documents that provide clarity for the delegated governance relationship between their regional team and their schools. The Regional Chief Executive Officer is accountable to the Group Chief Executive.</p>
            <p className="mt-5">Each Head of School is accountable to the Regional Chief Executive Officer.</p>
            <div className="grid grid-cols-3">
                <a href="https://www.cognita.com/" className="bg-white text-blue-600 border-10 border-white shadow-2xl hover:cursor-pointer rounded-lg flex items-center m-10"><PiGlobeSimpleLight /> Cognita Webiste</a>
                <a href="https://www.facebook.com/CognitaSchools/" className="bg-white text-blue-600 border-10 border-white shadow-2xl hover:cursor-pointer rounded-lg flex items-center m-10"><TiSocialFacebookCircular /> Cognita Facebook</a>
                <a href="https://x.com/cognitaschools" className="bg-white text-blue-600 border-10 border-white shadow-2xl hover:cursor-pointer rounded-lg flex items-center m-10"><RiTwitterXFill /> Cognita on Twitter</a>
            </div>
        </div>
        <BFooter />
        <Footer />
    </div>
}
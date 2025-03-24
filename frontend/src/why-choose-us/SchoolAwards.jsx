import { Navbar } from "../components/Navbar"
import { TfiCup } from "react-icons/tfi";
import { RiMedalFill } from "react-icons/ri";
import { RiMedal2Fill } from "react-icons/ri";
import { BFooter } from "../components/BFooter";
import { Footer } from "../components/Footer";

export const SchoolAwards = () => {
    return <div>
        <Navbar />
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/01/School-Awards-1.png" alt="" className="h-130 mt-30" />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-4xl">School Awards</h1>
        </div>
        <div className="m-20">
            <h1 className="text-center font-bold text-5xl">CHIREC is renowned globally for its pioneering approaches and innovative practices</h1>
            <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <div className="flex justify-around">
                <div className="bg-blue-500 h-40 rounded-lg w-60 flex justify-around">
                    <div className="bg-white rounded-full mt-15 mb-15 flex justify-center items-center">
                    <TfiCup className="m-2 text-2xl text-blue-500"/>
                    </div>
                    <div className="">
                        <h3 className="text-white mt-10">Hyderabad's</h3>
                        <h1 className="text-white font-bold text-6xl flex justify-center"># 1</h1>
                    </div>
                </div>
                <div className="bg-blue-500 h-40 rounded-lg w-60 flex justify-around">
                    <div className="bg-white rounded-full mt-15 mb-15 flex justify-center items-center">
                    <RiMedalFill className="m-2 text-2xl text-blue-500"/>
                    </div>
                    <div className="">
                        <h3 className="text-white mt-10">Telengana's</h3>
                        <h1 className="text-white font-bold text-6xl flex justify-center"># 1</h1>
                    </div>
                </div>
                <div className="bg-blue-500 h-40 rounded-lg w-60 flex justify-around">
                    <div className="bg-white rounded-full mt-15 mb-15 flex justify-center items-center">
                    <RiMedal2Fill className="m-2 text-2xl text-blue-500"/>
                    </div>
                    <div className="">
                        <h3 className="text-white mt-10">India's</h3>
                        <h1 className="text-white font-bold text-6xl flex justify-center"># 1</h1>
                    </div>
                </div>
            </div>
            <p className="text-center mt-10 mb-10">IIRF (2024-25) & EducationWorld (2023-24) India School Rankings</p>
            <div className="lg:grid grid-cols-2 pl-50 pr-50 pt-10 place-items-center">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images-16.png" alt="" className="rounded-lg w-100 h-70 md:pb-4" />
                <div className="lg:pl-3">
                    <p className="font-bold text-2xl">Ranked among India’s Top 10 Schools for 8 consecutive years</p>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>The school has consistently been recognised as one of India’s Top 10 Co-ed and International Day Schools by EducationWorld for the past 8 consecutive years. The school has also been ranked the #1 Co-Ed and International Day School in Hyderabad and Telangana by EducationWorld since 2016, reflecting its unwavering commitment to excellence. CHIREC is also recognised nationally as one of India’s best schools for its academic reputation, curriculum and pedagogy, co-curricular education, sports education, wellbeing services, community service and more.</p>
                </div>
            </div>
            <div className="lg:grid grid-cols-2 pl-50 pr-50 pt-10 place-items-center">
                <div className="pr-3 md:mb-4">
                    <p className="font-bold text-2xl">Ranked amongst Telangana’s Best Pre-Schools since 2015</p>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>
                    In the realm of early education, CHIREC’s Jubilee Hills and Gachibowli branches have been consistently ranked among the best proprietary preschools in Telangana since 2015. Jubilee Hills secured the top position, while Gachibowli is consistently placed in the top 6.
                        </p>
                </div>
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Images-1-4.png" alt="" className="rounded-lg w-100 h-70" />
            </div>
            <h1 className="text-center font-bold text-4xl m-10 ml-50 mr-50">Awards to School Leaders for their impact in the Education sector</h1>
            <div className="grid grid-cols-2 ml-50 mr-50">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/edu.png" alt="" />
                <div className="">
                    <h1 className="font-bold text-2xl">Education Icon of the Year</h1>
                    <p>Dr Peter McLaughlin, CEO</p>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>CHIREC’s CEO, Dr. Peter McLaughlin was awarded the Education Icon of the Year 2021 and recognised as an Education Stalwart by Education Today. He also created and implemented a transformative 10-year Strategic Development Plan for The Doon School – which Fortune magazine credited him with ‘reinventing’.</p>
                </div>
                <div className="mt-10">
                    <h1 className="font-bold text-2xl">Most Influential Principal</h1>
                    <p>Ms. Iffat Ibrahim, Principal-Emeritus</p>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>Principal, Ms. Iffat Ibrahim was bestowed the Impact Leaders Award 2022, Most Influential Principal of an Indian School by the World Education Congress and the “Acharya Devo Bhava” by Brainfeed Magazine 2016 in commendation of her teaching practices and pedagogical innovation, motivation to learners and outstanding services in education.</p>
                </div>
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/most.png" alt="" className="m-10"/>
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/icon.png" alt="" className="mt-10"/>
                <div className="mt-10">
                    <h1 className="font-bold text-2xl">Icon of the Year</h1>
                    <p>Ms. Ratna Reddy, Founder</p>
                    <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
                    <p>CHIREC’s Founder Ms. Ratna Reddy has been conferred numerous awards such as the Lifetime Achievement Award, Icon of the Year, Most Inspirational Leader Award by EducationWorld, Education Today, White Page India and AsiaOne for her extraordinary contribution to the growth and development of school education in Hyderabad and Telangana, and particularly for her commitment to adopting and integrating the best international pedagogies and practices within Indian K-12 education.</p>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Decor.png" alt=""  className="mb-15"/>
            </div>
            <h1 className="text-center font-bold text-4xl m-10 ml-50 mr-50">CHIREC recognised for setting new benchmarks in Education</h1>
            <hr class="w-10 h-1 my-4 mx-auto bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p className="m-10 ml-50 mr-50">CHIREC’s exceptional performance and leadership in the education sector have set new benchmarks and earned recognition from prestigious publications and organisations, including Education World, Brainfeed Magazine, and Education Today. These accolades highlight CHIREC’s status as one of the top schools in India, reaffirming its dedication to providing outstanding education. Some of the awards received over the years are listed below:</p>
        </div>
        <BFooter/>
        <Footer/>
    </div>
}
import React from 'react'
import { Navbar } from '../components/Navbar'
import { BFooter } from '../components/BFooter'
import { Footer } from '../components/Footer'

const AdmissionProcess = () => {
  return (
    <div>
        <Navbar/>
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Admission-Process-1.png" alt=""className="h-130 mt-30" />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-6xl">Admission Process</h1>
        </div>
        <h1 className='text-center text-5xl font-bold mt-20 mr-50 ml-50 mb-20'>Your Next Steps Into a Positive, Caring & Engaging Learning Community</h1>
        <div className="grid grid-cols-3 m-20">
            <div className="mr-10 ml-10">
                <h1 className="text-8xl text-green-600 text-center">1</h1>
                <p className="text-center font-bold">Contact Us Form</p>
                <p>Please complete the contact us form to begin your admission enquiry at CHIREC! Kindly fill in the form with the campus and curriculum that you wish to apply for, and our team will contact you for the next steps.</p>
            </div>
            <div className="mr-10 ml-10">
                <h1 className="text-8xl text-green-600 text-center">2</h1>
                <p className="text-center font-bold">Attend Counselling</p>
                <p>You will receive a call from our admissions counsellor, who will provide you with all the details about the school and address any questions you may have regarding the curriculum and the admission process.</p>
            </div>
            <div className="mr-10 ml-10">
                <h1 className="text-8xl text-green-600 text-center">3</h1>
                <p className="text-center font-bold">Register</p>
                <p>After learning about the school and its philosophy, we request you to register your application with us for which the link will be shared by the admissions team. Kindly note that registration is not an assurance of admission. Admission is offered based on the number of vacant seats available.</p>
            </div>
            <div className="mr-10 ml-10">
                <h1 className="text-8xl text-green-600 text-center">4</h1>
                <p className="text-center font-bold">Attend 1:1 Interaction</p>
                <p>After we receive your submitted application, you will be invited to a one-on-one interaction session with a member of the academic team to further understand the curricula and ask any questions you may have about your child’s education and future. We request both parents and the child to attend the interaction session. For Class 6 and above, students may have to take a proficiency test based on the recommendation by the academic team.</p>
            </div>
            <div className="mr-10 ml-10">
                <h1 className="text-8xl text-green-600 text-center">5</h1>
                <p className="text-center font-bold">You Accept</p>
                <p>Selected applicants will receive their Provisional Acceptance into CHIREC. An offer letter will be sent to both the parents for confirmation. Please note - the school’s decision will be final in all matters pertaining to securing admission at CHIREC.</p>
            </div>
            <div className="mr-10 ml-10">
                <h1 className="text-8xl text-green-600 text-center">6</h1>
                <p className="text-center font-bold">We Confirm Admission</p>
                <p>Once the admission formalities are completed, parents will receive confirmation. Congratulations and welcome to the CHIREC Family!</p>
            </div>
        </div>
        <p className='font-bold  mt-20 mr-70 ml-70 mb-20'>In case of any questions, you can email us at admissions@chirec.ac.in, and we will be happy to assist you. Our working hours are from 9:00 a.m. to 3:00 p.m. from Monday to Saturday.</p>
        <div className="bg-gray-100 mt-20 mr-50 ml-50 mb-20">
            <h1 className="font-bold text-4xl text-center pt-10">More about us</h1>
            <hr class="w-10 h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
            <p className="m-10 pb-10 text-xl">The following video will give you a peek into what makes CHIREC an award-winning school. Our commitment to overall excellence that goes beyond academic rigour to offer numerous opportunities for growth in Co-curricular Activities, Fine Arts, Performing Arts, Sports, Community Service and opportunities to engage in internationally acclaimed events is what makes us unique.</p>
        </div>
        <div className='flex justify-center'>
        <iframe width="900" height="415" src="https://www.youtube.com/embed/qw3CQuq9Ye4?si=UtZWlj-qTR6reCj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <BFooter/>
        <Footer/>
    </div>
  )
}

export default AdmissionProcess
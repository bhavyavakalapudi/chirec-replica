import React from 'react'
import { Navbar } from '../components/Navbar'
import { BFooter } from '../components/BFooter'
import { Footer } from '../components/Footer'

const PaymentProcess = () => {
  return (
    <div>
        <Navbar/>
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Payment-Process.png" alt="" className="h-130 mt-30" />
        <div className="flex items-center justify-center h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <h1 className="font-bold text-6xl">Payment Process</h1>
        </div>
        <div className="mt-20 mr-50 ml-50 mb-5">
            <p className="mt-20 mr-50 ml-50 mb-5 text-xl">CHIREC uses Jodo as the mode of fee payment for the convenience of parents. The platform provides a unique, easy, reliable, and secure process to schedule your fee instalments on due dates through Jodo Flex. A detailed fee payment guide outlining the steps of registration will be e-mailed to the parents at the time of admission. It is a simple one-time registration, which takes less than 2 minutes, where parents set up autopay (ECS or eNACH) to pay the fee instalments on due dates.</p>
            <p className="mr-50 ml-50 font-bold">The due dates for term fee payments are as follows:</p>
        </div>
        <div className='grid grid-cols-4 mr-70 ml-100 text-center w-170'>
            <h1 className='bg-blue-200 font-bold mr-0.5 p-2'>Particulars</h1>
            <h1 className='bg-blue-200 font-bold  mr-0.5 p-2'>Term 1</h1>
            <h1 className='bg-blue-200 font-bold  mr-0.5 p-2'>Term 2</h1>
            <h1 className='bg-blue-200 font-bold  mr-0.5 p-2'>Term 3</h1>
            <h1 className='bg-gray-100 mr-0.5 p-2'>All Grades</h1>
            <h1 className='bg-gray-100 mr-0.5 p-2'>15th of March</h1>
            <h1 className='bg-gray-100 mr-0.5 p-2'>10th of August</h1>
            <h1 className='bg-gray-100 mr-0.5 p-2'>10th of Dec</h1>
        </div>
        <img src="https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/11/Decor.png" alt="" className='mx-auto m-10'/>
        <div className="text-left ml-70 mr-60 mt-10">
        <h1 className="font-bold text-4xl mt-10">Payment Guidelines</h1>
        <hr class="w-10 h-1 my-4 bg-green-600 border-0 rounded-sm md:my-5 dark:bg-green-600" />
        <ul className="list-disc pl-5 space-y-2 mt-5">
                <li>All payments should be made through Jodo Flex by registering via CHIREC MCB App or through its web portal only.</li>
                <li>Fee payment through cash or any other modes will not be accepted. Jodo Flex will be the only fee payment mode.</li>
                <li>The payment details along with Unique ID of the student must be shared to the school by sending an email to office.kp@chirec.ac.in.</li>
                <li>The receipt generated for the payment of each term fee must be retained by the parent. A receipt of the total fee paid will not be provided at the end of the year.</li>
                <li>No GST is currently applicable and hence the same will not be included in the fee. Should the government impose GST/any other tax in future, in that case the same shall be charged to the parents.</li>
                <li>The School Management reserves the right to alter or modify the fee structure of the school as deemed appropriate and in alignment with relevant Government Orders.</li>
            </ul>
        </div>
        <BFooter/>
        <Footer/>
    </div>
  )
}

export default PaymentProcess
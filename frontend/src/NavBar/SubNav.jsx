import React, { useState } from 'react'
import { PiGreaterThanThin } from 'react-icons/pi'

const SubNav = ({ item }) => {
    const [show, setShow] = useState(false)

    console.log(item)
    return (
        <div className='relative group'>
            <div className='flex'>
                <button onClick={()=>{
                    setShow(!show)
                }} className="hover:cursor-pointer px-4 py-2 text-sm font-medium">
                    {item.title}
                </button>
                {item.icon ? <PiGreaterThanThin className="mt-2.5 ml-5" /> : null}
            </div>
            <div className="cursor-pointer absolute bg-white shadow-lg rounded-md w-48 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {item.subNav.map((item, index) => {
                    return (
                        <div className='flex'>
                            {/* <h1>Hello</h1> */}
                            <h1>{item.title}</h1>
                            {item.icon ? <PiGreaterThanThin className="mt-2.5 ml-5" /> : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SubNav
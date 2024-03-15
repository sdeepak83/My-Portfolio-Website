import React from 'react'
import SectionTitle from '../../Components/SectionTitle'
import { ContactUs } from '../../Components/Email'


const Contact = () => {
    const StudentDetail =
    {
        Name: "Deepak Singh",
        Email: "tdeepak2406@gmail.com",
        Gender: "Male",
        Country: "India"
    }

    return (
        <div className='pt-10 px-5 sm:px-0'>

            <SectionTitle title={"Say Hello"} />

            <div className='flex justify-between items-center w-full my-10 sm:flex-col font-semibold'>
                <div>
                    <p className='text-third'>{"{"}</p>
                    {
                        Object.keys(StudentDetail).map((key) => (
                            <p key={key}>
                                <span>{key}:-</span>
                                <span>{StudentDetail[key]}</span>

                            </p>
                        ))
                    }
                    <p className='text-third'>{"}"}</p>
                </div>

                <div className=' md:w-[2/3] w-[40%] sm:w-full  sm:pt-5'>
                    <ContactUs />
                </div>
            </div>

        </div>
    )
}

export default Contact

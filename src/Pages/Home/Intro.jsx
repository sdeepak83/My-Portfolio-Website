import React from 'react'
import HomepagePic from '../../assets/LandingPage.jpg'
import { IoMdDownload } from "react-icons/io";
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
    return (
        <div className=' flex justify-between items-center pb-10 pt-36  md:pt-18 md:pb-16 sm:flex-none sm:pt-16 '>
            <div className=' w-3/1'>
                <h5 className=' font-bold  text-2xl  text-third my-5'>Hi, I Am </h5>


                <h1 className=' text-6xl font-bold text-secondry my-5 md:text-4xl sm:text-2xl'>Deepak Singh </h1>





                <TypeAnimation
                    sequence={[

                        'I am a frontend Developer',
                        1000,
                        'I am a full-Stack Developer',
                        1000,
                        'I am a backend Developer',
                        1000,
                        'I am a Software Developer',
                        1000
                    ]}
                    wrapper="span"
                    speed={220}
                    className=' text-[2em] sm:text-[1em] font-semibold'

                    repeat={Infinity}
                />






                <p className='text-xl my-10 w-2/3 md:w-full sm:w-full'> Currently, I am working on MERN stack development to enhance my development skills. I build the things for web </p>

                <div className=" pt-20">

                    <a href="" download='Deepakresume.pdf' className='flex items-center gap-2 bg-secondry font-semibold hover:bg-green-600 justify-center w-1/3 md:w-2/3 sm:w-2/3 p-2 rounded' ><IoMdDownload className='' />Resume </a>
                </div>

            </div>
            <div className=''>
                <img src={HomepagePic} className='  h-88 w-96 rounded-full object-cover sm:h-full sm:w-120 sm:rounded-full sm:pb-40 ' alt=" Deepak  Pic" />
            </div>
        </div>
    )
}

export default Intro

import React from 'react'
import SectionTitle from '../../Components/SectionTitle'


const About = () => {
    const Skills = ["HTML", "CSS", "JavaScript", "React", "Talwind-Css", "NodeJs", "MongoDB", "Git", "Git-Hub"]
    return (
        <div className=' active:bg-red-400 px-5 sm:px-0'>

            <div className='mb-8'>
                <SectionTitle title={"About"} />
            </div>
            <div className='flex  justify-between h-96 items-center  sm:flex-col sm:h-full'>
                <div className=' size-96 sm:w-full  -z-10'>

                    <dotlottie-player src="https://lottie.host/372418f4-73d3-4eef-891b-d34dd90d0005/mlYGerP995.json" background="transparent" speed="1" autoplay ></dotlottie-player>

                </div>
                <div className='  w-2/ sm:w-full'>
                    <p>
                        Hello I am Deepak Singh.  I am purshuing B.Tech in computer science .I am a final year Student Currently I am working on Mern Stack Tecnology
                    </p>

                    <p className='my-12 sm:my-4'>
                        I am seeking opportunities to grow and develop my skills in web development, and I am open to full-time, part-time, or internship positions. If you are looking for a hardworking, motivated, and reliable web developer, please feel free to connect with me. I am excited to explore new opportunities and make a positive impact in the industry.

                    </p>

                    <p>
                        I have a knack for analyzing challenges and developing effective solutions. My problem-solving skills extend from identifying intricate bugs to architecting scalable software systems
                    </p>
                </div>
            </div>
            <h1 className=' font-semibold text-lg text-purple-700 sm:my-5'>Here are a few technologies I have been working with recently - </h1>

            <div className='flex gap-12 pb-7 items-center border-b-2 border-black  w-full my-10 flex-wrap  justify-around md:my-20 md:gap-3 md:pb-4 sm:my-6'>
                {
                    Skills.map((item, index) => (
                        <div key={index} className='bg-secondry  font-semibold  px-5  py-2 rounded-md '>{item}</div>
                    ))
                }
            </div>
        </div >
    )
}

export default About

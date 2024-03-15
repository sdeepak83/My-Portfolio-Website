import React, { useState } from 'react'
import SectionTitle from '../../Components/SectionTitle'
import ProjectsData from '../../Resorces/Project'


import { Link } from 'react-router-dom'


const Projects = () => {
    const [selecteditemIndex, setselectedItemIndex] = useState(0);



    return (
        <div>
            <div className='pt-10 pb-20 px-5 sm:px-0'>
                <SectionTitle title={"Projects"} />
                <div className="flex py-7 gap-10 sm:flex-col ">
                    <div className='flex flex-col gap-5  border-l-2 border-green-400 sm:flex-row sm:overflow-x-scroll sm:bg-pink-200 sm:pb-3'>
                        {
                            ProjectsData.map((project, index) => (
                                <div className='cursor-pointer  ' onClick={() => {
                                    setselectedItemIndex(index)
                                }} key={index}>


                                    <h1 className={` text-xl px-5 ${selecteditemIndex === index ? " font-semibold  border-l-4 border-black -ml-[3px]  py-1 bg-blue-500 text-white" : ""}`}>{project.title}</h1>
                                </div>
                            ))
                        }

                    </div>

                    <div>



                        <img src={ProjectsData[selecteditemIndex].image} alt="Project Image" />








                    </div>


                    <div className='flex flex-col gap-5' >

                        <button className='font-semibold  bg-purple-500 hover:bg-purple-700 py-2 hover:text-white  rounded' >
                            <Link to={ProjectsData[selecteditemIndex].link} target='_blank' >Visite the Project</Link></button>

                        <button className='font-semibold  min-w-24 bg-purple-500 hover:bg-purple-700 py-2 hover:text-white  rounded' >
                            <Link to={ProjectsData[selecteditemIndex].GithubLink} target='_blank' >GitHub Link</Link></button>






                        <p>{ProjectsData[selecteditemIndex].description}</p>
                    </div>


                </div>

            </div>




        </div>
    )
}

export default Projects

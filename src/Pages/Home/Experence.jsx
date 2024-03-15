import React, { useState } from 'react'
import SectionTitle from '../../Components/SectionTitle'
import Experences from '../../Resorces/Experences'
const Experence = () => {
    const [selecteditemIndex, setselectedItemIndex] = useState(0)
    return (
        <div className='pt-10'>
            <SectionTitle title={"Experences"} />
            <div className="flex py-7 gap-10 pt-12  ">
                <div className='flex flex-col gap-5   border-l-2 border-green-400'>
                    {
                        Experences.map((Experence, index) => (
                            <div className='cursor-pointer  ' onClick={() => {
                                setselectedItemIndex(index)
                            }} key={index}>


                                <h1 className={` text-xl px-5 ${selecteditemIndex === index ? " font-semibold text-yellow-700 border-l-4 border-yellow-700 -ml-[3px] bg-slate-200 py-1" : ""}`}>{Experence.session}</h1>
                            </div>
                        ))
                    }

                </div>




                <div className='flex flex-col gap-5' >
                    <h1 className=' font-bold text-purple-700' >{Experences[selecteditemIndex].skills}</h1>
                    <h1 className='font-semibold text-red-600'>{Experences[selecteditemIndex].Projects}</h1>
                    <p>{Experences[selecteditemIndex].discription}</p>
                </div>


            </div>

        </div>

    )
}

export default Experence

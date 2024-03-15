import React from 'react'

const SectionTitle = ({ title }) => {
    return (
        <div className='flex items-center h-10 gap-10 pb-10 sm:pb-3 '>
            <h1 className=' text-3xl text-red-500 font-semibold'> {title}</h1>
            <div className='w-40 h-[2px] bg-red-500'></div>
        </div>
    )
}

export default SectionTitle

import React from 'react'

const Loader = () => {
    return (
        <div className='h-screen flex items-center justify-center  inset-0 bg-black fixed'>
            <div className='flex gap-5 text-7xl sm:text-3xl'>
                <h1 className=' text-secondry D'>D</h1>
                <h1 className='text-purple-500 S'>S</h1>
            </div>
        </div>
    )
}

export default Loader

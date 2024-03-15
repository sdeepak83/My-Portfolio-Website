import React from 'react'
import { NavLink } from 'react-router-dom'
import SocialMedia from './SocialMedia'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    let NavBar = [
        {
            name: 'Home',
            route: '/'

        },
        {
            name: 'Projects',
            route: 'projects'

        },
        {
            name: 'About',
            route: 'about'

        },
        {
            name: 'Contact',
            route: 'contact'

        },

    ]
    return (
        <div className='flex  justify-between px-9 pb-5  pt-2 items-center h-[10vh]  w-screen flex-wrap md:px-5 md:pb-2 fixed md:h-[10vh] sm:pb-2 sm:h-[8vh] bg-primary shadow-md'>



            <div>

                <h1 className=' text-2xl font-bold  md:text-xl  '> <span className=' font-logo fristName'>Deepak</span> <span className=' text-secondry secondName'>Singh</span></h1>
            </div>

            <div className='flex  font-semibold text-third  
              flex-wrap sm:hidden'>
                {
                    NavBar.map((item, index) => (
                        <h1 key={index} className=' mr-10 md:mr-5 '><NavLink className='  hover:text-secondry 
                        aria-[current=page]:text-secondry
                        navbar' to={item.route}>{item.name}</NavLink></h1>
                    ))
                }

            </div>

            <div>
                <SocialMedia />
            </div>
        </div>

    )
}

export default Header

import React from 'react'
import Header from '../../Components/Header'
import Intro from './Intro'
import About from './About'
import Experence from './Experence'
import Projects from './Projects'
import Contact from './Contact'
import Footer from '../../Components/Footer'

const Home = () => {
    return (
        <div className='w-full '>
            <Header />
            < div className=' px-20 md:px-5'>
                <Intro />
                <Projects />
                <About />
                <Experence />
                <Contact />


            </div>
            <Footer />
        </div>
    )
}

export default Home

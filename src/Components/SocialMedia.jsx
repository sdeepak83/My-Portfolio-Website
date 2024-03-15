import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SocialMedia = () => {
    return (
        <div className='flex  gap-4 font-semibold text-third  '>


            <Link to="https://github.com/sdeepak83" target='_blank ' className=' hover:text-purple-800'><h1 className=' text-xl'><FaGithub /></h1></Link>


            <Link to="https://www.linkedin.com/in/deepak-singh-28b33b271/" target='_blank ' className=' hover:text-blue-600'><h1 className=' text-xl'><FaLinkedin /></h1></Link>


            <Link to="https://www.instagram.com/deepak8_3/" target='_blank ' className=' hover:text-orange-800'><h1 className=' text-xl'><FaInstagram /></h1></Link>




        </div>
    )
}

export default SocialMedia

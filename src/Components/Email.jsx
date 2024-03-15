import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
    let [sucess, setsucess] = useState("")
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();




        emailjs
            .sendForm('service_nerhfpt', 'template_1jkdnte', form.current, {
                publicKey: 'tT0ae4b0HjUffLjAJ',
            })
            .then(
                () => {

                    setsucess("Email send sucess fully")
                    form.current.reset();


                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='bg-purple-500 py-10 px-5 rounded-md '>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                <h1 className=' relative h-9   mr-5 text-white'>{sucess}</h1>
                <label className='my-3 text-black font-semibold' htmlFor='name'>Name:</label>


                <input type="text" id='name' name="to_name" placeholder='Enter Your Name ' className=' outline-none font-semibold text-black py-2 text-md px-2' autoComplete='off' />


                <label className='my-3 text-black font-semibold' htmlFor='email'>Email:</label>
                <input type="email" id='email' name="from_name" placeholder='Enter Your Email' className=' font-semibold text-black py-2 text-md px-2 outline-none' autoComplete='off' />



                <label className='my-3 text-black font-semibold' htmlFor='message'>Message:</label>
                <textarea name="message" id='message' placeholder='Enter Your Message' className=' font-semibold text-black py-2 text-md px-2 outline-none' autoComplete='off' />


                <input type="submit" value="Send" className=' bg-[#FF0075] mt-8 py-2 cursor-pointer font-semibold hover:bg-red-600 text-white' />
            </form>
        </div>
    );
};
import React from 'react'
import '../../globals.css'
import { FaLinkedin, FaXTwitter, FaInstagram, FaDiscord, FaTelegram, FaEnvelope } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='z-40 fixed flex flex-row justify-center top-4 text-3xl max-w-3xl mx-auto gap-8 p-4 rounded-full border-4 border-lime-400 backdrop-blur-lg'>
            <a href='https://www.linkedin.com/in/rhmmmmmm/'><FaLinkedin /></a>
            <a href='https://twitter.com/_rhmmmmmm_'><FaXTwitter /></a>
            <a href='https://www.instagram.com/rhmmmmmm'><FaInstagram /></a>
            <a href='https://discord.com/rhmmmmmm'><FaDiscord /></a>
            <a href='https://t.me/RHM1212'><FaTelegram /></a>
            <a href='mailto:rhmmmmmm@rhmmmmmm.xyz'><FaEnvelope /></a>
        </div>
    </div>
    
  )
}

export default Socials
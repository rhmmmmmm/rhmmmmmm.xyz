import React from 'react'
import '../../globals.css'
import Image from 'next/legacy/image'
import ppn from '../../assets/ppn.png'
import onelove from '../../assets/onelove.png'
import firley from '../../assets/firley.png'
import web5 from '../../assets/brocode.png'
import { TfiWorld } from "react-icons/tfi";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Community = () => {
  return (
    <div className='pb-10 '>
        <div>
          <h3 className='text-3xl font-bold'>artist <span>collectives</span></h3>
          <p className='text-md pt-5 leading-8 max-w-3xl mx-auto'>
            Spanning various mediums and united by unique creative goals, these artist collectives are where I belong.
          </p>
        </div>
        <div className='lg:flex gap-10 justify-center items-center'>
          <div className='p-5 rounded-xl my-5'>
            <div className='flex justify-center items-center'><Image src={ppn} width={100} height={100}/></div>
            <div className='text-3xl flex justify-center gap-3 py-1'>
              <a href='https://pixelpalettenation.com/'><TfiWorld /></a>
              <a href='https://twitter.com/PixelPalettePPN'><FaXTwitter /></a>
              <a href='https://instagram.com/pixelpalettenation'><FaInstagram /></a>
            </div>
          </div>
          <div className='p-5 rounded-xl my-5'>
            <div className='flex justify-center items-center'><Image src={firley} width={100} height={100}/></div>
            <div className='text-3xl flex justify-center gap-5 py-1'>
              <a href='https://firley.xyz/'><TfiWorld /></a>
              <a href='https://www.twitter.com/Firleyxyz'><FaXTwitter /></a>
              <a href='https://www.instagram.com/Firleyxyz'><FaInstagram /></a>
            </div>
          </div>
          <div className='p-5 rounded-xl my-5'>
            <div className='flex justify-center items-center'><Image src={web5} width={100} height={100}/></div>
            <div className='text-3xl flex justify-center gap-5 py-1'>
              <a href='https://www.linkedin.com/company/bro-code-art/'><FaLinkedin /></a>
              <a href='https://twitter.com/BroCodeArt'><FaXTwitter /></a>
              <a href='https://www.instagram.com/brocodeart/'><FaInstagram /></a>
            </div>
          </div>
          <div className='p-5 rounded-xl my-5'>
            <div className='flex justify-center items-center'><Image src={onelove} width={100} height={100}/></div>
            <div className='text-3xl flex justify-center gap-5 py-1'>
              <a href='https://onelovedao.org/'><TfiWorld /></a>
              <a href='https://twitter.com/OneLoveArtDAO'><FaXTwitter /></a>
              <a href='https://www.instagram.com/oneloveartdao/'><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Community
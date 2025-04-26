import React from 'react'
import '../../globals.css'
import Image from 'next/legacy/image'
import hero from '../../assets/profile.png'

const Me = () => {
  return (
    <div className='mt-20 pt-50 pb-20'>
    <div className='md:flex gap-10 items-center justify-center py-5'>
      <div className='relative rounded-full w-80 h-80 overflow-hidden md:w-96 md:h-96 hover:border-l-2 border-lime-400 duration-200'>
        <Image src={hero} layout='fill' objectFit='cover'/>
      </div>
      <div>
        <h2 className=' text-3xl py-1 font-bold'><span>Prasham Gautam</span></h2>
        <h3 className='text-2xl py-1'>Also, known as <span>rhmmmmmm</span></h3>
        <p className=' text-md pt-5 leading-8 max-w-3xl'>I am a <span>Higher education marketing expert</span> by day and a <span>AI / Mixed Media Artist</span> by night Specializing in creating unique and innovative projects using artificial intelligence and blockchain technology. </p>
      </div>
    </div>
    <div className='md:flex gap-10 items-top justify-center'>
      <div className='text-left pb-5'>
      <span className='text-2xl '>exhibited</span>
      <ul className='list-disc list-inside decoration-lime-400 text-md '>
        <li className='py-1'><span>Art Basel Miami 2023</span>[ part of #StratosphereBySabet ]</li>
        <li className='py-1'><span>CRYPTO WINTER WONDERLAND 2023</span> by Beeple Studios</li>
        <li className='py-1'><span>NFT NYC 2024</span></li>
      </ul>
      </div>
      <div className='text-left pb-5'>
      <span className='text-2xl'>achievements</span>
      <ul className='list-disc list-inside decoration-lime-400 text-md'>
      <li className='py-1'><span>Artist of the month Oct 2023</span> Pixel Palette Nation</li>
        <li className='py-1'><span>Genesis Artist</span> Vitruveo Chain</li>
      </ul>
      </div>
    </div>
    <div className='lg:flex gap-10 text-left md:text-center md:justify-center'>
      <div className=' pb-5'>
      <span className='text-2xl'>Upcoming exhibition</span>
      <ul className='md:text-left list-disc list-inside decoration-lime-400 text-md'>
        <li className='py-1'>NFT NYC 2025</li>
      </ul>
      </div>
    </div>
  </div>
  )
}

export default Me

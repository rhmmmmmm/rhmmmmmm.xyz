import React from 'react'
import '../../globals.css'
import Image from 'next/legacy/image'
import hero from '../../assets/profile.png'

const Me = () => {
  return (
    <div className='mt-20 pt-50 pb-20'>
    <div className='relative mx-auto rounded-full w-80 h-80 mt-5 overflow-hidden md:h-96 md:w-96 hover:border-r-4 border-lime-400 duration-200'>
      <Image src={hero} layout='fill' objectFit='cover'/>
    </div>
    <div className='text-center p-10'>
      <h2 className='text-3xl py-1 font-bold md:text-5xl'><span>Prasham Gautam</span></h2>
      <h3 className='text-2xl py-1 md:text-3xl'>Also, known as <span>rhmmmmmm</span></h3>
      <p className='text-md pt-5 leading-8 md:text-lg max-w-3xl mx-auto'>I am a <span>Higher education marketing expert</span> by day and a <span>AI / Mixed Media Artist</span> by night Specializing in creating unique and innovative projects using artificial intelligence and blockchain technology. </p>
    </div>
    <div className='lg:flex gap-10 items-top justify-center'>
      <div className='text-left pb-10'>
      <span className='text-2xl md:text-3xl'>exhibited</span>
      <ul className='list-disc list-inside decoration-lime-400 text-md md:text-lg '>
        <li className='py-1'><span>Art Basel Miami 2023</span>[ part of #StratosphereBySabet ]</li>
        <li className='py-1'><span>CRYPTO WINTER WONDERLAND 2023</span> by Beeple Studios</li>
      </ul>
      </div>
      <div className='text-left pb-10'>
      <span className='text-2xl md:text-3xl'>achievements</span>
      <ul className='list-disc list-inside decoration-lime-400 text-md md:text-lg '>
      <li className='py-1'><span>Artist of the month Oct 2023</span> Pixel Palette Nation</li>
        <li className='py-1'><span>Genesis Artist</span> Vitruveo Chain</li>
      </ul>
      </div>
    </div>
    <div className='lg:flex gap-10 items-top justify-center'>
      <div className=' pb-10'>
      <span className='text-2xl md:text-3xl'>Upcoming exhibition</span>
      <ul className='text-left list-disc list-inside decoration-lime-400 text-md md:text-lg '>
        <li className='py-1'>NFT NYC 2024</li>
      </ul>
      </div>
    </div>
  </div>
  )
}

export default Me
import React from 'react'
import './globals.css'
import Me from './components/Me/Me'
import Community from './components/Community/Community'
import Portfolio from './components/Portfolio/Portfolio'
import Socials from './components/Socials/Socials'
import Footer from './components/Footer/Footer'


export default function Home() {
  return (
    <main className='px-10 md:px-20 lg:px-40 text-center'>
      <Socials />
      <Me />
      <Portfolio />
      <Community />
      <Footer />
    </main>
  )
}

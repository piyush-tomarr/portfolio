import React from 'react'
import Hero from '../Components/Hero'
import About from './About'
import Navbar from '../Components/Navbar'
import Skills from '../Components/Skills'
import Contact from './Contact'

const Home = () => {
  return (
   <>
   <div className="relative min-h-screen w-full bg-red-600 text-white overflow-hidden isolate">
    <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Contact/>
   </div>
   
   </>
  )
}

export default Home
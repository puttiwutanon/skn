import { useState } from 'react'
import './App.scss'
import { Navbar } from './components/navbar'
import { Hero_section } from './components/hero-section'
import { About } from './components/about'
import { Work } from './components/work'
import { Faq } from './components/faq'
import { Footer } from './components/footer'
import { Contact } from './components/contact'

function App() {

  return (
    <>
      <Navbar/>
      <Hero_section/>
      <About/>
      <Work/>
      <Faq/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

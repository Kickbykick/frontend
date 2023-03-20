import React from 'react'
import Hero from './Hero'
import Clients from './Clients'
import About from './About'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Clients />
    </>
  )
}

export default HomePage

export const metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
};
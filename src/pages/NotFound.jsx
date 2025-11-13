import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main class="grid place-items-center min-h-[94vh]">
        <div className="text-center">
          <p className="text-9xl font-semibold text-accent">404</p>
          <h1 className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">Page not found</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
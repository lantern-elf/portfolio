import React from 'react'
import Navbar from '../components/Navbar'

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div class="grid place-items-center h-[92vh]">
        <div className="text-center">
          <p className="text-5xl font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page not found</h1>
        </div>
      </div>
    </>
  )
}

export default NotFound
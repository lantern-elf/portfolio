import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ConceptArt = () => {
  return (
    <>
      <Navbar conceptArt={true} />
      <main className='min-h-[94vh] grid lg:place-items-center' >
        <div className='lg:w-[50%] flex flex-col lg:gap-1 lg:py-1 sm:py-2'>
          <img src="image/concept-arts/shrine.png" alt="" className='select-none pointer-events-none' />
          <img src="image/concept-arts/landscapes 2025.png" alt="" className='select-none pointer-events-none' />
          <img src="image/concept-arts/painting study.png" alt="" className='select-none pointer-events-none' />
          <img src="image/concept-arts/painting study (2).png" alt="" className='select-none pointer-events-none' />
          <img src="image/concept-arts/swamp.png" alt="" className='select-none pointer-events-none' />
          <img src="image/concept-arts/Kolin's House.png" alt="" className='select-none pointer-events-none' />
          <img src="image/concept-arts/42025.png" alt="" className='select-none pointer-events-none' />
          <img src="image/concept-arts/Lantern reference sheet.png" alt="" className='select-none pointer-events-none' />
          <img src="image/concept-arts/25925.png" alt="" className='select-none pointer-events-none' />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ConceptArt
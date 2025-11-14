import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Illustration = () => {
  return (
    <>
      <Navbar illustration={true} />
      <main className='min-h-[94vh] grid lg:place-items-center' >
        <div className='lg:w-[50%] flex flex-col lg:gap-1 lg:py-1 sm:py-2'>
          <img src="image/illustrations/manatee.png" alt="" className='select-none pointer-events-none' />
          <img src="image/illustrations/painting study cerry.png" alt="" className='select-none pointer-events-none' />
          <img src="image/illustrations/kris  -  deltarune_.png" alt="" className='select-none pointer-events-none' />
          <img src="image/illustrations/Susie  -  Deltarune.png" alt="" className='select-none pointer-events-none' />
          <img src="image/illustrations/Ralsei  -  Deltarune.png" alt="" className='select-none pointer-events-none' />
          <img src="image/illustrations/silksong.png" alt="" className='select-none pointer-events-none' />
          <img src="image/illustrations/shore.png" alt="" className='select-none pointer-events-none' />
          <img src="image/illustrations/blue hour.png" alt="" className='select-none pointer-events-none' />
          <img src="image/illustrations/shadows.png" alt="" className='select-none pointer-events-none' />
          <img src="image/illustrations/A & 20.png" alt="" className='select-none pointer-events-none' />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Illustration
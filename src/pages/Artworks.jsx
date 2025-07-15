import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Artworks = () => {
  return (
    <>
      <Navbar artWorks={true} />
      <main className='min-h-[92vh]'>
        <section className='flex h-full flex-col items-center gap-4 lg:px-42 lg:py-5'>
          <div className='flex w-[95%] justify-center'>
            <img className='border' src="https://cdnb.artstation.com/p/assets/images/images/089/853/855/large/lantern-elf-shore.jpg?1752132886" alt="" />   
          </div>
          <div className='flex w-[95%] gap-3 justify-center'>
            <img src="https://cdnb.artstation.com/p/assets/images/images/082/683/727/large/lantern-elf-blue-hour.jpg?1733662254" alt="" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Artworks
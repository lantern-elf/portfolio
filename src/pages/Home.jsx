import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar home={true} />
      <main className='min-h-[94vh]'>
        {/* Landing Start */}
        <section className="bg-[url(/public/image/bg.webp)] justify-start flex flex-col bg-center bg-cover h-[94vh] md:place-content-center">
          <img className='hidden md:block lg:w-100 w-70 relative md:top-55 md:left-20' src="public/image/title.png" alt="" />
        </section>
        {/* Landing End */}
      </main>
      <Footer />
    </>
  )
}

export default Home
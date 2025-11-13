import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar home={true} />
      <main className='min-h-[94vh]'>
        {/* Landing Start */}
        <section className="bg-[url(/public/image/bg.png)] justify-end flex flex-col bg-center bg-cover h-[94vh] lg:place-content-center">
          {/* <div className="mx-auto w-screen max-w-screen-xl py-16 lg:py-32 place-items-end">
            <div className="lg:max-w-[50%] md:max-w-[50%] sm:max-w-full grid place-items-end">
              <span className="lg:text-7xl md:text-5xl text-3xl font-bold text-black text-shadow-2xs sm:text-center lg:text-right">
                Lantern Elf's Portfolio
              </span>
              <p className="mt-4 lg:text-[1.3em] text-pretty text-shadow-2xs text-black sm:text-[1em] /relaxed text-left">
                2D Artist, Concept Artist & Programmer
              </p>
              <div className="mt-4 flex gap-4 sm:mt-6">
                <a className="inline-block rounded cursor-pointer bg-accent px-3 py-2 font-medium transition-color shadow">
                  Explore
                </a>
              </div>
            </div>
          </div> */}
        </section>
        {/* Landing End */}
      </main>
      <Footer />
    </>
  )
}

export default Home
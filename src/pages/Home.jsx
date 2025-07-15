import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar home={true} />
      <main className='min-h-[92vh]'>
        <section className="justify-end flex flex-col bg-center bg-cover lg:grid lg:h-[92vh] lg:place-content-center">
          <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 lg:px-8 lg:py-32">
            <div className="max-w-prose text-left">
              <h1 className="text-5xl font-bold text-black text-shadow-2xs sm:text-7xl">
                Lantern's Portfolio
              </h1>
              <p className="mt-4 text-base text-pretty text-shadow-2xs text-black sm:text-lg/relaxed">
                2D Artist, Concept Artist & Programmer
              </p>
              <div className="mt-4 flex gap-4 sm:mt-6">
                <a className="inline-block rounded cursor-pointer bg-accent px-3 py-2 font-medium transition-color shadow">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
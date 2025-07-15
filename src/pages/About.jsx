import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <> 
      <Navbar aboutMe={true} />
      <main className='min-h-[92vh]'>
        <section className="flex flex-col justify-center max-w-xl h-[92vh] mx-auto my-auto px-4 text-gray-900 text-center">
          <img
            src="public/profile_picture.png"
            alt="Your Portrait"
            className="mx-auto mb-5 w-48 rounded-[50%]"
          />

          <h1 className="text-3xl font-bold mb-4">About Me</h1>

          <p className="text-base leading-relaxed mb-4">
            I'm Lantern, a 2D artist and game developer based on Indonesia.
            I enjoy creating arts, websites, and games.
          </p>

          <p className="text-base leading-relaxed mb-4">
            I'm currently working on my own game and open to new creative opportunities.
          </p>

          <p className="font-medium">
            Contact: <a href="mailto:lanternelf@gmail.com" className="text-blue-600 underline">lanternelf@gmail.com</a>
          </p>

          <div className="flex justify-center gap-4 mt-4 text-2xl">
            <a href="#" aria-label="Instagram" className="hover:text-blue-600"></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-600"></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-600"></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
    
  )
}

export default About

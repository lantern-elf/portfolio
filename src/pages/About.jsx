import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook, faBluesky, faItchIo } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <>
      <Navbar aboutMe={true} />

      <main className="min-h-[94vh] flex flex-col">
        <section className="max-w-5xl mx-auto px-6 md:px-20 lg:px-40 py-4 md:py-16 text-gray-900">
          <h5 className="text-[1.5rem] mb-4 relative left-0 text-center md:text-left md:left-45">About</h5>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
            {/* Profile image */}
            <img
              src="image/profile.jpg"
              alt=""
              className="w-40 h-40 object-cover shadow-2xs rounded-2xl"
            />

            {/* Text content */}
            <div className="text-[1rem] leading-relaxed">
              <p className="mb-4 text-justify">
                Hello, I am <strong>Lantern</strong>, a <strong>2D Artist</strong> and <strong>Concept Artist</strong> based in Indonesia.  
                I do art with expertise in illustrations and concept art.  
                I enjoy creating art and games that tell stories and spark imagination.
              </p>

              <p className="mb-4 text-justify">
                I am currently <strong>open to work</strong> opportunities  
                and enthusiastic about collaborating on exciting projects.  
                contact me or check here for <a className="underline" href="https://vgen.co/lantern_elf" target="_blank" rel="noreferrer">commissions 
                details</a>.
              </p>
              <p className="font-medium mb-6">
                <b>Contact: </b><a href="mailto:lanternelf@gmail.com" target='blank' className="underline">lanternelf@gmail.com</a>
              </p>

              {/* Social icons */}
              <div className="flex flex-wrap gap-5 md:justify-start justify-center">
                <a href="https://twitter.com/lantern_elf" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="text-2xl hover:text-blue-500 transition-colors" icon={faTwitter} />
                </a>
                <a href="https://instagram.com/lantern_elf" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="text-2xl hover:text-pink-500 transition-colors" icon={faInstagram} />
                </a>
                <a href="https://facebook.com/lanternelf" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="text-2xl hover:text-blue-700 transition-colors" icon={faFacebook} />
                </a>
                <a href="https://bsky.app/profile/lanternelf.bsky.social" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="text-2xl hover:text-sky-400 transition-colors" icon={faBluesky} />
                </a>
                <a href="https://lantern-elf.itch.io" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="text-2xl hover:text-[#fa5c5c] transition-colors" icon={faItchIo} />
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

export default About

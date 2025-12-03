import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ArtCard from '../components/ArtCard'

const Illustration = () => {

  const illustrations = [
    { image: "image/illustrations/icon6 lite.jpg", title: "Low Angle" },
    { image: "image/illustrations/low angle.webp", title: "Low Angle" },
    { image: "image/illustrations/sunken city.webp", title: "Sunken City" },
    { image: "image/illustrations/manatee.png", title: "Manatee" },
    { image: "image/illustrations/painting study cerry.png", title: "Painting Study - Cherry" },
    { image: "image/illustrations/kris  -  deltarune_.png", title: "Kris - Deltarune" },
    { image: "image/illustrations/Susie  -  Deltarune.png", title: "Susie - Deltarune" },
    { image: "image/illustrations/Ralsei  -  Deltarune.png", title: "Ralsei - Deltarune" },
    { image: "image/illustrations/silksong.png", title: "Silksong" },
    { image: "image/illustrations/shore.png", title: "Shore" },
    { image: "image/illustrations/blue hour.png", title: "Blue Hour" },
    { image: "image/illustrations/shadows.png", title: "Shadows" },
    { image: "image/illustrations/A & 20.png", title: "A & 20" },
  ];

  return (
    <>
      <Navbar illustration={true} />
      <main className='min-h-[94vh] grid lg:place-items-center'>
        <div className='lg:w-[45%] flex flex-col lg:gap-1 lg:py-1 sm:py-2'>
          {illustrations.map((art, index) => (
            <ArtCard key={index} image={art.image} title={art.title} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Illustration

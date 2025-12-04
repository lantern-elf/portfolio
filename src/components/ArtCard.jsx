import React, { useState } from 'react'

const ArtCard = ({ image, title }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center lg:rounded-2xl overflow-hidden shadow-2xs"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt="" className="select-none" />

      {/* {hover && (
        <div className="w-full text-center py-2">
          {title}
        </div>
      )} */}
    </div>
  )
}

export default ArtCard

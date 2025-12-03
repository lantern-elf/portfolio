import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArtCard from "../components/ArtCard";

const ConceptArt = () => {
  const conceptArts = [
    { image: "image/concept-arts/shrine.png", title: "Shrine" },
    { image: "image/concept-arts/landscapes 2025.png", title: "Landscape 2025" },
    { image: "image/concept-arts/painting study.png", title: "Painting Study" },
    { image: "image/concept-arts/painting study (2).png", title: "Painting Study 2" },
    { image: "image/concept-arts/swamp.png", title: "Swamp" },
    { image: "image/concept-arts/Kolin's House.png", title: "Kolin's House" },
    { image: "image/concept-arts/42025.png", title: "4/2025" },
    { image: "image/concept-arts/Lantern reference sheet.png", title: "Lantern Reference Sheet" },
    { image: "image/concept-arts/25925.png", title: "25925" },
  ];

  return (
    <>
      <Navbar conceptArt={true} />
      <main className="min-h-[94vh] grid lg:place-items-center">
        <div className="lg:w-[45%] flex flex-col lg:gap-1 lg:py-1 sm:py-2">
          {conceptArts.map((art, index) => (
            <ArtCard key={index} image={art.image} title={art.title} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ConceptArt;

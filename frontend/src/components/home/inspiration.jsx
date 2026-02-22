import React, { useState } from "react"
import { ChevronRight } from "lucide-react"

const Inspiration = () => {

  const [active, setActive] = useState(0)

  const images = [
    {
      src: "/photos/home/inspiration1.png",
      title: "Inner Peace",
      category: "01 — Bed Room"
    },
    {
      src: "/photos/home/inspiration2.png",
      title: "Modern Dining",
      category: "02 — Dining Room"
    },
    {
      src: "/photos/home/inspiration3.png",
      title: "Cozy Living",
      category: "03 — Living Room"
    },
    {
      src: "/photos/home/inspiration4.png",
      title: "Workspace",
      category: "04 — Office"
    }
  ]

  // Get 3 visible images circularly
  const visibleImages = [
    images[active % images.length],
    images[(active + 1) % images.length],
    images[(active + 2) % images.length]
  ]

  const nextSlide = () => {
    setActive(prev => prev + 1)
  }

  return (
    <section className="bg-pink-50 py-20 overflow-hidden">
      <div className="flex justify-between items-center max-w-8xl mx-auto px-15 ">

        {/* LEFT CONTENT */}
        <div className="max-w-md  ">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            50+ Beautiful rooms <br /> inspiration
          </h1>

          <p className="text-gray-700 mb-6">
            Our designer already made a lot of beautiful <br />prototype of rooms that inspire you.
          </p>

          <button className="bg-yellow-700 text-white px-6 py-3 hover:bg-yellow-800 transition">
            Explore More
          </button>
        </div>

        {/* CAROUSEL */}
        <div className="relative flex items-center gap-6 max-w-4xl ">

          {visibleImages.map((item, index) => {

            const isMain = index === 0

            return (
              <div
                key={index}
                className={`relative transition-all duration-500 ease-in-out
                ${isMain
                    ? "w-[400px] h-[500px] scale-105"
                    : "w-[300px] h-[420px] opacity-80"
                  }`}
              >
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* TEXT OVERLAY ONLY ON MAIN IMAGE */}
                {isMain && (
                  <div className="absolute bottom-6 left-6 flex items-stretch">

                    {/* Fixed White Box */}
                    <div className="bg-white/90 px-6 py-5 shadow-lg w-[190px] h-[80px] flex flex-col justify-center">
                      <p className="text-sm text-gray-500">
                        {item.category}
                      </p>

                      <h2 className="text-xl font-semibold mt-2">
                        {item.title}
                      </h2>
                    </div>

                    {/* Yellow Arrow Button */}
                    <button onClick={nextSlide} className="bg-yellow-700 text-white w-[40px] h-[30px] mt-12
                       flex items-center justify-center 
                       hover:bg-yellow-800 transition">
                      →
                    </button>

                  </div>
                )}


              </div>
            )
          })}

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute -right-12 top-1/2 -translate-y-1/2 
                       bg-white shadow-lg p-3 rounded-full 
                       hover:bg-gray-100 transition"
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>
    </section>
  )
}

export default Inspiration

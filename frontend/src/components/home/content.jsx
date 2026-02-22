import React from 'react'

const Content = () => {
    return (
        <section className="relative w-full h-screen">

            {/* Background Image */}
            <img
                src="/photos/home/cover.png"
                alt="cover"
                className="w-full h-full object-cover"
            />

            {/* Content Card */}
            <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-[#f4e7d4] p-10 rounded-lg shadow-lg max-w-md">

                <p className="text-sm tracking-widest text-gray-600 mb-2">
                    New Arrival
                </p>

                <h1 className="text-4xl font-bold text-yellow-700 leading-tight mb-4">
                    Discover Our <br /> New Collection
                </h1>

                <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut elit tellus, luctus nec ullamcorper mattis.
                </p>

                <button className="bg-yellow-700 text-white px-6 py-3 font-semibold">
                    BUY NOW
                </button>

            </div>
        </section>
    )
}

export default Content

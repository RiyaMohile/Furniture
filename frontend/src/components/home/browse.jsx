import React from 'react'

const Browse = () => {
    return (
        <div className=' py-16 text-center '>
            <h1 className='text-3xl font-bold mb-4'>Browse The Range</h1>
            <p className='text-gray-600 mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className='flex flex-row items-center justify-center gap-5'>
                <div>
                    <img src="/photos/home/browse1.png" alt="" className='w-72 object-cover rounded-lg' />
                    <h4>Dinning</h4>
                </div>
                <div>
                    <img src="/photos/home/browse2.png" alt="" className='w-72 object-cover rounded-lg' />
                    <h4>Living</h4>
                </div>
                <div>
                    <img src="/photos/home/browse3.png" alt="" className='w-72 object-cover rounded-lg' />
                    <h4>Bedroom</h4>
                </div>
            </div>
        </div>
    )
}

export default Browse

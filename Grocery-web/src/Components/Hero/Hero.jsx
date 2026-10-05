import React from 'react'
import Grocery from '../../assets/Grocery_image.png'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <section>
            <div className='max-w-350  min-h-screen px-10 mx-auto flex md:flex-row flex-col items-center md:pt-25 pt-35'>
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 px-5 py-2 text-lg rounded-full'>Exporte Best Quelity...</span>
                     <h1 className='md:text-7xl/20  text-5xl/14 font-bold mt-4'>
                        Tasty Organic <span className='text-orange-500'>Fruits</span> &<span className='text-orange-500'>Vegetables</span> <br/>In Your City
                    </h1>
                    <p className='md:text-lg text-md text-gray-600  max-w-132.5 mt-5 mb-10'>
                        Bed for a high content of beneficial substance.Our product are all fresh and healthy life.
                    </p>
                    <Button content='Shop Now'/>
                </div>
                <div className='flex-1'>
                  {/* imgae part */}
                   <img src={Grocery} alt="grocery"  />
                </div>
            </div>
        </section>
    )
}

export default Hero
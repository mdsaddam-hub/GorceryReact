import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaShieldAlt, FaSeedling } from "react-icons/fa";
import backet from '../../assets/Grocery_image.png'

const Value = () => {


    const leftValues = value.slice(0, 2).map((val) => {
        return (
            <div key={val.id} className='flex md:flex-row-reverse items-center gap-5'>
                <div>
                   <span className="flex items-center justify-center text-white text-3xl bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">{val.icon}</span>
                </div>

                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl'>{val.title}</h3>
                    <p className='text-zinc-600'>{val.description}</p>
                </div>
            </div>
        );
    });



        const rightValues = value.slice(2, 4).map((val) => {
        return (
            <div key={val.id} className='flex items-center gap-5'>
                <div>
                   <span className=" flex items-center justify-center text-white text-3xl bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">{val.icon}</span>
                </div>

                <div >
                    <h3 className='text-zinc-800 text-3xl'>{val.title}</h3>
                    <p className='text-zinc-600'>{val.description}</p>
                </div>
            </div>
        );
    });

    return (
        <section className='max-w-350 mx-auto px-10 py-10'>
            <div >
                <Heading Hilihgt='Our' content=' Values' />
                <div className='flex md:flex-row flex-col mt-4 mb-4'>
                    {/* left div */}
                    <div className='md:min-h-100 md:flex flex-col justify-between '>
                        {leftValues}
                    </div>
                    {/* img div */}
                    <div className='md:flex w-1/2 pl-20'>
                        <img src={backet} alt="Grocery" />
                    </div>
                    {/* right div */}
                    <div className='md:min-h-100 md:flex flex-col justify-between'>
                        {rightValues}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Value

const value = [
    {
        id: 1,
        title: 'Fresh Food',
        description: 'Our Comitment always fresh fruite and vigetable .',
        icon: <FaHeart />
    },
    {
        id: 2,
        title: 'Alaways Fresh',
        description: 'Our Comitment always fresh fruite and vigetable .',
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: 'Good Food',
        description: 'Our Comitment always fresh fruite and vigetable .',
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: 'Delicious Food',
        description: 'Our Comitment always fresh fruite and vigetable .',
        icon: <FaSeedling />
    },
]
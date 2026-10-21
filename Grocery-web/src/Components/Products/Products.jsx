import React, { useState } from 'react'
import Heading from '../Heading/Heading'

const Products = () => {
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeeFood']
    const[ActibTab, setActibTab]= useState('All');

    return (
        <section>
            <div className='max-w-350 mx-auto px-10 py-10'>
                <Heading Hilihgt='Our' content='Products' />
            </div>
            {/* Tabs */}
            <div className='flex gap-3 justify-center'>
                {categories.map(category=>{
                    return(
                        <button key={category} className={`px-5 py-2 text-lg rounded-lg 
                                                         ${ActibTab === category ? 'bg-linear-to-b from-orange-400 to-orange-500 text-white' : ' bg-zinc-100'}`}>
                            {category}
                        </button>

                    )
                })}

            </div>

        </section>
    )
}

export default Products

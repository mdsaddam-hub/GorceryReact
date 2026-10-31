import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductLIst/ProductList'
import ProductCard from '../ProductCard/ProductCard'

const Products = () => {
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeeFood']
    const [ActiveTab, setActiveTab] = useState('All');
    const renderCards = ProductList.slice(0,8).map((product) => {
        return (
            <ProductCard image={product.image} title={product.title} price={product.price} />
        )
    })


    return (
        <section>
            <div className='max-w-350 mx-auto px-10 py-10'>
                <Heading Hilihgt='Our' content='Products' />

                {/* Tabs */}
                <div className='flex gap-3 justify-center mt-7'>
                    {categories.map(category => {
                        return (
                            <button key={category} className={`px-5 py-2 text-lg rounded-lg 
                                                         ${ActiveTab === category ? 'bg-linear-to-b from-orange-400 to-orange-500 text-white' : ' bg-zinc-100'}`}
                                onClick={() => setActiveTab(category)}>
                                {category}
                            </button>

                        )
                    })}
                </div>
                <div className = "grid grid-cols-4 gap-5 mt-10">
                    {renderCards}
                </div>
            </div>

        </section>
    )
}

export default Products

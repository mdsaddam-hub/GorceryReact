import React from 'react'
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from '../Button/Button'

const ProductCard = ({image, title, price}) => {
    return (
        <div className= 'bg-zinc-100 rounded-3xl p-5'>
            <div className= 'flex justify-between  text-3xl text-orange-500 p-2 mb-3'>
                <span>
                    <FaHeart />
                </span>
                <button>
                    <FaPlus />
                </button>

            </div>
            <div className='w-full h-60 mb-5 rounded-3xl'>
                <img src={image}  className='w-full h-full mx-auto object-contain' />
            </div>

            <div className='text-center'>
                <h3 className='text-2xl font-bold'>{title}</h3>
                <p className='text-xl font-semibold'>${price.toFixed(2)}</p>
                <Button content='Shop Now' />
            </div>
        </div>
    )
}

export default ProductCard
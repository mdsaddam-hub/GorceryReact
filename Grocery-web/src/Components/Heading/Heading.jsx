import React from 'react'

const Heading = (props) => {
    return (
        <div className='w-fit mx-auto'>
            <h2 className='md:text-5xl text-4xl font-bold'>
                <span className='text-orange-500'>{props.Hilihgt} </span>
                {props.content}
            </h2>
            <div className='w-34 h-1 bg-orange-400 mt-6 ml-auto'></div>
        </div>
    )
}

export default Heading

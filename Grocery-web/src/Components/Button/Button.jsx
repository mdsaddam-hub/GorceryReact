import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-b from-orange-400 to-orange-500 px-10 py-3 rounded-full 
    text-white font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300
    cursor-pointer'>
        {props.content}
    </button>
  )
}

export default Button
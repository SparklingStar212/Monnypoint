import React from 'react'

const BlueButton = ({ title, element }) => {
  return (
    <button className='bg-blue-600 text-white text-base flex items-center gap-1 px-5 md:px-7 py-2 md:py-3 rounded-md mt-1.5'>{title}
    <div>{element}</div>
    </button>
  )
}

export default BlueButton
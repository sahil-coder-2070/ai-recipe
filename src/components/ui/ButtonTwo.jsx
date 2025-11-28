import React from 'react'

const ButtonTwo = ({btnname}) => {
  return (
     <button className=" cursor-pointer hover:-translate-y-0.75 transition-transform duration-200 bg-orange-600 rounded-full text-neutral-100 font-medium  shadow-neutral-400 shadow-md  border-neutral-300 border px-6 ">
      {btnname}
    </button>
    
  )
}

export default ButtonTwo
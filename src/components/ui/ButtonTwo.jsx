import React from 'react'

const ButtonTwo = ({btnname}) => {
  return (
     <button className=" cursor-pointer hover:-translate-y-0.75 transition-transform duration-200 backdrop-blur-2xl  rounded-2xl  shadow-neutral-300/10 shadow-md py-1 px-6 bg-white  border-neutral-200 border text-neutral-700">
      {btnname}
    </button>
  )
}

export default ButtonTwo
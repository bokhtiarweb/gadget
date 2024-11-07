import React from 'react'

export default function Header({title, description}) {
  return (
    <>
        <h2 className='text-3xl font-bold text-white text-center'>{title}</h2>
        <p className='text-white text-lg w-[80%] mx-auto mt-4'>{description}</p>
    </>
  )
}

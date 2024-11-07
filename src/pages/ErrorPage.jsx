import React from 'react'
import DynamiTitle from '../components/TItle'

export default function ErrorPage() {
  
  DynamiTitle('Not Found | Gadgets Heaven');

  return (
    <div className='text-center'>
        <h1 className='text-5xl font-bold text-red-600'>Not Fount 404</h1>
      
    </div>
  )
}

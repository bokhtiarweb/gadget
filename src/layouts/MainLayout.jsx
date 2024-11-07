import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { UsePorvider } from '../utils/UseContext'

export default function MainLayout() {

  return (
    <UsePorvider>
    <div className='max-w-[1380px] mx-auto pt-6'>
      <Navbar />

      <div className='w-[100%] mx-auto'>
      <Outlet />
      </div>

      <Footer />
    </div>
    </UsePorvider>
  )
}


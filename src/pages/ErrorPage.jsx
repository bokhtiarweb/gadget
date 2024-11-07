import React from 'react'
import DynamiTitle from '../components/TItle'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ErrorPage() {
  
  DynamiTitle('Not Found | Gadgets Heaven');

  return (
    <>
    <Navbar />
    <div className='bg-commonColor p-10'>
    <Header title='Statistics' description='Odit, illum praesentium soluta error repellat architecto placeat exercitationem repellendus rerum cupiditate velit ipsam qui voluptas sint iste hic aut! Ut, blanditiis!'/>
    </div>
    <div className='text-center'>
        <h1 className='text-5xl font-bold text-red-600 mt-10'>Not Fount 404</h1>
    </div>
    <Footer />
    </>
  )
}

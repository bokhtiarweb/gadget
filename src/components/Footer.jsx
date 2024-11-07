import React from 'react'

export default function Footer() {
  return (
    <div className='w-[90%] mx-auto mt-24'>

      <div className='grid lg:grid-cols-4 border-b border-[#ddd] pb-6'>
        <div></div>
        <div className='lg:col-span-3 text-center'>
          <h1 className='text-4xl font-bold'>Gadget Heaven</h1>
          <p className='text-[#09080F99] font-semibold text-lg mt-2'>Leading the way in cutting-edge technology and innovation.</p>
        </div>
      </div>

        <div className='grid lg:grid-cols-4 pt-10 pb-16'>
          <div></div>

          <div className='col-span-3'>
          <footer className="footer grid sm:grid-cols-2">
            <nav className='grid'>
              <h6 className="text-[#09080F] text-xl font-bold mb-4">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className='grid'>
              <h6 className="text-[#09080F] text-xl font-bold mb-4">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav className='grid'>
              <h6 className="text-[#09080F] text-xl font-bold mb-4">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
            </footer>
          </div>

        </div>
    </div>
  )
}

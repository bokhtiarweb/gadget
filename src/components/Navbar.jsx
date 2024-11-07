import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { useLocation } from 'react-router-dom'



export default function Navbar() {
const p = useLocation();

  const navItem = <>
    <NavLink to="/" className={`px-3 py-2 rounded-lg`}>Home</NavLink>
    <NavLink to="/statistics" className={`px-3 py-2 rounded-lg`}>Statistics</NavLink>
    <NavLink to="/dashboard" className={`px-3 py-2 rounded-lg`}>Dashboard</NavLink>
    <NavLink to="/chart" className={`px-3 py-2 rounded-lg`}>Chart</NavLink>
  </>
  return (
    <div className={`${p.pathname == '/' ? 'bg-commonColor' : ''} rounded-tl-2xl rounded-tr-2xl`}>
      <div className="navbar w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`${p.pathname == '/' ? 'text-white' : 'text-commonColor'} menu menu-sm dropdown-content z-[1] mt-3 p-2 shadow text-center`}>
              {navItem}
            </ul>
          </div>
          <Link className={`${p.pathname == '/' ? 'text-white' : 'text-commonColor'} text-2xl font-bold`} to="/">GadgetHeaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className={`${p.pathname == '/' ? 'text-white' : 'menuColor'} menu menu-horizontal px-1 gap-4 text-white text-lg`}>
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="p-1 mr-4 rounded-full bg-[#ECECEC] cursor-pointer relative">
            <BsCart4 className='text-2xl'></BsCart4>
          </a>

          <a className="p-1 text-xl rounded-full bg-[#ECECEC] cursor-pointer relative">
            <MdOutlineFavoriteBorder className='text-2xl'></MdOutlineFavoriteBorder>
          </a>
        </div>
      </div>
    </div>
  )
}

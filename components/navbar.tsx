'use client'

import noviLogo from "../app/assets/novi-logo.svg"

import { motion } from 'framer-motion';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <div className='z-[98] w-full flex-none lg:z-50 sticky top-0 backdrop-blur-sm bg-transparent'>
      <div className='container'>
        <div className='py-4 grid grid-cols-12'>
          <Link
            className="col-span-6 lg:col-span-2 mr-3 flex items-center gap-2 flex-none overflow-hidden"
            to="/"
          >
            <span className="sr-only">Novi Home Page</span>
            <img src={noviLogo} alt="novi logo" className="w-20 h-20" />
            <span className="text-xl font-semibold text-foreground">
              Novi
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
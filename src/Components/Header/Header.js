import React, { useState } from 'react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);

    return (

        <nav className=' bg-slate-400 flex justify-between items-center p-4'>
            <div className=''>
                <h1 className='text-2xl font-bold text-white'>ROY</h1>
            </div>
            <div onClick={() => setOpen(!open)} className='h-7 w-7 md:hidden text-white'>
                {
                    open ? <XIcon /> : <MenuAlt1Icon />
                }
            </div>
            <ul className={`md:flex sm:justify-center md:static absolute md:justify-end text-2xl font-bold  ${open ? 'top-16 ml-[8rem]' : 'top-[-250px] text-white'}`}>
                <li className={`ml-4 ${open ? 'text-gray-500 hover:text-red-700' : 'text-white hover:text-red-300'}`}>Home</li>
                <li className={`ml-4 ${open ? 'text-gray-500 hover:text-red-700' : 'text-white hover:text-red-300'}`}>About</li>
                <li className={`ml-4 ${open ? 'text-gray-500 hover:text-red-700' : 'text-white hover:text-red-300'}`}>Information</li>
                <li className={`ml-4 ${open ? 'text-gray-500 hover:text-red-700' : 'text-white hover:text-red-300'}`}>Contact</li>
            </ul>
        </nav >

    );
};

export default Header;
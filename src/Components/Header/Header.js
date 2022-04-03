import React from 'react';

const Header = () => {
    return (

        <nav className='bg-slate-400 '>
            <ul className='flex justify-center p-6 font-bold text-white text-2xl '>
                <li className='ml-4 hover:text-gray-800'>Home</li>
                <li className='ml-4 hover:text-gray-800'>Information</li>
                <li className='ml-4 hover:text-gray-800'>About</li>
                <li className='ml-4 hover:text-gray-800'>Contact</li>
            </ul>
        </nav>

    );
};

export default Header;
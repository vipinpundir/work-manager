import { Facebook, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.png'

const Footer = () => {
    return (
        <footer className=' bg-gray-800'>
            <div className='flex flex-col text-white justify-around p-5 md:flex-row'>
                <div className="footer-details flex flex-col items-center md:items-start mt-10">
                    <Image src={logo} alt='demo' width={50} height={50} />
                    <h1>Welcome to work manager.</h1>
                    <p>Hii, this is work manager web application. Users can add, delete and update tasks.</p>
                </div>
                <div className="footer-links flex flex-col items-center mt-10">
                    <h3 className='text-2xl font-semibold' >Important Links</h3>
                    <ol>
                        <li className='flex gap-2 my-3' ><Twitter /> Twiter</li>
                        <li className='flex gap-2 my-3' ><Facebook /> Facebook</li>
                        <li className='flex gap-2 my-3' ><Linkedin /> Linkedin</li>
                    </ol>
                </div>
            </div>
            <div className="text-center pb-5">
                <p className="text-gray-600">&copy; 2024 Work Manager. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
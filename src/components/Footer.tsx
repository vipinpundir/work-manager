import React from 'react'

const Footer = () => {
    return (
        <footer className=' bg-gray-800'>
            <div className='flex text-white justify-around text-center p-5'>
                <div className="footer-details">
                    <h1>Welcome to work manager.</h1>
                    <p>Hii, this is work manager web application. Users can add, delete and update tasks.</p>
                </div>
                <div className="footer-links">
                    <h3>Importants Links</h3>
                    <ol>
                        <li>Twiter</li>
                        <li>Facebook</li>
                        <li>Linkedin</li>
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
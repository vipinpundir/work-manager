import React from 'react'

const Footer = () => {
    return (
        <footer className='flex text-white justify-around text-center p-5 bg-gray-800'>
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
        </footer>
    )
}

export default Footer
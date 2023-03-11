import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container'>
                <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13e6eaaad5828372464f73a1a4.svg" style={{ width: '190px' }} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id='main' className='collapse navbar-collapse justify-content-between'>
                    <ul className='navbar-nav ms-lg-5'>
                        <li className='nav-item'><NavLink className='nav-link' to='/Home'>Home</NavLink></li>
                        <li className='nav-item'><NavLink className='nav-link' to='/About'>About</NavLink></li>
                        <li className='nav-item'><NavLink className='nav-link' to='/Products'>Products</NavLink></li>
                    </ul>
                    <ul className='navbar-nav mt-sm-2'>
                        <li className='nav-item'><NavLink to='/Cart' className='nav-link fs-3'>Cart</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
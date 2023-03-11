import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
function Apout() {
    return (
        <div>
            <Navbar />
            <div className='second-color' style={{ minHeight: '20vh' }}>
                <div className="container d-flex align-items-center" style={{ minHeight: '20vh' }}>
                    <h3 style={{ color: '#453227' }} ><NavLink className='nav-link d-inline' to='/Home' style={{ color: '#795744' }}>Home</NavLink> / About</h3>
                </div>
            </div>
            <div className="container row mt-5 mb-5" style={{ margin: '0 auto' }}>
                <div className="col-lg-6" style={{ height: '500px' }}>
                    <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg" className='w-100' alt="imge" style={{ height: '500px' }} />
                </div>
                <div className="col-lg-6 mt-3">
                    <h2>Our Story</h2>
                    <p className='main-color' style={{ height: '0.25rem', width: '6rem' }}></p>
                    <p className='mt-3 p-color'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Apout
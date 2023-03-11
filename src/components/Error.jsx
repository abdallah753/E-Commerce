import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Error() {
  return (
    <div>
        <Navbar />
        <div className='d-flex flex-column align-items-center pt-4' style={{ height: 'calc(100vh - 160px)' }}>
            <h2 className='text-color mt-5 fw-bold' style={{ letterSpacing: '0.1rem' }}>This Page Dose Not Exist</h2>
        </div>
        <Footer />
    </div>
  )
}

export default Error
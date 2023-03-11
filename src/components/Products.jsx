import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Product from './Product'
import data from './data.json'

function Products() {
    let [price, setprice] = useState(0)
    let [product, setproduct] = useState(data)
    let handelChange = (value) => {
        let ooo = data.filter((e) => {
            return +e.price <= +value
        })
        setprice(value)
        setproduct(ooo)
    }

    let handelChangeBySearch = (e) => {
        let hhh = data.filter((ele) => {
            return ele.titel.includes(e.target.value)
        })
        setproduct(hhh)
    }

    let handelChangeByCompany = (e) => {
        if (e.target.value !== 'All') {
            let nnn = data.filter((ele) => {
                return e.target.value === ele.brand
            })
            setproduct(nnn)
        } else {
            setproduct(data)
        }
    }

    let handelClick = (value) => {
        if (value !== 'All') {
            let kkk = data.filter((ele) => {
                return ele.type === value
            })
            setproduct(kkk)
        } else {
            setproduct(data)
        }
    }
    return (
        <div>
            <Navbar />
            <div className='second-color' style={{ minHeight: '20vh' }}>
                <div className="container d-flex align-items-center" style={{ minHeight: '20vh' }}>
                    <h3 style={{ color: '#453227' }}><NavLink className='nav-link d-inline' to='/Home' style={{ color: '#795744' }}>Home</NavLink> / Products</h3>
                </div>
            </div>
            <div className='mt-5'>
                <div className="container row" style={{ margin: "0 auto" }}>
                    <div className='mb-5 col-8 col-sm-5 col-md-4 col-lg-3 justify-content-center position-md-sticky' style={{ top: '25px', height: 'fit-content' }}>
                        <input type="search" className='form-control' onChange={handelChangeBySearch} placeholder='Search' />
                        <div className='mt-3'>
                            <h5 className='text-color'>Category</h5>
                            <p className='p-color btn d-block mb-0' onClick={() => handelClick('All')} style={{ width: 'fit-content' }}>All</p>
                            <p className='p-color btn d-block mb-0' onClick={() => handelClick('Office')} style={{ width: 'fit-content' }}>Office</p>
                            <p className='p-color btn d-block mb-0' onClick={() => handelClick('Living Room')} style={{ width: 'fit-content' }}>Living Room</p>
                            <p className='p-color btn d-block mb-0' onClick={() => handelClick('Kitchen')} style={{ width: 'fit-content' }}>Kitchen</p>
                            <p className='p-color btn d-block mb-0' onClick={() => handelClick('Bedroom')} style={{ width: 'fit-content' }}>Bedroom</p>
                            <p className='p-color btn d-block mb-0' onClick={() => handelClick('Dining')} style={{ width: 'fit-content' }}>Dining</p>
                            <p className='p-color btn d-block mb-0' onClick={() => handelClick('Kids')} style={{ width: 'fit-content' }}>Kids</p>
                        </div>
                        <div className='mt-3'>
                            <h5 htmlFor='company' className='text-color'>Company</h5>
                            <select name="aaa" id='company' onChange={handelChangeByCompany}>
                                <option value="All">All</option>
                                <option value="Caressa">Caressa</option>
                                <option value="Ikea">Ikea</option>
                                <option value="Liddy">Liddy</option>
                                <option value="Marcos">Marcos</option>
                            </select>
                        </div>
                        <div className='mt-3'>
                            <h5>Price</h5>
                            <p className='mb-1'>${price}</p>
                            <input type="range" onChange={(e) => handelChange(e.target.value)} max='3100' />
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-danger'>Clear Filters</button>
                        </div>
                    </div>
                    <div className='col-12 col-md-8 col-lg-9 mb-5'>
                        <div className='d-lg-flex justify-content-between mb-3'>
                            <p className='m-0 pt-1'><span>{product.length}</span> Products Found</p>
                            <div className='w-lg-25 w-md-75'>
                                <hr />
                            </div>
                            <p className='m-0 pt-1'>Sort By Price</p>
                        </div>
                        <div className='row'>
                            {product.map((ele) => <Fragment key={Math.random() * 9.3}><Product ele={ele} /></Fragment>)}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products
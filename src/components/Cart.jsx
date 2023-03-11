import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import CartProducts from './CartProducts'
import Footer from './Footer'
import Navbar from './Navbar'
import * as actions from './redux/actionType'

function Cart() {
    let { cart, count, total, antotal } = useSelector(state => state)
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let [totalstate, settotalstate] = useState(0)

    cart.map((ele) => {
        console.log(totalstate += ele.total);

    })
    useEffect(() => {
        dispatch({
            type: actions.set_total,
            total: totalstate
        })
    }, [totalstate])

    let handelClear = () => {
        dispatch({
            type: actions.set_cart,
            cart: []
        })
    }

    return (
        <div>
            <Navbar />
            {cart.length === 0 ? <>
                <div className='d-flex flex-column align-items-center pt-4' style={{ height: 'calc(100vh - 160px)' }}>
                    <h2 className='text-color mt-5 fw-bold' style={{ letterSpacing: '0.1rem' }}>Your cart is empty</h2>
                    <button className='btn main-color' style={{ width: 'fit-content' }} onClick={() => navigate('/Products')}>Fill It</button>
                </div>
            </> : <>
                <div className='second-color' style={{ minHeight: '20vh' }}>
                    <div className="container d-flex align-items-center" style={{ minHeight: '20vh' }}>
                        <h3 style={{ color: '#453227' }} ><NavLink className='nav-link d-inline' to='/Home' style={{ color: '#795744' }}>Home</NavLink> / <p className='d-inline' >Cart</p></h3>
                    </div>
                </div>
                <div className='container'>
                    <div className='row m-0 mt-5 mb-5'>
                        <div className='d-md-flex mt-5 d-none'>
                            <div className='p-color col-lg-4 col-md-3 col-sm-3 text-center' style={{ flexGrow: '1' }}>Item</div>
                            <div className='p-color col-lg-2 col-md-3 col-sm-3 d-none d-md-block text-center'>Price</div>
                            <div className='p-color col-lg-2 col-md-3 col-sm-3 text-center'>Quantiti</div>
                            <div className='p-color col-lg-2 col-md-3 col-sm-3 text-center'>Subtotal</div>
                            <div className='col-lg-1  col-0'></div>
                        </div>
                        <hr />
                    </div>
                    {cart.map((ele) => {
                        return <Fragment key={Math.random() * 9.5}><CartProducts e={ele} /></Fragment>
                    })}
                </div>
                <div className='row justify-content-between m-0'>
                    <div className='col-5'>
                        <button className='btn main-color' onClick={() => navigate('/Products')}>Continue Shopping</button>
                    </div>
                    <div className='col-5'>
                        <button className='btn btn-dark mb-3' onClick={handelClear}>Clear Shopping Cart</button>
                        <div className='card mb-3'>
                            <div className='card-body'>
                                <p style={{ letterSpacing: '0.1rem' }}><strong>Suptotal: </strong>{total.toFixed(2)}</p>
                                <p style={{ letterSpacing: '0.1rem' }}>Shipping Fee : $5.34</p>
                                <hr />
                                <h3 style={{ letterSpacing: '0.1rem' }}><strong>Order Total: </strong>{+total.toFixed(2) + 5.34}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
            <Footer />
        </div>
    )
}

export default Cart
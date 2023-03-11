import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './redux/actionType'





function CartProducts({ e }) {
    let [totalstate, settotalstate] = useState(+e.price * e.count)
    let [countstate, setcountstate] = useState(e.count)

    e.total = totalstate

    let dispatch = useDispatch()
    let { cart, total } = useSelector(state => state)


    let handetCart = (inc) => {
        if (inc) {
            dispatch({
                type: actions.set_total,
                total: total + +e.price
            })
            e.count = countstate + 1
            e.total = totalstate + +e.price
        } else {
            dispatch({
                type: actions.set_total,
                total: total + +e.price
            })
            e.count = countstate - 1
            e.total = totalstate - +e.price
        }
    }



    let handelClick = (inc) => {
        if (inc) {
            handetCart(inc)
            dispatch({
                type: actions.set_total,
                total: total + +e.price
            })
        } else {
            handetCart(inc)
            dispatch({
                type: actions.set_total,
                total: total - +e.price
            })
        }
    }

    let handelDelete = () => {
        let cartt = cart.filter((ele) => {
            return ele.titel !== e.titel
        })
        dispatch({
            type: actions.set_cart,
            cart: cartt
        })
        dispatch({
            type: actions.set_total,
            total: total - e.total
        })
    }

    return (
        <>
            <div className='row m-0 mt-5 mb-5'>
                <div className='col-lg-4 col-md-3 col-3 ' style={{ flexGrow: '1' }}>
                    <div>
                        <div className='d-flex' style={{ flexGrow: '1' }}>
                            <img src={e.imgUrl} alt="" className='radius' style={{ width: '100px', height: '75px' }} />
                            <div>
                                <h5 className='ms-2 text-color' style={{ letterSpacing: '0.1rem' }}>{e.titel}</h5>
                                <p className='d-md-none ms-2 text-main-color'>${e.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-none d-md-block col-lg-2 pt-3 col-md-3 fw-bold col-3 text-center text-main-color' style={{ letterSpacing: '0.1rem' }}>
                    ${e.price}
                </div>
                <div className='col-lg-2 col-md-3 col-sm-3 d-flex justify-content-center'>
                    <div className='d-flex justify-content-between' style={{ width: '140px' }}>
                        <p className='fs-2 fw-bold ps-4 pe-3' style={{ cursor: 'pointer' }} onClick={() => countstate !== 1 ? handelClick(false) : ''}>-</p>
                        <p className='fs-2 fw-bold'>{countstate}</p>
                        <p className='fs-2 fw-bold ps-3 pe-3' style={{ cursor: 'pointer' }} onClick={() => handelClick(true)}>+</p>
                    </div>
                </div>
                <div className='col-lg-2 col-md-3 col-3 text-center fw-bold p-color pt-3 d-none d-md-block' style={{ letterSpacing: '0.1rem' }}>
                    <p>{totalstate.toFixed(2)}</p>
                </div>
                <div className='col-lg-1 col-md-3 col-3 text-center' style={{ height: 'fit-content' }}>
                    <button className='btn btn-outline-danger mt-3' onClick={handelDelete}>Delete</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartProducts


/*
if (inc) {
            cart.map((ele) => {
                if (ele.titel === e.titel) {
                    ele.count = countstate + 1
                    ele.total = totalstate + +e.price
                }
            })
        } else {
            cart.map((ele) => {
                if (ele.titel === e.titel) {
                    ele.count = countstate - 1
                    ele.total = totalstate - +e.price
                }
            })
        } */
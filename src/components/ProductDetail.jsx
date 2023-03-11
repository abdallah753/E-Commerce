import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import * as actions from './redux/actionType'

function ProductDetail() {
    let localdetail = JSON.parse(window.sessionStorage.getItem('localdetail'))
    let { total, cart, incre } = useSelector(state => state)
    let [totalstate, settotalstate] = useState(0)
    let [countstate, setcountstate] = useState(1)
    let [imgurl, setimgurl] = useState(localdetail.imgUrl)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(() => {
        cart.map((ele) => {
            if (ele.titel === localdetail.titel) {
                setcountstate(ele.count)
            }
        })
    }, [])


    let handelClick = (inc) => {
        if (inc) {
            setcountstate(countstate + 1)
            settotalstate(totalstate + +localdetail.price)
            if (cart.length === 0) {
                dispatch({
                    type: actions.concat_to_cart,
                    cart: { ...localdetail, count: countstate }
                })
            } else {
                cart.map((ele) => {
                    if (ele.titel === localdetail.titel) {
                        ele.count = countstate + 1
                        ele.total = countstate * +localdetail.price
                    }
                })
            }
            if (incre === 0) {
                dispatch({
                    type: actions.set_total,
                    total: total + (+localdetail.price * 2)
                })
                dispatch({
                    type: actions.set_incre
                })
            } else {
                dispatch({
                    type: actions.set_total,
                    total: total + +localdetail.price
                })
            }
        } else {
            setcountstate(countstate - 1)
            settotalstate(totalstate - +localdetail.price)
            if (cart.length === 0) {
                dispatch({
                    type: actions.concat_to_cart,
                    cart: { ...localdetail, count: countstate }
                })
            } else {
                cart.map((ele) => {
                    if (ele.titel === localdetail.titel) {
                        ele.count = countstate - 1
                        ele.total = countstate * +localdetail.price
                    }
                })
                dispatch({
                    type: actions.set_total,
                    total: total - +localdetail.price
                })
            }
        }
    }

    let handelAdd = () => {
        if (cart.length === 0) {
            dispatch({
                type: actions.concat_to_cart,
                cart: { ...localdetail, total: +localdetail.price, count: countstate }
            })
            dispatch({
                type: actions.set_total,
                total: +localdetail.price
            })

        } else {
            let nnn = cart.filter((ele) => {
                return ele.titel === localdetail.titel
            })
            if (nnn.length === 0) {
                if (countstate > 1) {
                    setcountstate(countstate + 1)
                }
                dispatch(({
                    type: actions.concat_to_cart,
                    cart: { ...localdetail, total: (+localdetail.price * countstate), count: countstate }
                }))
            }
        }

        navigate('/Cart')
    }
    return (
        <div>
            <Navbar />
            <div className='second-color' style={{ minHeight: '20vh' }}>
                <div className="container d-flex align-items-center" style={{ minHeight: '20vh' }}>
                    <h3 style={{ color: '#453227' }} ><NavLink className='nav-link d-inline' to='/Home' style={{ color: '#795744' }}>Home</NavLink> / <NavLink className='nav-link d-inline' to="/Products" style={{ color: '#795744' }} >Products</NavLink>/ {localdetail.titel}</h3>
                </div>
            </div>
            <div className="container">
                <div className='mt-4'>
                    <button onClick={() => navigate('/Products')} className='main-color btn'>Back To Products</button>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-lg-6 col-md-10 col-10'>
                        <div className={`mt-4 h-md-500 h-lg-450`}>
                            <img src={imgurl} alt="imge" className={`radius w-100 h-md-500 h-lg-450`} />
                        </div>
                        <div className=''>
                            <div className='d-flex justify-content-between mt-3 mb-3 '>
                                <img src={localdetail.imgUrl} onClick={() => setimgurl(localdetail.imgUrl)} alt="" className='radius h-sm-50 h-lg-75 h-md-100' style={{ width: 'calc(93% / 5)' }} />
                                <img src="https://images2.imgbox.com/da/bb/iXlbK9A6_o.jpeg" onClick={() => setimgurl('https://images2.imgbox.com/da/bb/iXlbK9A6_o.jpeg')} alt="" className='radius h-sm-50 h-lg-75 h-md-100' style={{ width: 'calc(93% / 5)' }} />
                                <img src="https://images2.imgbox.com/6d/47/A11k7xmf_o.jpeg" onClick={() => setimgurl('https://images2.imgbox.com/6d/47/A11k7xmf_o.jpeg')} alt="" className='radius h-sm-50 h-lg-75 h-md-100' style={{ width: 'calc(93% / 5)' }} />
                                <img src="https://images2.imgbox.com/ca/f3/rPR1K8nP_o.jpeg" onClick={() => setimgurl('https://images2.imgbox.com/ca/f3/rPR1K8nP_o.jpeg')} alt="" className='radius h-sm-50 h-lg-75 h-md-100' style={{ width: 'calc(93% / 5)' }} />
                                <img src="https://images2.imgbox.com/1b/ea/t89LageS_o.jpeg" onClick={() => setimgurl('https://images2.imgbox.com/1b/ea/t89LageS_o.jpeg')} alt="" className='radius h-sm-50 h-lg-75 h-md-100' style={{ width: 'calc(93% / 5)' }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-10'>
                        <h2>{localdetail.titel}</h2>
                        <p className='main-color' style={{ width: "6rem", height: "0.25rem" }}></p>
                        <h5 className='text-main-color mb-4'>${localdetail.price}</h5>
                        <p className='p-color'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
                        <p><strong>Available: </strong>{localdetail.available}</p>
                        <p><strong>SKU: </strong>{localdetail.sku}</p>
                        <p className='mb-4'><strong>Brand: </strong>{localdetail.brand}</p>
                        <hr />
                        <div className='mb-4'>
                            <div className='d-flex justify-content-between' style={{ width: '140px' }}>
                                <p className='fs-2 fw-bold ps-4 pe-3' style={{ cursor: 'pointer' }} onClick={() => countstate !== 1 ? handelClick(false) : ''}>-</p>
                                <p className='fs-2 fw-bold'>{countstate}</p>
                                <p className='fs-2 fw-bold ps-3 pe-3' style={{ cursor: 'pointer' }} onClick={() => handelClick(true)}>+</p>
                            </div>
                            <button className='main-color btn' style={{ width: '140px' }} onClick={() => handelAdd()}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer className='position-absolute bottom-0' />
        </div>
    )
}

export default ProductDetail


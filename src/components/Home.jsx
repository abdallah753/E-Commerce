import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import '../App.css'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import * as actions from './redux/actionType'
import data from './data.json'

function Home() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    dispatch({
        type: actions.set_data,
        data: data
    })

    let handelClick = (titel) => {
        data.filter((ele) => {
            if(ele.titel === titel){
                window.sessionStorage.setItem('localdetail' , JSON.stringify(ele))
            }
        })
        navigate('/Products/ProductDetail')
        
    }
    return (
        <div>
            <Navbar />
            <div className='d-flex justify-content-between container' style={{ height: '550px' }}>
                <div className='col-12 col-lg-5 d-flex flex-column justify-content-center'>
                    <h1 className='text-color'>Design Your Comfort Zone</h1>
                    <p className='p-color'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                    <NavLink className='btn main-color' style={{ width: 'fit-content' }} to='/Products'>Shop Now</NavLink>
                </div>
                <div className='col-6 position-relative d-none d-lg-block'>
                    <div className='position-absolute main-color radius' style={{ left: '-8%', height: '80%', width: "10%", bottom: '0' }}></div>
                    <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg" className='position-absolute radius' style={{ width: '440px' }} alt="" />
                    <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg" className='position-absolute radius' style={{ width: '250px', bottom: '0', transform: "translate(-50% , 0)" }} alt="" />
                </div>
            </div>
            <div className="container" style={{ margin: '0 auto' }}>
                <div className='mt-4 pt-5 p-2' style={{ backgroundColor: "#f1f5f8" }}>
                    <h2 className='text-center text-color'>Featured Products</h2>
                    <p className='main-color' style={{ width: "6rem", height: "0.25rem", margin: "0 auto" }}></p>
                    <div className="row justify-content-center ">
                        <div className='d-flex flex-column col-12 col-md-10 col-lg-4 mt-4' style={{ height: '265px', overflow: 'hidden' }}>
                            <div className='position-relative' style={{ height: '225px', overflow: 'hidden' }}>
                                <img src="https://images2.imgbox.com/cb/69/cQ29pV1x_o.jpeg" style={{ height: '225px' }} className='radius w-100' alt="img" />
                                <div className="disapper" style={{ height: '225px' }}>
                                    <div className='position-absolute w-100 bg-dark opacity-25' style={{ top: '0', left: '0', height: '225px' }}></div>
                                    <button className=' position-absolute btn main-color' onClick={() => handelClick('Entertainment Center')} style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} >Details</button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-1'><p>Entertainment Center</p><p>$599.99</p></div>
                        </div>
                        <div className='d-flex flex-column col-12 col-md-10 col-lg-4 mt-4' style={{ height: '265px', overflow: 'hidden' }}>
                            <div className='position-relative' style={{ height: '225px', overflow: 'hidden' }}>
                                <img src="https://images2.imgbox.com/b4/3d/2jm4sPHs_o.jpeg" style={{ height: '225px' }} className='radius w-100' alt="img" />
                                <div className='disapper'>
                                    <div className='position-absolute w-100 bg-dark opacity-25' style={{ top: '0', left: '0', height: '225px' }}></div>
                                    <button className='position-absolute main-color btn' onClick={() => handelClick('High-Back Bench')} style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} to="/">Details</button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-1'><p>High-Back Bench</p><p>$399.99</p></div>
                        </div>
                        <div className='d-flex flex-column col-12 col-md-10 col-lg-4 mt-4' style={{ height: '265px', overflow: 'hidden' }}>
                            <div className='position-relative' style={{ height: '225px', overflow: 'hidden' }}>
                                <img src="https://images2.imgbox.com/c7/9c/2GpPoQKF_o.jpeg" style={{ height: '225px' }} className='radius w-100' alt="img" />
                                <div className='disapper'>
                                    <div className='position-absolute w-100 bg-dark opacity-25' style={{ top: '0', left: '0', height: '225px' }}></div>
                                    <button className='position-absolute main-color btn' onClick={() => handelClick('Modern Bookshelf')} style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} to="/Products/ProductDetail">Details</button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-1'><p>Modern Bookshelf</p><p>$319.99</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container pt-5 second-color mt-5'>
                <div className="row justify-content-between">
                    <h3 className='col-lg-4 text-color'>Custom Furniture Built Only For You</h3>
                    <p className='col-lg-6 p-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                </div>
                <div className='mt-5 row justify-content-around radius'>
                    <div className='p-5 main-color mb-5 col-10 col-sm-8 col-md-5 col-lg-3 radius'>
                        <h4 className='text-center mb-2 text-color'>Mission</h4>
                        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>
                    <div className='p-5 main-color mb-5 col-10 col-sm-8 col-md-5 col-lg-3 radius'>
                        <h4 className='text-center mb-2 text-color'>Vision</h4>
                        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>
                    <div className='p-5 main-color mb-5 col-10 col-sm-8 col-md-5 col-lg-3 radius'>
                        <h4 className='text-center mb-2 text-color'>History</h4>
                        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>
                </div>
            </div>
            <div className='container pt-5 mt-5'>
                <h3 className='text-color'>Join our newsletter and get 20% off</h3>
                <p className='p-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
            </div>
            <Footer />
        </div>
    )
}

export default Home

/*

    ;
     */
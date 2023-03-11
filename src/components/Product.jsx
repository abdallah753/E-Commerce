import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as actions from './redux/actionType'

function Product({ ele }) {
  let dispatch = useDispatch()
  let navigate = useNavigate()

  let handelClick = (titel) => {
    dispatch({
      type: actions.set_detail,
      detail: ele
    })
    window.sessionStorage.setItem('localdetail', JSON.stringify(ele))
    navigate('/Products/ProductDetail')
  }
  return (
    <div className='col-12 col-md-12 col-lg-6'>
      <div className='d-flex flex-column' style={{ height: '265px', overflow: 'hidden' }}>
        <div className='position-relative' style={{ height: '175px', overflow: 'hidden' }}>
          <img src={ele.imgUrl} style={{ height: '175px' }} className='radius w-100' alt="img" />
          <div className='disapper'>
            <div className='position-absolute w-100 bg-dark opacity-25' style={{ top: '0', left: '0', height: '175px' }}></div>
            <button className='position-absolute main-color btn' onClick={() => handelClick(ele.titel)} style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>Details</button>
          </div>
        </div>
        <div className='d-flex justify-content-between mt-1'><p className='text-color' style={{ letterSpacing: '0.1rem' }}>{ele.titel}</p><p className='text-main-color' style={{ letterSpacing: '0.1rem' }}>{ele.price}</p></div>
      </div>
    </div>
  )
}

export default Product
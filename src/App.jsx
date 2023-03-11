import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/Apout'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Error from './components/Error'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:error' element={<Error />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Home/:error' element={<Error />} />
          <Route path='/About' element={<About />} />
          <Route path='/About/:error' element={<Error />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Products/:error' element={<Error />} />
          <Route path='/Products/ProductDetail' element={<ProductDetail />} />
          <Route path='/Products/ProductDetail/:error' element={<Error />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Cart/:error' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

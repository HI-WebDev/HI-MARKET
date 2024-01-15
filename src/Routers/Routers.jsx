import { Route, Routes, Navigate } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Shop from '../pages/shop/Shop'
import Cart from '../pages/Cart/Cart'
import ProductDetails from '../pages/Product Details/ProductDetails'
import Checkout from '../pages/checkout/Checkout'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to="/main" />} />
                <Route path='main' Component={Main} />
                <Route path='shop' Component={Shop} />
                <Route path='shop/:id' Component={ProductDetails} />
                <Route path='cart' Component={Cart} />
                <Route path='checkout' Component={Checkout} />
            </Routes>
        </>
    )
}

export default Routers

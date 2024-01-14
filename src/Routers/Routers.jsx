import { Route, Routes, Navigate } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Shop from '../pages/shop/Shop'
import Cart from '../pages/Cart/Cart'
import ProductDetails from '../pages/Product Details/ProductDetails'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to="/main" />} />
                <Route path='main' Component={Main} />
                <Route path='shop' Component={Shop} />
                <Route path='shop/:id' Component={ProductDetails} />
                <Route path='cart' Component={Cart} />
            </Routes>
        </>
    )
}

export default Routers

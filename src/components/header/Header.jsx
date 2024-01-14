// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";
import './header.css';

// import Home from './Home'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useSelector } from "react-redux";
// import { useState } from 'react'


const Header = () => {
    const cart = useSelector((state) => state.cart.itemsList)

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light pt-3">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">HI-MARKET</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick}>
                        {active ? <BsThreeDotsVertical /> : <CgMenuGridO />}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold me-4" aria-current="page" to="main">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold me-4" to="shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold " to="cart">Cart</Link>
                            </li>

                        </ul>
                            <div className="buttons d-flex align-items-center">
                                <Link className="like fs-6 me-2 text-decoration-none text-black" to="/wishlist">
                                    <FiHeart />
                                    <span className='ms-1'>(1)</span>
                                </Link>
                                <Link className="cart ms- text-decoration-none text-black" to='/cart'>
                                    <FiShoppingCart />
                                    <span className='ms-1'>({cart.length})</span>
                                </Link>
                            </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
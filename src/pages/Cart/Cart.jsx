import { Link } from 'react-router-dom';
import Banner from '../../helpers/Banner';
import './cart.css';
import { useSelector } from 'react-redux';
import { MdDeleteOutline } from "react-icons/md";



const Cart = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart.totalAmount)


    return (
        <>
            <Banner title="shoping cart" />
            <div className='cart mt-5 mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className='col-1' scope="col">Image</th>
                                        <th className='col-4' scope="col">Title</th>
                                        <th className='col-1' scope="col">Price</th>
                                        <th className='col-1' scope="col">Qty</th>
                                        <th className='col-1' scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.itemsList.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <th className='image text-center'>
                                                    <img src={product.Image} alt={product.productName} className="img-fluid" />
                                                </th>
                                                <td>{product.productName}</td>
                                                <td>${product.totalPrice}</td>
                                                <td>{product.quantity}</td>
                                                <td className='delete'>
                                                    <MdDeleteOutline />
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div className="col-4">
                            <div className="check d-flex flex-column">
                                <div className="d-flex mb-1 justify-content-between align-items-center">
                                    <h1 className="fs-5 text-capitalize">subtotal</h1>
                                    <h1 className="fs-5 fw-bold">$444</h1>
                                </div>
                                <p className='mb-4 text-black-50 lh-base'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Sequi facere provident natus esse est at, nobis.
                                </p>
                                <Link to="/checkout" className="btn text-capitalize p-2 ps-3 pe-3 mb-3 mt-3">checkout</Link>
                                <Link to="/shop" className="btn text-capitalize p-2 ps-3 pe-3">continue shopping</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart

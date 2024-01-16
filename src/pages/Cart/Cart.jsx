import { Link } from 'react-router-dom';
import Banner from '../../helpers/Banner';
import './cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteOutline } from "react-icons/md";
import { cartActions } from '../../redux Toolkit/cart Slice/CartSlice';



const Cart = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart.totalAmount)

    return (
        <>
            <Banner title="shoping cart" />
            <div className='cart mt-5 mb-5'>
                <div className="container">
                    {cart.itemsList.length === 0 ?
                        (
                            <div className='text-center fs-2 text-capitalize'>no products in the cart</div>
                        )
                        :
                        (
                            <div className="row">
                                <div className="col-12 col-lg-8 mb-5 mb-lg-0">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className='col- col-lg-1' scope="col">Image</th>
                                                <th className='col- col-lg-4' scope="col">Title</th>
                                                <th className='col- col-lg-1' scope="col">Price</th>
                                                <th className='col- col-lg-1' scope="col">Qty</th>
                                                <th className='col- col-lg-1' scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.itemsList.map((product, index) => {
                                                return (
                                                    <Tr product={product} key={index} />
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <div className="check d-flex flex-column">
                                        <div className="d-flex mb-1 justify-content-between align-items-center">
                                            <h1 className="fs-5 text-capitalize">subtotal</h1>
                                            <h1 className="fs-5 fw-bold">${cart.totalAmount}</h1>
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
                        )
                    }
                </div>

            </div>
        </>
    )
}

export const Tr = ({ product }) => {
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(cartActions.deleteFromCart(product.id))
    }

    return (
        <tr>
            <th className='image'>
                <img src={product.imgUrl} alt={product.productName} className="img-fluid" />
            </th>
            <td>{product.productName}</td>
            <td>${product.totalPrice}</td>
            <td>{product.quantity}</td>
            <td className='delete' onClick={deleteItem}>
                <MdDeleteOutline />
            </td>
        </tr>
    )
}

export default Cart

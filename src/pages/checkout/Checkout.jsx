import { useSelector } from 'react-redux';
import Banner from '../../helpers/Banner';
import Input from '../../helpers/Input';
import './checkout.css';


const Checkout = () => {
    const cart = useSelector((state) => state.cart)


    return (
        <>
            <Banner title="checkout" />

            <div className='checkout mt-5 mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="d-flex flex-column">
                                <h1 className="fs-5 text-capitalize mb-3">billing address</h1>
                                <Input type="text" ph="enter your name" m="0 0 15px" />
                                <Input type="email" ph="enter your email" m="0 0 15px" />
                                <Input type="tel" ph="phone number" m="0 0 15px" />
                                <Input type="text" ph="street address" m="0 0 15px" />
                                <Input type="text" ph="city" m="0 0 15px" />
                                <Input type="text" ph="postal code" m="0 0 15px" />
                                <Input type="text" ph="country" />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="checkForm d-flex flex-column p-3">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h1 className="fs-6 text-capitalize">total quantity:</h1>
                                    <h1 className="fs-6">{cart.totalQuantity}</h1>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h1 className="fs-6 text-capitalize">subtotal:</h1>
                                    <h1 className="fs-6">${cart.totalAmount}</h1>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h1 className="fs-6 text-capitalize">shipping:</h1>
                                    <h1 className="fs-6">$0</h1>
                                </div>
                                <div className="d-flex mb-4">
                                    <h1 className="fs-6 text-capitalize">free shipping</h1>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h1 className="fs-6 text-capitalize">total:</h1>
                                    <h1 className="fs-6">${cart.totalAmount}</h1>
                                </div>
                                <div className="btn text-capitalize">place order now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout

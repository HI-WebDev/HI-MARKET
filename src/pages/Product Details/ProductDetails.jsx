import { useParams } from 'react-router-dom';
import Helmet from '../Helmet/Helmet';
import Banner from '../../helpers/Banner';
import ProductCard from '../../helpers/ProductCard';
import './productDetails.css';
import products from '../../Assets/data/products';
import { cartActions } from '../../redux Toolkit/cart Slice/CartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((pro) => pro.id === id)
    const { imgUrl, productName, category, price, shortDesc, description, reviews, avgRating } = product;
    const dispatch = useDispatch()

    const [tab, setTab] = useState("desc")

    const addToCart = () => {
        dispatch(
            cartActions.addToCart({
                id,
                productName,
                category,
                imgUrl,
                price,
            }));
        toast.success("product added to the cart")
    }

    const userRef = useRef()
    const msgRef = useRef()

    const [rating, setRating] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();

        const userName = userRef.current.value;
        const userMessage = msgRef.current.value;
        const objRev = {
            name: userName,
            text: userMessage,
            rating,
        }
        console.log(objRev)
        return (
            userRef.current.value = ""
        )
    }

    const [data, setData] = useState(products)

    useEffect(() => {
        const filteredData = products.filter((item) => item.category === category)
        setData(filteredData)
    }, [category])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])


    return (
        <Helmet title={productName}>
            <Banner title={productName} />

            <div className="productDetails mt-5 mb-5">
                <div className="container">
                    <div className="row mb-5 d-flex align-items-center justify-content-between">
                        <div className="col-12 col-lg-5 pt-3 mb-4 mb-md-5 mb-lg-0">
                            <div className="image d-flex justify-content-center">
                                <img src={imgUrl} alt={productName} className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="d-flex-flex-column">
                                <h1 className='fs-4 mb-2'>{productName}</h1>
                                <div className="d-flex align-items-center mt-0 mb-3">
                                    <span className="stars fw-bold me-4">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStarHalfAlt />
                                    </span>
                                    <span className='avgRating d-flex align-items-center ms-2'>
                                        (<h1 className="fs-6 m-0 me-1 fw-bold">{avgRating}</h1>
                                        ratings)
                                    </span>
                                </div>

                                <div className="d-flex mb-3">
                                    <span className="fw-bold me-5">${price}</span>
                                    <span className='text-black-50 text-capitalize fw-bold d-flex align-items-center'>
                                        Category :
                                        <h6 className='m-0 ms-1'>{category}</h6>
                                    </span>
                                </div>

                                <p className='desc lh-base mb-4'>{shortDesc}</p>

                                <button className="btn mt-2 p-1 ps-3 pe-3 text-capitalize" onClick={addToCart}>
                                    add to cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-5 mb-5">
                        <div className="col-12">
                            <div className="tabs d-flex">
                                <h1 className={tab === "desc" ? "active fs-5 me-5" : "fs-5 me-5"}
                                    onClick={() => setTab("desc")}>
                                    Description
                                </h1>
                                <h1 className={tab === "rev" ? "active fs-5" : "fs-5"}
                                    onClick={() => setTab("rev")}>
                                    Reviews({reviews.length})
                                </h1>
                            </div>
                            <div>
                                {tab === "desc" ?
                                    (
                                        <div className='mt-4'>
                                            <p className='lh-lg'>{description}</p>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className='ms-5 mt-4'>
                                            {reviews.map((rev, index) => {
                                                return (
                                                    <div className='reviews mb-4' key={index}>
                                                        <h1 className="fs-5 text-capitalize">HI Developer</h1>
                                                        <h5 className='revRat'>{rev.rating} (rating)</h5>
                                                        <p className='text-black-50'>{rev.text}</p>

                                                    </div>
                                                )
                                            })}
                                            <div className="ms-3 ms-md-5 pt-3 form d-flex flex-column">
                                                <h1 className='fs-6 fs-lg-5 fw-bold mb-4'>Leave your experience review</h1>
                                                <form action="" className='d-flex flex-column col-10' onSubmit={handleSubmit}>
                                                    <input ref={userRef} className='nameInput p-2 ps-3' type="text" name="" id="" placeholder='enter name' required />
                                                    <div className="d-flex stars mt-4 mb-4">
                                                        <span className="me-4 d-flex align-items-center" onClick={() => setRating(1)}>
                                                            1 <FaStar className='ms-1' />
                                                        </span>
                                                        <span className="me-4 d-flex align-items-center" onClick={() => setRating(2)}>
                                                            2 <FaStar className='ms-1' />
                                                        </span>
                                                        <span className="me-4 d-flex align-items-center" onClick={() => setRating(3)}>
                                                            3 <FaStar className='ms-1' />
                                                        </span>
                                                        <span className="me-4 d-flex align-items-center" onClick={() => setRating(4)}>
                                                            4 <FaStar className='ms-1' />
                                                        </span>
                                                        <span className="me-4 d-flex align-items-center" onClick={() => setRating(5)}>
                                                            5 <FaStar className='ms-1' />
                                                        </span>
                                                    </div>
                                                    <textarea ref={msgRef} name="" id="" cols="30" rows="4" placeholder='review message...' className='mb-5 p-2 ps-3'
                                                    >
                                                    </textarea>
                                                    <div>
                                                        <input type="submit" value="submit" className='btn text-capitalize ps-4 pe-4' />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className={tab === "desc" ? "row" : "row pt-5"}>
                        <h1 className="fs-5 mb-5 mb-lg-4 fw-bold">You might also like</h1>
                        {data.map((product, index) => {
                            return (
                                <div key={index} className="col-12 col-md-6 col-lg-3 mb-5 mb-md-4 mb-lg-0">
                                    <ProductCard product={product} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default ProductDetails

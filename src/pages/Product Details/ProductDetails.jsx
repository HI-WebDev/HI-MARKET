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
        console.log(objRev);
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
                    <div className="row mb-5">
                        <div className="col-lg-5">
                            <div className="image">
                                <img src={imgUrl} alt={productName} className='img-fluid' />
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="d-flex-flex-column">
                                <h1 className='fs-4'>{productName}</h1>
                                <div className="d-flex">
                                    <span className="fw-bold me-4">xxxxx</span>
                                    <span>({avgRating} ratings)</span>
                                </div>
                                <div className="d-flex">
                                    <span className="fw-bold me-4">${price}</span>
                                    <span>Category:{category}</span>
                                </div>
                                <p className='mb-3'>{shortDesc}</p>
                                <button className="btn-primary" onClick={addToCart}>
                                    add to cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
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
                                        <div className=''>
                                            <p className='ms-4 mt-5'>{description}</p>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className='ms-4 mt-5'>
                                            {reviews.map((rev, index) => {
                                                return (
                                                    <div key={index}>
                                                        <h1 className="fs-5">jhon doe</h1>
                                                        <h5>{rev.rating} (rating)</h5>
                                                        <p>{rev.text}</p>

                                                    </div>
                                                )
                                            })}
                                            <div className="form d-flex flex-column">
                                                <form action="" className=' d-flex flex-column col-10' onSubmit={handleSubmit}>
                                                    <input ref={userRef} type="text" name="" id="" placeholder='enter name' />
                                                    <div className="d-flex stars mt-3 mb-3">
                                                        <span className="me-4" onClick={() => setRating(1)}>1</span>
                                                        <span className="me-4" onClick={() => setRating(2)}>2</span>
                                                        <span className="me-4" onClick={() => setRating(3)}>3</span>
                                                        <span className="me-4" onClick={() => setRating(4)}>4</span>
                                                        <span className="me-4" onClick={() => setRating(5)}>5</span>
                                                    </div>
                                                    <textarea ref={msgRef} name="" id="" cols="30" rows="5" placeholder='review' className='mb-4'
                                                    >
                                                    </textarea>
                                                    <input type="submit" value="submit" className='w-25' />
                                                </form>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {data.map((product, index) => {
                            return (
                                <div key={index} className="col-12 col-md-6 col-lg-3">
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

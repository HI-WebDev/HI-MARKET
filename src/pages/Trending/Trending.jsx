import { useEffect, useState } from 'react';
import ProductCard from '../../helpers/ProductCard';
import './trending.css';
import products from "../../Assets/data/products";

const Trending = () => {
    const [data, setData] = useState(products)
    console.log(data);

    useEffect(() => {
        const filterdData = products.filter((product) => product.category === "sofa")
        setData(filterdData)
    }, [])


    return (
        <div className='trending mt-5 mb-5 pb-0 pb-md-4 pb-lg-5 d-flex align-items-center'>
            <div className="container">
                <h1 className='mainTitle fs-1 text-center mb-5'>Trending Products</h1>

                <div className="row">
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
    )
}

export default Trending

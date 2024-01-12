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
        <div className='trending mt-5 mb-5'>
            <div className="container">
                <h1 className='fs-2 text-center mb-5'>Trending Products</h1>

                <div className="row">
                    {data.map((product) => {
                        return (
                            <div key={product.id} className="col-12 col-md-6 col-lg-3">
                                <ProductCard
                                    imgUrl={product.imgUrl}
                                    alt={product.productName}
                                    height="10rem"
                                    productName={product.productName}
                                    category={product.category}
                                    price={product.price}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Trending

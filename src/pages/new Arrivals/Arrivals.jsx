import { useEffect, useState } from 'react';
import './arrivals.css';
import products from '../../Assets/data/products'
import ProductCard from '../../helpers/ProductCard'

const Arrivals = () => {
    const [phones, setPhones] = useState(products)
    const [wireless, setWireless] = useState(products)

    useEffect(() => {
        const filteredPhones = products.filter((product) => product.category === "mobile")
        const filteredWireless = products.filter((product) => product.category === "wireless")
         setPhones(filteredPhones)
         setWireless(filteredWireless)
    }, [])

    return (
        <div className='arrivals mt-5 mb-5'>
            <h1 className='fs-2 text-center text-capitalize mb-5'>new arrivals</h1>
            <div className="container">
                <div className="row mb-5">
                    {phones.map((product) => {
                        return (
                            <div key={product.id} className="col-12 col-md-6 col-lg-3">
                                <ProductCard
                                    imgUrl={product.imgUrl}
                                    alt={product.productName}
                                    height="15rem"
                                    productName={product.productName}
                                    category={product.category}
                                    price={product.price}
                                />
                            </div>
                        )
                    })}
                </div>

                <div className="row">
                    {wireless.map((product) => {
                        return (
                            <div key={product.id} className="col-12 col-md-6 col-lg-3">
                                <ProductCard
                                    imgUrl={product.imgUrl}
                                    alt={product.productName}
                                    height="13rem"
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

export default Arrivals 

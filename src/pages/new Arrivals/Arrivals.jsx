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
        <div className='arrivals mt-5 mb-5 pt-4 pb-4'>
            <h1 className='fs-2 text-center text-capitalize mb-5'>new arrivals</h1>
            <div className="container">
                <div className="row mb-5">
                    {phones.map((product, index) => {
                        return (
                            <div key={index} className="col-12 col-md-6 col-lg-3">
                                <ProductCard product={product} />
                            </div>
                        )
                    })}
                </div>

                <div className="row">
                    {wireless.map((product, index) => {
                        return (
                            <div key={index} className="col-12 col-md-6 col-lg-3">
                                <ProductCard product={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Arrivals 

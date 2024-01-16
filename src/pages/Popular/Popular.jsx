import { useEffect, useState } from 'react';
import './popular.css';
import products from '../../Assets/data/products'
import ProductCard from '../../helpers/ProductCard'

const Popular = () => {
    const [watches, setwatches] = useState(products)

    useEffect(() => {
        const filteredWatches = products.filter((product) => product.category === "watch")
        setwatches(filteredWatches)
    }, [])

    return (
        <div className='popular mt-5 mb-5 pt-0 pt-md-2 pt-lg-4'>
            <h1 className='fs-2 text-center text-capitalize mb-5'>popular in category</h1>
            <div className="container">
                <div className="row mb-5">
                    {watches.map((product, index) => {
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

export default Popular
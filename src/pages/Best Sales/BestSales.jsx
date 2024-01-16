import { useEffect, useState } from "react"
import products from '../../Assets/data/products';
import ProductCard from '../../helpers/ProductCard'

const BestSales = () => {
    const [data, setData] = useState(products)

    useEffect(() => {
        const filteredData = products.filter((product) => product.category === "Single chair")
        setData(filteredData)
    }, [])


    return (
        <div className='bestSales mt-5 mb-5 pb-2 pb-md-4 pb-lg-5'>
            <div className="container">
                <h1 className='fs-2 text-center mb-5'>Best Sales</h1>

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

export default BestSales

import { useEffect, useState } from 'react';
import products from '../../Assets/data/products';
import ProductCard from '../../helpers/ProductCard';


const Shop = () => {
    //handle select change
    const [selectedValue, setSelectedValue] = useState(null)
    const [searchValue, setSearchValue] = useState(null)

    const handleChange = (e) => {
        const newValue = e.target.value
        setSelectedValue(newValue)
    }

    const handleSearch = (e) => {
        const newValu = e.target.value
        setSearchValue(newValu)
    }
    console.log(selectedValue);

    // get the data products
    const [data, setData] = useState(products)
    useEffect(() => {
        const filteredProducts = products.filter((product) => product.category === selectedValue)
        setData(filteredProducts)
    }, [selectedValue])

    useEffect(() => {
        const searchProducts = products.filter(
            (product) => product.productName.includes(searchValue))
        // (product) => product.productName.toLowerCase().includes(searchValue.toLowerCase()))
        setData(searchProducts)
    }, [searchValue])


    return (
        <div className='shop mt-5 mb-5'>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-4">
                        <select className='p-2 w-75' name="" id="" onChange={handleChange} value={selectedValue}>
                            <option className='text-capitalize' value="1">filter by category</option>
                            <option value="mobile">mobile</option>
                            <option value="sofa">sofa</option>
                            <option value="Gaming chair">Gaming chair</option>
                            <option value="Single chair">Single chair</option>
                            <option value="wireless">wireless</option>
                            <option value="watch">watch</option>
                        </select>
                    </div>
                    <div className="col-8">
                        <div className="d-flex">
                            <select className="me-4 col-2 p-2" name="" id="">
                                <option value="1">sort by</option>
                            </select>
                            <input type="text" className="w-100" name="search" id="" placeholder="Search"
                                onChange={handleSearch} value={searchValue} />
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    {data.length === 0 ? <div className='text-center'>No Products Founds</div>
                        : data.map((product, index) => {
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

export default Shop

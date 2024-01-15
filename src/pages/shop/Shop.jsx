import { useEffect, useState } from 'react';
import products from '../../Assets/data/products';
import ProductCard from '../../helpers/ProductCard';
import './shop.css';
import { IoSearchSharp } from "react-icons/io5";
import Banner from '../../helpers/Banner';


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
        <>
            <Banner title="products" />
            <div className='shop mt-5 mb-5'>
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-3">
                            <select className='categories text-capitalize ps-3 p-2 w-100' name="" id="" onChange={handleChange} value={selectedValue}>
                                <option className='text-capitalize' value="1">filter by category</option>
                                <option value="mobile">mobile</option>
                                <option value="sofa">Sofa</option>
                                <option value="Gaming chair">gaming chair</option>
                                <option value="Single chair">single chair</option>
                                <option value="wireless">wireless</option>
                                <option value="watch">watch</option>
                            </select>
                        </div>
                        <div className="col-8">
                            <div className="d-flex">
                                <select className="sort me-4 col-3 ps-3 p-2" name="" id="">
                                    <option value="1">Sort By</option>
                                    <option value="1">Chairs</option>
                                    <option value="1">Watches</option>
                                </select>
                                <div className='form d-flex align-items-center w-100 ps-3 pe-2'>
                                    <input type="text" className="search w-100" name="search" id="" placeholder="Search"
                                        onChange={handleSearch} value={searchValue} />
                                    <IoSearchSharp className='fs-5' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pt-3">
                        {data.length === 0 ? (
                            <div className='error text-center'>
                                <h1 className="fs-2">
                                    No Products Are Found!
                                </h1>
                            </div>)
                            : (data.map((product, index) => {
                                return (
                                    <div key={index} className="col-12 col-md-6 col-lg-3">
                                        <ProductCard product={product} />
                                    </div>
                                )
                            }))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop

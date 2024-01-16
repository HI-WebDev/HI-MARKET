import { useEffect, useState } from 'react';
import products from '../../Assets/data/products';
import ProductCard from '../../helpers/ProductCard';
import './shop.css';
import { IoSearchSharp } from "react-icons/io5";
import Banner from '../../helpers/Banner';


const Shop = () => {
    //handle select change
    const [selectedValue, setSelectedValue] = useState(null)
    const handleChange = (e) => {
        const getSelectValue = e.target.value
        setSelectedValue(getSelectValue)
    }


    //handle search change
    const [searchValue, setSearchValue] = useState(null)
    const handleSearch = (e) => {
        const getSearchValue = e.target.value
        setSearchValue(getSearchValue)
    }
    console.log(selectedValue);


    // get the data products
    const [data, setData] = useState(products)
    //case 1
    useEffect(() => {
        const filteredProducts = products.filter(
            (product) => product.category === selectedValue
        )
        setData(filteredProducts)
    }, [selectedValue])

    // case 2
    useEffect(() => {
        const searchProducts = products.filter(
            (product) => product.productName.toLocaleLowerCase().includes(searchValue)
        )
        setData(searchProducts)
    }, [searchValue])


    return (
        <>
            <Banner title="products" />
            <div className='shop mt-5 mb-5'>
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-12 col-lg-3 mb-4 mb-lg-0">
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
                        <div className="col-12 col-lg-9 d-flex  justify-content-end align-items-center">
                            <div className="col-lg-2 me-lg-4">
                                <select className="sort ps-2 ps-md-3 p-2 w-100" name="" id="">
                                    <option value="1">Sort By</option>
                                    <option value="1">Chairs</option>
                                    <option value="1">Watches</option>
                                </select>
                            </div>
                            <div className="col-lg-7 ms-2">
                                <div className='form d-flex align-items-center w-100 '>
                                    <input type="text" className="search w-100 p-2 ps-3" name="search" id="" placeholder="Search"
                                        onChange={handleSearch} value={searchValue} />
                                    <IoSearchSharp className='me-2 fs-5' />
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
                                    <div key={index} className="col-12 col-md-6 col-lg-3 mb-5 mb-md-4 mb-lg-0">
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

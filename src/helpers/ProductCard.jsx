// import { Link } from "react-router-dom"
import { LuPlus } from "react-icons/lu";


const ProductCard = ({ imgUrl, alt, height, productName, category, price }) => {
    return (
        <div className="Prodcutcard">
            <img src={imgUrl} class="card-img-top" alt={alt} style={{ height: height }} />
            <div className="card-body">
                <h5 className="card-title fw-bold mb-2">{productName}</h5>
                <p className="card-text text-black-50 text-capitalize fw-bold">
                    {category}
                </p>
                <div className="d-flex justify-content-between">
                    <span className="price fw-bold">${price}</span>
                    <span className="add d-flex justify-content-center align-items-center fw-bold fs-5">
                        <LuPlus />
                    </span>
                </div>
                {/* <Link to="/shop" class="btn btn-primary">Go somewhere</Link> */}
            </div>
        </div>
    )
}

export default ProductCard

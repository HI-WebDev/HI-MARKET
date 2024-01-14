// import { Link } from "react-router-dom"
import { LuPlus } from "react-icons/lu";
// import { Link } from "react-router-dom";
import { cartActions } from "../redux Toolkit/cart Slice/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const ProductCard = ({ product }) => {
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(
            cartActions.addToCart({
                id: product.id,
                productName: product.productName,
                Image: product.imgUrl,
                category: product.category,
                price: product.price
            }))
        toast.success("product added to the cart")
    }

    return (
        <div className="Prodcutcard">
            <img src={product.imgUrl} className="card-img-top mb-3" alt={product.productName} style={{ height: "12rem" }} />
            <div className="card-body">
                <h5>
                    <Link to={`/shop/${product.id}`} className="card-title fs-5 fw-bold mb-2">
                        {product.productName}
                    </Link>
                </h5>

                <p className="card-text text-black-50 text-capitalize fw-bold">
                    {product.category}
                </p>
                <div className="d-flex justify-content-between">
                    <span className="price fw-bold">${product.price}</span>
                    <span className="add d-flex justify-content-center align-items-center fw-bold fs-5"
                        onClick={addToCart}>
                        <LuPlus />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard

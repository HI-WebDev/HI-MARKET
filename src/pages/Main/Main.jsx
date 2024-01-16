import BestSales from '../Best Sales/BestSales';
import Helmet from '../Helmet/Helmet';
import Limited from '../Limited Offer/Limited';
import Popular from '../Popular/Popular';
import Services from '../Services/Services';
import Trending from '../Trending/Trending';
import Arrivals from '../new Arrivals/Arrivals';
import heroimg from '../../Assets/images/HEROIMG.png'
import './main.css';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <Helmet title="Home">

            {/* hero section */}
            <div className="main d-flex align-items-center pt-5 pb-5 p-lg-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 pt-lg-4 mb-4 mb-md-0">
                            <div className="d-flex-flex-column">
                                <h5 className='fs-6 text-black-50 mb-2'>Trending products in 2024</h5>
                                <h1 className='text-capitalize fw-bold mb-3'>
                                    make your interior more minimalistic & modern
                                </h1>
                                <p className='text-black-50 lh-base mb-5'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Ipsam blanditiis ipsa nihil quisquam numquam, accusantium error est aspernatur.
                                    Ipsam blanditiis ipsa nihil quisquam numquam, accusantium error est aspernatur.
                                </p>
                                <Link to="/shop" className="btn ps-4 pe-4 mt-1">SHOP NOW</Link>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="image">
                                <img src={heroimg} alt="heroimg" className="img-fluid float-end" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* services */}
            <Services />

            {/* Trending  */}
            <Trending />

            {/* best Sales  */}
            <BestSales />

            {/* limited offer */}
            <Limited />

            {/* new arrivals */}
            <Arrivals />

            {/* popular in category  */}
            <Popular />
        </Helmet>
    )
}

export default Main

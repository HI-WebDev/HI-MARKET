import BestSales from '../Best Sales/BestSales';
import Helmet from '../Helmet/Helmet';
import Limited from '../Limited Offer/Limited';
import Popular from '../Popular/Popular';
import Services from '../Services/Services';
import Trending from '../Trending/Trending';
import Arrivals from '../new Arrivals/Arrivals';
import './main.css';

const Main = () => {
    return (
        <Helmet title="Home">
            {/* hero section */}


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

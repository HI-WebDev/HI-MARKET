import commonimg from '../Assets/images/banner.png';


const Banner = ({ title }) => {
    return (
        <div className="banner text-center position-relative">
            <img src={commonimg} className='img-fluid ' alt="common section" />
            <h1 className="fs-1 position-absolute text-capitalize">{title}</h1>
        </div>
    )
}

export default Banner

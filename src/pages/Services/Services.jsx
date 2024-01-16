import serviceData from '../../Assets/data/serviceData'
import Service from './Service'
import './services.css'

const Services = () => {
    return (
        <div className='services mt-5 mb-5 pt-2 pt-lg-4 pb-4'>
            <div className="container">
                <div className="row">
                    {serviceData.map((data, index) => {
                        return (
                            <div key={index} className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                                <Service data={data} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Services

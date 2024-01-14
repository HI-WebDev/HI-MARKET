import serviceData from '../../Assets/data/serviceData'
import Service from './Service'
import './services.css'

const Services = () => {
    return (
        <div className='services mt-5 mb-5 pt-4 pb-4'>
            <div className="container">
                <div className="row">
                    {serviceData.map((box, index) => {
                        return (
                            <div key={index} className="col-lg-3">
                                <Service
                                    bg={box.bg}
                                    icon={box.icon}
                                    title={box.title}
                                    desc={box.subtitle}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Services

import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";


import './footer.css'


const Footer = () => {
    return (
        <div className='footer pt-4 pb-4 pt-lg-5 pb-lg-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-5 text-start text-md-center text-lg-start mb-0 mb-md-4 mb-lg-0">
                        <ul className='list-unstyled'>
                            <li className=' fw-bold mb-3'>HI MARKET</li>
                            <p className='text-white-50 font-monospace'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciuntarchitecto
                                voluptates doloribus alias rem dolorem labore laborum.
                            </p>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 d-flex justify-content-start justify-content-md-center justify-content-lg-start">
                        <ul className='list-unstyled'>
                            <li className='fw-bold mb-3 text-capitalize'>useful links</li>
                            <li className='text-white-50 font-monospace text-capitalize mb-2'>
                                shop
                            </li>
                            <li className='text-white-50 font-monospace text-capitalize mb-2'>
                                cart
                            </li>
                            <li className='text-white-50 font-monospace text-capitalize mb-2'>
                                login
                            </li>
                            <li className='text-white-50 font-monospace text-capitalize'>
                                privacy policy
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 d-flex justify-content-start justify-content-md-center justify-content-lg-start">
                        <ul className='list-unstyled'>
                            <li className=' fw-bold mb-3 text-capitalize'>top categories</li>
                            <li className='text-white-50 font-monospace text-capitalize mb-2'>
                                mobile phone
                            </li>
                            <li className='text-white-50 font-monospace text-capitalize mb-2'>
                                modern sofa
                            </li>
                            <li className='text-white-50 font-monospace text-capitalize mb-2'>
                                arm chair
                            </li>
                            <li className='text-white-50 font-monospace text-capitalize'>
                                smart watches
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-start justify-content-md-center justify-content-lg-start">
                        <ul className='list-unstyled'>
                            <li className=' fw-bold mb-3 text-capitalize'>contact</li>
                            <li className='text-white-50 text-capitalize d-flex align-items-center mb-2'>
                                <CiLocationOn className='me-2' />
                                <span>
                                    morocco,casablanca
                                </span>
                            </li>
                            <li className='text-white-50 font-monospace text-capitalize d-flex align-items-center mb-2'>
                                <LuPhone className='me-2' />
                                <span>
                                    +212999xxxxxxxx
                                </span>
                            </li>
                            <li className='text-white-50 d-flex align-items-center'>
                                <MdOutlineEmail className='me-2' />
                                <span>
                                    exemple@email.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

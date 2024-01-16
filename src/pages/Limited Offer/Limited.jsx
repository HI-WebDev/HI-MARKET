import React, { useEffect, useState } from 'react'
import './limited.css'
import { Link } from 'react-router-dom';
import img from '../../Assets/images/limitedImg-rb.png'


const Limited = () => {
    const timeFunction = () => {
        const TimeNow = new Date().getTime();
        const eventTime = new Date("2-20-2024").getTime();
        const diff = eventTime - TimeNow

        if (diff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (60 * 60 * 24)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)

        return { days, hours, minutes, seconds }
    }

    const [time, setTime] = useState(timeFunction())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(timeFunction())
        }, 1000);

        return () => clearInterval(timer)
    }, [])

    return (
        <div className='limited mt-5 mb-5'>
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="left d-flex flex-column text-center text-md-start mt-4 mt-lg-0 mb-4 mb-lg-0">
                            <h1 className="fs-6 text-capitalize mb-2 text-white-50">limited offers</h1>
                            <h1 className="fs-5 text-capitalize mb-4">quantity single chairs</h1>

                            <div className="counter d-flex align-items-center justify-content-center justify-content-md-start mb-4">
                                <div className='time me-3 fw-bold d-flex text-center align-items-center'>
                                    <div className="d-flex flex-column me-3">
                                        <h5 className="fs-3 mb-1">{time.days}</h5>
                                        <h5 className="fs-6 text-capitalize">days</h5>
                                    </div>
                                    <span className='fs-4'>:</span>
                                </div>

                                <div className='time me-3 fw-bold d-flex text-center align-items-center'>
                                    <div className="d-flex flex-column me-3">
                                        <h5 className="fs-3 mb-1">{time.hours}</h5>
                                        <h5 className="fs-6 text-capitalize">hours</h5>
                                    </div>
                                    <span className='fs-4'>:</span>
                                </div>

                                <div className='time me-3 fw-bold d-flex text-center align-items-center'>
                                    <div className="d-flex flex-column me-3">
                                        <h5 className="fs-3 mb-1">{time.minutes}</h5>
                                        <h5 className="fs-6 text-capitalize">minutes</h5>
                                    </div>
                                    <span className='fs-4'>:</span>
                                </div>

                                <div className='time fw-bold d-flex text-center align-items-center'>
                                    <div className="d-flex flex-column">
                                        <h5 className="fs-3 mb-1">{time.seconds}</h5>
                                        <h5 className="fs-6 text-capitalize">seconds</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 mt-lg-0'>
                            <Link to="/shop" className="btn fw-bold text-capitalize ps-4 pe-4">visit store</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 d-none d-md-flex justify-content-end">
                        <div className="image">
                            <img src={img} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Limited

import React, { useEffect, useState } from 'react'
import './limited.css'
import { Link } from 'react-router-dom';
import img from '../../Assets/images/limitedImage.png'


const Limited = () => {
    const timeFunction = () => {
        const TimeNow = new Date().getTime();
        const eventTime = new Date("1-20-2024").getTime();
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
                        <div className="left d-flex flex-column">
                            <h1 className="fs-6 text-capitalize mb-1">limited offers</h1>
                            <h1 className="fs-5 text-capitalize mb-2">quantity phones</h1>
                            <div className="time d-flex align-items-center mb-4">
                                <span className='me-3 fs-4 position-relative fw-bold d-flex flex-column'>
                                    {time.days} :
                                </span>
                                <span className='me-3 fs-4 position-relative fw-bold d-flex flex-column'>
                                    {time.hours} :
                                </span>
                                <span className='me-3 fs-4 position-relative fw-bold d-flex flex-column'>
                                    {time.minutes} :
                                </span>
                                <span className='fs-4 position-relative fw-bold d-flex flex-column'>
                                    {time.seconds}
                                </span>
                            </div>
                            <Link to="/shop" className="btn bg-light fw-bold text-capitalize w-25">visit store</Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-end">
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

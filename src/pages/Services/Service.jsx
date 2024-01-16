
const Service = ({ data }) => {
    return (
        <div className='serviceBox p-2 d-flex align-items-center justify-content-lg-between'
            style={{ backgroundColor: data.bg }}>
            <span className="icon fs-4 me-2 d-flex align-items-center justify-content-center ">
                {data.icon}
            </span>
            <div className="infos d-flex flex-column">
                <h1 className="fs-5 mb-1">{data.title}</h1>
                <p className="desc mt-0 mb-0">{data.subtitle}</p>
            </div>
        </div>
    )
}

export default Service

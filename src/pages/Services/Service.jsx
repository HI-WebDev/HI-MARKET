
const Service = ({ bg, icon, title, desc }) => {
    return (
        <div className='serviceBox p-2 d-flex align-items-center justify-content-between'
            style={{ backgroundColor: bg }}>
            <span className="icon fs-4 me-2 d-flex align-items-center justify-content-center ">
                {icon}
            </span>
            <div className="infos d-flex flex-column">
                <h1 className="fs-5 mb-1">{title}</h1>
                <p className="desc mt-0 mb-0">{desc}</p>
            </div>
        </div>
    )
}

export default Service

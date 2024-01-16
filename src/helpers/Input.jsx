

const Input = ({ ref, type, ph, m }) => {
    return (
        <div>
            <input ref={ref} className='MainInput p-2 ps-3 w-100' type={type}
                name="" id="" placeholder={ph} style={{ margin: m }} required />
        </div>
    )
}

export default Input

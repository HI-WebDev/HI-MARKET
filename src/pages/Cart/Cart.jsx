

const Cart = () => {
    return (
        <div className='cart mt-5 mb-5'>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">category</th>
                            <th scope="col">price</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {}
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>X</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Cart

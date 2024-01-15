import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsList: [],
    // totalQuantity: 0,
    totalAmount: 0,
}

const CartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const doubleItem = state.itemsList.find((product) => product.id === newItem.id)

            // doubleItem.totalQuantity++

            if (!doubleItem) {
                state.itemsList.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    image: newItem.imgUrl,
                    price: newItem.price,
                    category: newItem.category,
                    totalPrice: newItem.price,
                    quantity: 1,
                })
            } else {
                doubleItem.quantity++
                doubleItem.totalPrice += Number(newItem.price)
            }

            state.totalAmount = state.itemsList.reduce((total, item) =>
                total + Number(item.price) * Number(item.quantity)
            )
        },
    }
})

export default CartSlice.reducer
export const cartActions = CartSlice.actions
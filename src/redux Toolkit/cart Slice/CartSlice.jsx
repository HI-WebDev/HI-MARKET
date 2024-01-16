import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsList: [],
    totalQuantity: 0,
    totalAmount: 0,
}

const CartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const doubleItem = state.itemsList.find((product) => product.id === newItem.id)

            state.totalQuantity++

            if (!doubleItem) {
                state.itemsList.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    category: newItem.category,
                    totalPrice: newItem.price,
                    quantity: 1,
                })
            } else {
                doubleItem.quantity++
                doubleItem.totalPrice += Number(newItem.price)
            }
            state.totalAmount = state.itemsList.reduce((acc, item) =>
                acc + Number(item.price) * Number(item.quantity) 
                ,0)
        },

        deleteFromCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === newItem)

            if (existingItem) {
                state.itemsList = state.itemsList.filter((product) => product.id !== newItem)
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }
            state.totalAmount = state.itemsList.reduce((total, item) =>
                total + Number(item.price) * Number(item.quantity)
                , 0)
        },

    }
})

export default CartSlice.reducer
export const cartActions = CartSlice.actions
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../cart Slice/CartSlice";
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        cart: CartSlice,
    },
    middleware: getMiddleWare => getMiddleWare().concat(logger)
})

export default store
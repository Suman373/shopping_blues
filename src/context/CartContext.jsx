import { createContext, useContext, useReducer } from "react";
import cartReducer from "./reducers/CartReducer";
import {addToCart,updateCart,removeFromCart} from './actions/CartAction';

const initialState = {
    products: []
}

// product(Obj) {id,name,price,qty}

// cart context to be consumed at every level
const CartContext = createContext(initialState);

// hook to use our cart
export const useCart = useContext(CartContext);

// provider wrapper, allows all children to get update on context changes 
export const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(cartReducer,initialState);

    // define action functions
    const addProduct = (product)=> dispatch(addToCart(product));
    const removeProduct = (id)=> dispatch(removeFromCart(id));
    const updateProdcut = (product,id)=> dispatch(updateCart(id,product));

    return <CartContext.Provider value={{state,addProduct,removeProduct,updateProdcut}}>{children}</CartContext.Provider>

}
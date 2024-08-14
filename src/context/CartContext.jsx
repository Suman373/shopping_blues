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
export const useCart = () =>{
    const context = useContext(CartContext);
    if(context === undefined) throw new Error("useCart must be used inside the CartContext");
    return context;
}

// provider wrapper, allows all children to get update on context changes 
export const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(cartReducer,initialState);

    // define action functions
    const addProduct = (product)=> dispatch(addToCart(product));
    const removeProduct = (id)=> dispatch(removeFromCart(id));
    const updateProduct = (id,product)=> dispatch(updateCart(id,product));

    return <CartContext.Provider value={{state,addProduct,removeProduct,updateProduct}}>{children}</CartContext.Provider>

}
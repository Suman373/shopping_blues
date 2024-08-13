// state -> key value pair obj , action -> type of action
const cartReducer = (state,action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log(`Added product, ${action.payload}`);
            // update the state with new product in payload
            return {
                ...state,
                products: [...state.products,action.payload],
            }
        case 'REMOVE_FROM_CART':
            console.log(`Removed product, ${action.payload}`);
            return{
                ...state,
                products: products.filter(product=> product.id !== action.payload.id),
            }
        case 'UPDATE_CART':
            console.log(`Updated cart`);
            // payload {id,product{}}
            return{
                ...state,
                products: state.products.map((product)=>product.id === action.payload.id ? action.payload.product : product.id),
            }
        default:
            throw new Error(`No case for ${action.type} in switch case`);
    }
}

export default cartReducer;
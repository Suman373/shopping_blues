import React, {useEffect, useState} from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const {state} = useCart();
    // cart local states
    const [subTotal, setSubTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    let discount = 20; // in %
    
    console.log(state.products);

    useEffect(()=>{

    },[]);

    return (
        <div className='h-fit bg-white m-8 p-5'>
            <h1 className='font-semibold text-lg text-center'>My Shopping Cart</h1>
            <div className='h-1 w-[500px] bg-orange text-center mx-auto my-4'></div>
            {/* cart items */}
            <section>
                {state.products?.length>0 ?
                state.products?.map((item,index)=>
                    <li className='list-none' key={index}>
                        {item.name}
                        <span> X ({item.qty}) </span>
                    </li>
                )    
                :
                <div>
                    <p className='text-md text-orange text-center m-3'>Your cart is empty</p>
                    <p className='text-sm text-center'>Looks like you have added nothing to your cart. Go explore the top categories.</p>
                </div>
            }
            </section>
        </div>
    )
}

export default Cart;
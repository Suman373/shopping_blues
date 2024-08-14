import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { state } = useCart();
    let tempSubTotal = 0, tempGrandTotal = 0, tempDiscount = 0, discountPerc = 5;
    // cart local states
    const [subTotal, setSubTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    // console.log("Cart:", cartProducts);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        tempSubTotal = state?.products.reduce((acc, prod) => { return acc + prod?.price * prod?.qty }, 0);
        tempDiscount = tempSubTotal * discountPerc / 100;
        tempGrandTotal = Math.abs(tempSubTotal - tempDiscount);
        setSubTotal(tempSubTotal);
        setDiscount(tempDiscount);
        setGrandTotal(tempGrandTotal);
        setCartProducts(state.products);
    }, [state]);

    return (
        <div className='min-h-screen mx-8 my-4 p-5'>
            <h1 className='font-semibold text-lg text-center'>My Shopping Cart</h1>
            <div className='h-1 w-[500px] bg-orange text-center mx-auto my-4'></div>
            {/* cart items */}
            <section className='flex flex-col items-center justify-start gap-2'>
                {state.products?.length > 0 ?
                    state.products?.map((item, index) =>
                        <CartItem item={item} key={index} />
                    )
                    :
                    <div>
                        <p className='text-md text-orange text-center m-3'>Your cart is empty</p>
                        <p className='text-sm text-center'>Looks like you have added nothing to your cart. Go explore the top categories.</p>
                    </div>
                }
            </section>
            {/* price */}
            {state?.products?.length > 0 && <section className='flex flex-col items-center justify-start gap-1 px-4 py-5'>
                <div className='w-full rounded-xl flex items-start justify-between'>
                    <p className='font-serif font-bold text-base m-1'>Subtotal</p>
                    <p className='font-semibold text-base'>₹ {subTotal}</p>
                </div>
                <div className='w-full rounded-xl flex items-start justify-between'>
                    <p className='font-serif font-bold text-base m-1'>Discount (5%)</p>
                    <p className='font-semibold text-base'>₹ {discount}</p>
                </div>
                <div className='w-full rounded-xl flex items-start justify-between'>
                    <p className='font-serif font-bold text-base m-1'>Shipping charges</p>
                    <p className='font-semibold text-base'>Free</p>
                </div>
                <div className='w-full rounded-xl flex items-start justify-between'>
                    <p className='font-serif font-bold text-base m-1'>Grand Total</p>
                    <p className='font-semibold text-base'>₹ {grandTotal}</p>
                </div>
            </section>
            }
            {/* checkout */}
            <div className='flex items-center justify-center m-5 p-3'>
                {cartProducts.length>=1 ?   <button className='bg-orange text-white rounded-full px-20 py-4 text-md'>
              Checkout
            </button> : 
              <Link to="/" className='bg-orange text-white rounded-full px-20 py-4 text-md'>
              Go back
            </Link>
            }
            </div>

        </div>
    )
}

export default Cart;
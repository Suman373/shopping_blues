import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import toast from 'react-hot-toast';
import ProductCard from '../components/ProductCard';

const Home = () => {

    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchProducts = async()=>{
        try {
            const data = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/products?categoryId=2`);
            if(data?.data){
                console.log(data?.data);
                setFetchedProducts(data?.data);
                toast.success("Fetched products");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[]);

    return (
      <>
        <Navbar/>
        {/* Banner */}
        <div className='min-h-fit flex flex-col items-center justify-center'>
            <h1 className='text-xxl font-bold justify-center'>Shopping.Blues</h1>
            <p className='text-lg my-2 font-semibold'>Find the best products at best prices</p>
            <a href="#products" className="my-8 border-2 border-black px-10 py-3 rounded-[40px] font-semibold text-center">
                See Products
            </a>
        </div>
        {/* Products */}
        <section className='min-h-[100vh] flex flex-col items-center justify-center'>
        <h1 className='text-xl font-bold justify-center' id='products'>Our Products</h1>
        <div className='grid grid-cols-4 gap-4'>
            {
                fetchedProducts?.length > 0 && !isLoading ?
                fetchedProducts?.map((item,index)=>
                {
                    // filter items with image(s) only
                    if(item.image || item.images){
                        return  <ProductCard
                        index={index}
                        item={item}
                        />
                    }else return null;
                }
                )
                :
                !isLoading && <p className='text-align text-base'>No products available</p>
            }
        </div>
        </section>
      </>
    )
}

export default Home;
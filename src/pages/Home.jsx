import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import ProductCard from '../components/ProductCard';
import confettiGIF from '../assets/confetti.gif';
import myAbstractBg from '../assets/myabstract.png';
import ProductSk from '../components/ProductSk';
import { FaApple, FaAmazon  } from "react-icons/fa";
import { SiSamsung, SiNike, SiFlipkart   } from "react-icons/si";
import Footer from '../components/Footer';

const Home = () => {

    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [confetti, setConfetti] = useState(false);

    const sponsors = [  <FaApple/>,
        <FaAmazon/>,
        <SiFlipkart/>,
        <SiSamsung/>,
        <SiNike/>
    ]


    const animateConfetti = () => {
        setConfetti(true);
        setTimeout(() => setConfetti(false), 2000);
    }

    const fetchProducts = async (abortController) => {
        try {
            setIsLoading(true);
            const data = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/products?categoryId=2`, { signal: abortController.signal });
            if (data?.data) {
                console.log(data?.data);
                setFetchedProducts(data?.data);
                toast.success("Fetched products");
            }
        } catch (error) {
            axios.isCancel(error) ? console.log(`Cancelled request ${error}`) : console.log(error.message);
            toast.error("Error fetching products. Try again later");
        }
        setTimeout(()=>setIsLoading(false),4000);
    }

    useEffect(() => {
        const abortController = new AbortController();
        fetchProducts(abortController);

        return () => abortController.abort();
    }, []);

    return (
        <>
            {confetti && <div>
                <img className='h-60 w-fit fixed left-0' src={confettiGIF} />
                <img className='h-60 w-fit fixed right-0' src={confettiGIF} />
            </div>}
            {/* Banner */}
            <div className='relative min-h-screen flex flex-col items-center justify-center z-10'>
                <img className='absolute opacity-80 -z-10 w-screen h-screen' src={myAbstractBg} alt="background" />
                <h1 className='text-xxl font-bold text-black'>Shopping.Blues</h1>
                <p className='text-lg my-2 font-semibold'>Find the best products at best prices</p>
                <p className='text-md'>Discover Deals That Dazzle and Savings That Shine.</p>
                <p className='text-md'>Your Ultimate Shopping Destination Awaits!</p>
                <a href="#products" className="my-8 border-2 border-black px-10 py-3 rounded-[40px] font-semibold text-center">
                    See Products
                </a>
            </div>
            {/* Products */}
            <section className='min-h-[100vh] flex flex-col items-center justify-center py-10'>
                <h1 className='text-xl font-bold justify-center mx-10' id='products'>Our Products</h1>
                <div className='h-1 w-[500px] bg-orange text-center mx-auto mb-20'></div>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        fetchedProducts?.length > 0 && !isLoading ?
                            fetchedProducts?.map((item, index) => {
                                // filter items with image(s) only
                                if (item.image || item.images) {
                                    return <ProductCard
                                        animateConfetti={animateConfetti}
                                        key={index}
                                        item={item}
                                    />
                                } else return null;
                            }
                            )
                            :
                            !isLoading && <p className='text-align text-base'>No products available</p>
                    }
                    {
                        isLoading && <ProductSk cards={4} />
                    }
                </div>
            </section>
            {/* Sponsors */}
            <section className='min-h-[100vh] flex flex-col items-center justify-center py-10'>
                <h1 className='text-xl font-bold justify-center mx-10' id='products'>Our Sponsors</h1>
                <div className='h-1 w-[500px] bg-orange text-center mx-auto mb-20'></div>
                <div className='min-h-fit flex flex-wrap items-start justify-center p-3 m-4 gap-2'>
                  {sponsors?.map((item,index)=><span className='text-xxl p-2 text-gray-dark'>{item}</span>)}
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Home;
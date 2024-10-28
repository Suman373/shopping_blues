import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import ProductCard from '../components/ProductCard';
import confettiGIF from '../assets/confetti.gif';
import ProductSk from '../components/ProductSk';
import { FaApple, FaAmazon, FaCheck } from "react-icons/fa";
import { SiSamsung, SiNike, SiFlipkart } from "react-icons/si";
import tshirtImg from '../assets/tshirt.png';
import shoeImg from '../assets/shoe.png';

const Home = () => {

    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [confetti, setConfetti] = useState(false);

    const sponsors = [<FaApple />,
    <FaAmazon />,
    <SiFlipkart />,
    <SiSamsung />,
    <SiNike />
    ]

    const whyUsPoints = [
        "Fast Orders", "Easy Returns", "Secured Transactions", "24x7 Customer Support", "Loyalty Rewards",
        "Best Shopping Experience", "Smooth Logistics", "Competitive Prices"
    ]


    const animateConfetti = () => {
        setConfetti(true);
        setTimeout(() => setConfetti(false), 2000);
    }

    const fetchProducts = async (abortController) => {
        try {
            setIsLoading(true);
            const data = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}`, { signal: abortController.signal });
            if (data?.data) {
                console.log(data?.data);
                setFetchedProducts(data?.data);
                toast.success("Fetched products");
            }
        } catch (error) {
            axios.isCancel(error) ? console.log(`Cancelled request ${error}`) : console.log(error.message);
            toast.error("Error fetching products. Try again later");
        }
        setTimeout(() => setIsLoading(false), 2000);
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
            <div className='relative min-h-screen flex flex-col items-center justify-center z-10 px-4 md:px-8 '>
                {/* <div className='absolute p-3 top-[8%] left-[10%] h-52 w-52 rounded-full bg-dark-brown bg-opacity-80 text-white 
                flex flex-col justify-center 
                items-center'>
                    <h2 className='text-center font-semibold'>AUTUMN SALE IS HERE</h2>
                    <p className='text-center text-yellow'>offer ends in 30 days</p>
                    <p>🎉</p>
                </div> */}
                <p className='py-2 px-3 bg-white bg-opacity-40 text-orange rounded-lg shadow-md '>Use Code <span className='text-black font-semibold'>
                    STYLEUP2k25</span> for 20% off</p>
                <h1 className='font-bold text-dark-brown text-[42px] md:text-xl lg:text-xxl'>Style.<span className='text-black'>UP</span></h1>
                <p className='text-md md:text-lg text-center my-2 font-semibold text-dark-brown'>Find the best products at best prices</p>
                <p className='text-base md:text-md text-center text-light-brown font-semibold'>Discover deals that dazzle and savings that shine.</p>
                <a href="#products" className="my-8 bg-white text-orange px-10 py-3 rounded-3xl font-semibold text-center  hover:scale-105 shadow-xl">
                    View Products
                </a>
                <h3 className='text-md text-light-brown m-2 font-bol'>Why us?</h3>
                <div className='min-w-fit p-4 grid grid-cols-2 md:grid-cols-4 place-content-center gap-4 my-3'>
                    {
                        whyUsPoints.map((item, index) =>
                            <div className='flex items-center justify-start gap-2 text-dark-brown' key={index}>
                                <FaCheck className='text-xs text-light-brown' />
                                <h3 className='text-base font-bold'>{item}</h3>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* Products */}
            <section className='min-h-[100vh] flex flex-col items-center justify-center py-10 '>
                <h1 className='font-bold text-dark-brown text-center text-[42px] md:text-xl mx-10' id='products'>Our Products</h1>
                <div className='h-1 w-[100px] md:w-[400px] bg-orange text-center mx-auto mb-20'></div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                    {
                        fetchedProducts?.length > 0 && !isLoading ?
                            fetchedProducts?.map((item, index) => {
                                return <ProductCard
                                    animateConfetti={animateConfetti}
                                    key={index}
                                    item={item}
                                />
                            }
                            )
                            :
                            !isLoading && <p className='text-align mx-auto text-base'>No products available</p>
                    }
                    {
                        isLoading && <ProductSk cards={4} />
                    }
                </div>
            </section>
            {/* Sponsors */}
            {/* <section className='min-h-[100vh] flex flex-col items-center justify-center py-10'>
                <h1 className='font-bold text-dark-brown text-center text-[42px] md:text-xl mx-10' id='sponsors'>Our Sponsors</h1>
                <div className='h-1 w-[100px] md:w-[400px] bg-orange text-center mx-auto mb-20'></div>
                <div className='min-h-fit flex flex-wrap items-start justify-center p-3 m-4 gap-2'>
                  {sponsors?.map((item,index)=><span className='text-xl lg:text-xxl p-2 text-gray-dark'>{item}</span>)}
                </div>
            </section> */}
        </>
    )
}

export default Home;
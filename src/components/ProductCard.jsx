/*
  {
    "id": 4,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
    "images": [
      "https://placeimg.com/640/480/any?r=0.9178516507833767",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017"
    ]
  }
*/
import React from 'react';

const ProductCard = ({ item, index }) => {
    return (
        <div className='bg-white h-fit w-[300px] pb-2' key={index}>
            <img src={item?.images[0] ? item.images[0] : item.image} alt="product" />
            <p>{item?.name || item?.title}</p>
            <div className='flex justify-between items-center px-4 py-2'>
                <p className='text-md font-semibold font-sans'>₹{item?.price}</p>
                <button className='bg-orange text-white rounded-full px-5 py-2 text-sm'>
                    Add to Cart
                </button> </div>
        </div>
    )
}

export default ProductCard;
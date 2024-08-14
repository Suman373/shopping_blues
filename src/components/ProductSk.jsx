import Skeleton from "react-loading-skeleton"

const ProductSk = ({ cards }) => {
    return Array(cards).fill(0).map((item, index) => (
        <div className='bg-white h-[380px] w-[300px] pb-2' key={index}>
            <Skeleton height={300} />
            <p className='p-3'><Skeleton count={2}/></p>
        </div>
    ))
}

export default ProductSk;
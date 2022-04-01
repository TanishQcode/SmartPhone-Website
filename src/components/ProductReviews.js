import React from 'react';
// import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import ProductReviewsCard from './ProductReviewsCard.js';
import '../styles/ProductReviews.css';

const productReviews = ({productReviews}) => {
    return (
        <div className='ProductReviews'>
        {productReviews.map((item,index)=>(
            <ProductReviewsCard key={item.image} price={item.price} image={item.image} name={item.name} review={item.review} index={index}/>

        ))}
        </div>
    );
}

export default productReviews;

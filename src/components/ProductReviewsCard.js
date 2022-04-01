import React from 'react';
import '../styles/ProductReviewsCard.css';



const Productreviewscard = ({review,image,index,price,name}) => {
    return (
        <div className='ProductReviewsCard'>
        <img src={image} alt={`${index} Reviews`}/>
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
            
        </div>
    );
}

export default Productreviewscard;

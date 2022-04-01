import React from 'react';
// import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import VideoCard from './VideoCard.js';
import '../styles/Videos.css';





const Videos = ({videos}) => {
    return (
        <div className='videos'>
        {videos.map((item,index)=>(
            <VideoCard image={item.image} key={item.image} index={index} name={item.name}/>
        ))}
            
        </div>
    );
}

export default Videos;

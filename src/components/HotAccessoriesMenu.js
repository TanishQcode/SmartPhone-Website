import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/HotAccessories.css"

const HotAccessoriesMenu = () => {
    return (
        <div className='HotAccesoriesMenu'>
            <Link className="HotAccesoriesLink" to="/music">Music Store</Link>
            <Link className="HotAccesoriesLink" to="/smartDevice">Smart Devices</Link>
            <Link className="HotAccesoriesLink" to="/home">Home</Link>
            <Link className="HotAccesoriesLink" to="/lifestyle">Lifestyle</Link>
            <Link className="HotAccesoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
        </div>
    )
}

export default HotAccessoriesMenu;

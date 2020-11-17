import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className="overlay">
                <div className="banner-content">
                    <h1 style={{textAlign: 'center'}}>FIND YOUR HOUSE RENT</h1>
                    <div>
                        <input style={{ width: '71%',border:'none', margin: '10px 15px', padding: '10px', borderRadius:'3px'}} type="text" name="search" id="" placeholder="search..." />
                        <input style={{background:'#275A53',color:'#fff',border:'none',padding:'10px 30px',borderRadius:'3px'}} type="submit" value="Find Now"/>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Banner;
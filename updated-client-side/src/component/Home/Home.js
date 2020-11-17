import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import HouseRent from '../HouseRent/HouseRent';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HouseRent></HouseRent>
        </div>
    );
};

export default Home;
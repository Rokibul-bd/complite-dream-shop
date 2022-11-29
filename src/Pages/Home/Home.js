import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from './Banner/Banners';
import Catagories from '../Catagories/Catagories';
import SellesSteps from './SellesSteps/SellesSteps';



const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
            <SellesSteps></SellesSteps>
        </div>
    );
};

export default Home;
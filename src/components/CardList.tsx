import React from 'react';
import Card from './Card';
import hotelTN1 from '../assets/images/hotel-tn1.png';
import weatherPage from '../assets/images/weather-page-sc.png';
import sortingImg from '../assets/images/sorting-alg-vis.png';

const CardList: React.FC = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Card title="Hotel Management" description='Bla Bla' thumbnail={hotelTN1}/>
            <Card title='Sorting Algorithm Visualizer' description='blabla' thumbnail={sortingImg}/>
            <Card title='Weather App' description='totot' thumbnail={weatherPage}/>
        </div>
    );
};

export default CardList;

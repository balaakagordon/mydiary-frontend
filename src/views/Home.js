import React from 'react';
import GetEntries from '../components/GetEntries';

const Home = () => (
    <div className="container" >
        <div className="home-heading">My Stories</div>
        <GetEntries />
    </div>
);

export default Home;
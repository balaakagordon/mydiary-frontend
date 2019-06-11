import React from 'react';
import GetEntries from '../components/GetEntries';

const Home = () => (
	<div>
    <div className="container" >
        <div className="home-heading">My Stories</div>
        <GetEntries />
    </div>
	</div>
);

export default Home;
import React from 'react';
import NavigationBar from '../components/navigation/NavigationBar';
// import EntryCard from '../components/EntryCard';
// import GetEntries from '../components/GetEntries';


const Home = () => (
	<div>
		<NavigationBar />
		<div className="container list-entries">
            {/* <EntryCard /> */}
            {/* <GetEntries /> */}
        </div>
	</div>
);

export default Home;
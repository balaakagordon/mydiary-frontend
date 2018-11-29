import React from 'react';
import NavigationBar from '../components/navigation/NavigationBar';
import GetEntries from '../components/GetEntries';
import Background from '../images/diary1.jpg';

var sectionStyle = {
    position: "fixed",
    width: "100%",
    height: "800px",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

const Home = () => (
	<div style={ sectionStyle }>
		<NavigationBar />
        <section className="container list-entries" >
            <GetEntries />
        </section>
	</div>
);

export default Home;
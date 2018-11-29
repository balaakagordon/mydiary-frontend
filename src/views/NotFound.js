import React from 'react';
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

const NotFound = () => (
	<div style={ sectionStyle }>
        <section className="container" >
            Sorry, this page cannot be found
        </section>
	</div>
);

export default NotFound;
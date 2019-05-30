import React, {Component} from 'react';
import NavigationBar from '../components/navigation/NavigationBar';
import Background from '../images/diary1.jpg';
import WriteOrEdit from '../components/WriteOrEdit';

var sectionStyle = {
    position: "fixed",
    width: "100%",
    height: "800px",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

class WriteEntryView extends Component {
    render() {
      return (
        <div style={ sectionStyle }>
          <NavigationBar />
          <section className="container view-entry" >
            <WriteOrEdit
            entryAction="creating_entry"
            />
          </section>
      </div>
  )}
};

export default WriteEntryView;
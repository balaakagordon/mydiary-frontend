import React, {Component} from 'react';
import NavigationBar from '../components/navigation/NavigationBar';
import GetEntry from '../components/GetEntry';
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
  
  class EntryView extends Component {
      render() {
        let entry_id;
        entry_id = this.props.match.params.entry_id;
        return (
          <div style={ sectionStyle }>
            <NavigationBar />
            <section className="container view-entry" >
                <GetEntry entry_id={entry_id} />
            </section>
        </div>
    )}
  };

export default EntryView;

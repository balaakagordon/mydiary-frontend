import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProfile } from '../actions/profileActions';
import { connect } from 'react-redux';
import NavigationBar from '../components/navigation/NavigationBar';
import Background from '../images/diary1.jpg';
import DisplayProfile from '../components/DisplayProfile'


var sectionStyle = {
    position: "fixed",
    width: "100%",
    height: "800px",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  
  
  class ProfileView extends Component {
    state = {}

    componentDidMount() {
          this.props.getProfile();
      }
      render() {
          let current_entries;
          let last_visited;
          let joined;
          let notifications;

        if(this.props.profile){
            const profile = this.props.profile;
            current_entries = profile.currentEntries;
            joined = profile.registered;
            last_visited = profile.lastUsed;
            notifications = profile.notifications;
        }
        return ( 
            <div style={ sectionStyle }> 
                <NavigationBar />
                <section className="container view-entry">
                    <DisplayProfile
                    current_entries={current_entries}
                    last_visited={last_visited}
                    joined={joined}
                    notifications={notifications}
                    />
                </section>
        </div> 
         );
    }
}
ProfileView.propTypes = {
    getProfile: PropTypes.func,
};
 
const mapStateToProps = state => ({
    profile: state.users.profile,
  });
export default connect(mapStateToProps, { getProfile })(ProfileView);

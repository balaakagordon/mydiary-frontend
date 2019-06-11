import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProfile } from '../actions/profileActions';
import { connect } from 'react-redux';
import NavigationBar from '../components/navigation/NavigationBar';
import DisplayProfile from '../components/DisplayProfile'


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
            <div>
                <section className="container">
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

const mapStateToProps = state => ({
    profile: state.users.profile,
  });
export default connect(mapStateToProps, { getProfile })(ProfileView);

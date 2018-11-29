import React, { Component } from 'react';


export class DisplayProfile extends Component {
  state = {};

  render() {
    const username = localStorage.getItem('username');
    return (
        <div className="profile">
            <div className="row">
                <div className="profile-display">
                    <div className="entry-title">
                        Hello, {username}!
                    </div>
                    <div className="profile-body">
                    <br />  
                    {(this.props.current_entries === 1) ? `You have ${this.props.current_entries} story, so far` : (this.props.current_entries > 1) ? `You have ${this.props.current_entries} stories, so far` : null}
                    <br />
                    {`You last visited me on ${this.props.last_visited}`}
                    <br />
                    {`You joined MyDiary on ${this.props.joined}`}
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
  }
}

export default DisplayProfile

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ImageEditor from './ImageEditor';
import ModalComponent from './ModalComponent';


class DisplayProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    showModal = () => {
        this.setState({showModal: true})
    }

    hideModal = () => {
        this.setState({showModal: false})
    }

    editProfile = () => {
        this.props.editProfile();
        this.hideModal();
    }

    render() {
        return (
            <div className="view-profile-card">
                <div className="profile-display">
                    <div className="profile-title">
                        Hello, {this.props.user}!
                    </div>
                    <center>
                        <ModalComponent showModal={this.state.showModal} handleClose={this.hideModal} handleInput={this.props.handleModalInput} editProfile={this.editProfile} />
                        <ImageEditor image={this.props.image} />
                            <div className="btn-profile-visible">
                                <button
                                    onClick={this.props.openWidget}
                                    className="btn-edit-profile btn-profile-picture">
                                    Change Picture
                                </button>
                                <button
                                    onClick={this.showModal}
                                    className="btn-edit-profile btn-profile-details">
                                    Edit Your Details
                                </button>
                            </div>
                            <div className="btn-profile">
                                <button
                                    onClick={this.props.editProfile}
                                    className="btn-edit-save-img"
                                    style={{display: this.props.uploadButton}}>
                                    Save New Profile Image
                                </button>
                            </div>
                    </center>
                    <div className="profile-body">
                    <p>
                        {(this.props.current_entries === 1) ? `You have ${this.props.current_entries} story, so far` : `You have ${this.props.current_entries} stories, so far`}
                    </p>
                    <p>{`You last visited me on ${this.props.last_visited}`}</p>
                    <p>{`You joined MyDiary on ${this.props.joined}`}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayProfile

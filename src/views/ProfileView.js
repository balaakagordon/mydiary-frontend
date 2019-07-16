import React, { Component } from 'react';
import getProfile from '../actionCreators/getProfile';
import updateProfile from '../actionCreators/updateProfile';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import DisplayProfile from '../components/DisplayProfile'
import DefaultProfileImage from '../images/avatar.png';


class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                id: null,
                firstName: null,
                lastName: null,
                email: null,
                image: null,
                lastUsed: null,
                currentEntries: null,
                allEntries: null,
                notifications: null,
                createdAt: null,
                selectedFile: null
            },
            uploadButton: 'none',
            loading: false,
            status: null,
            errors: null
        }
    }

    componentDidMount() {
        this.props.getProfile();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
          profile: nextProps.profile,
          loading: nextProps.loading,
          status: nextProps.status,
          errors: nextProps.errors
        });
    }

    raiseErr = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
            // hideProgressBar: true
        });
    }

    confirmPassword = () => {
        if (!this.state.profile.confirmedPassword) {
            this.raiseErr('Please confirm your new password');
            return false;
        } else if (this.state.profile.password !== this.state.profile.confirmedPassword) {
            this.raiseErr('Your confirmed password must match your new password');
            return false;
        }
        return true;
    }

    editProfile = () => {
        if (this.state.profile !== this.props.profile) {
            if (this.state.profile.password) {
                if (!this.confirmPassword()) {
                    return;
                }
            }
            this.props.updateProfile(
                this.props.profile.id,
                this.state.profile
            );
        }
    }

    checkUploadResult = (resultEvent) => {
        if (resultEvent.event === 'success') {
            this.setState( prevState => {
                return {
                    profile: {
                        ...prevState.profile,
                        image: resultEvent.info.secure_url
                    },
                    uploadButton: 'block'
                }
            })
        }
    }

    openWidget = () => {
        this.widget.open()
    }

    handleModalInput = (event) => {
        let {name, value} = event.target;
        this.setState( prevState => {
            return {
                profile: {
                    ...prevState.profile, [name]: value
                }
            }
        })
    }

    render() {
        this.widget = window.cloudinary.createUploadWidget(
            {
              cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
              uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET_NAME,
              folder: process.env.REACT_APP_CLOUDINARY_FOLDER
            },
            (error, result) => {this.checkUploadResult(result)}
        );

        return (
            <div className="container">
                <DisplayProfile
                    image={this.state.profile.image ?
                        this.state.profile.image :
                        DefaultProfileImage}
                    user={this.state.profile.firstName}
                    current_entries={this.state.profile.allEntries}
                    last_visited={this.state.profile.lastUsed}
                    joined={this.state.profile.createdAt}
                    notifications={this.state.profile.notifications}
                    uploadButton = {this.state.uploadButton}
                    editProfile = {this.editProfile}
                    openWidget = {this.openWidget}
                    handleModalInput={this.handleModalInput}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile.profile,
    loading: state.profile.loading,
    status: state.profile.status,
    errors: state.profile.errors,
  });

export default connect(mapStateToProps, {
    getProfile,
    updateProfile
})(ProfileView);

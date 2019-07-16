import React, { Component } from 'react';
import getOneEntry from '../actionCreators/getOneEntry';
import { connect } from 'react-redux';
import { toast } from "react-toastify";
import history from "../history";
import Loader from "react-loader-spinner";
import WriteOrEdit from '../components/WriteOrEdit';
import updateEntry from "../actionCreators/updateEntry";


class UpdateEntryView extends Component {
  constructor(props) {
    super(props);

    this.state = {
        entry: {
          title: "",
          body: "",
          error: ""
        },
        loading: false,
        message: null,
        status: null,
        errors: null,
      }
      // updateEntry: {
      //   entry: {
      //     title: "",
      //     body: "",
      //     error: ""
      //   },
      //   loading: false,
      //   message: null,
      //   status: null,
      //   errors: null,
      // }
    // };
  }

  componentDidMount() {
    this.props.getOneEntry(this.props.match.params.entryId);
  }

  componentWillReceiveProps(nextProps) {
    console.log('first nextprops ', nextProps)
    if (nextProps.getEntry) {
      this.setState({
          entry: nextProps.getEntry.entry
        });
    } else {
      this.handleUpdateResponse(nextProps);
    }
  }

  handleUpdateResponse = (nextProps) => {
    console.log('nextprops ', nextProps)
    if (nextProps.updateEntry.status === "success") {
      this.handleSuccess(nextProps.updateEntry.message);
    } else if (nextProps.updateEntry.status === "error") {
      this.handleErrors(nextProps.updateEntry.errors);
    }
  }

  handleTitleChange = event => {
    let { name, value } = event.target;
    this.setState(prevState => {
      return {
        entry: {
          ...prevState.entry,
          [name]: value
        }
      };
    });
  };

  handleBodyChange = event => {
    this.setState(prevState => {
      return {
        entry: {
          ...prevState.entry,
          body: event
        }
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state.entry;
    if (this.props.match.params.entryId) {
      this.props.updateEntry(this.props.match.params.entryId, data);
      history.push(`/${this.props.match.params.entryId}`)
    }

    this.componentDidUpdate = () => {
      if (this.props) {
        const returnedEntry = this.props.entry;
        var entryId = returnedEntry.entryId;
        if (entryId) {
          history.push(`/edit/${entryId}`);
        }
      }
    };
  }

  handleSuccess = message => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true
    });
    history.push("/home");
  };

  handleLoader = () => {
    return <Loader type="Circles" color="black" heigh={40} width={40} />;
  };

  render() {
    let showLoader = null;
    if (this.props.loading) {
      showLoader = this.handleLoader();
    }
    return (
      <div>
        <section className="container">
            <WriteOrEdit
              entry={this.state.entry}
              showLoader={showLoader}
              handleTitleChange={this.handleTitleChange}
              handleBodyChange={this.handleBodyChange}
              handleSubmit={this.handleSubmit}
            />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    getEntry: state.getEntry,
    updateEntry: state.updateEntry
  });

export default connect(
  mapStateToProps,
  { getOneEntry, updateEntry }
)(UpdateEntryView);
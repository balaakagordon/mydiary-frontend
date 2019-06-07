import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import history from "../history";
import createEntry from "../actionCreators/createEntry";
import updateEntry from "../actionCreators/updateEntry";
import EntryForm from "./EntryForm";
import Modules from "../utils/Editorplugins";

class WriteOrEdit extends Component {
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
      writeOrEdit: null
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.entryAction === "updating_entry") {
        this.setState({
            entry: {
                title: this.props.titleValue,
                body: this.props.bodyValue
              }
          });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.titleValue !== prevProps.titleValue) {
      this.setState({
        entry: {
          title: this.props.titleValue,
          body: this.props.bodyValue
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === "success") {
      this.handleSuccess(nextProps.message);
    } else if (nextProps.status === "error") {
      this.handleErrors(nextProps.errors);
    }
  }

  handleSuccess = message => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true
    });
    history.push("/home");
  };

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

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state.entry;
    if (this.props.entryAction === "creating_entry") {
      this.props.createEntry(data);
    } else if (this.props.entryAction === "updating_entry") {
      if (this.props.entryId) {
        this.props.updateEntry(this.props.entryId, data);
        history.push(`/${this.props.entryId}`)
      }
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
        <div className="loader">{showLoader}</div>
        <EntryForm
          handleTitleChange={this.handleTitleChange}
          handleBodyChange={this.handleBodyChange}
          modules={Modules.modules}
          formats={Modules.formats}
          handleSubmit={this.handleSubmit}
          titleValue={this.state.entry.title}
          body={this.state.entry.body}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entry: state.writeEntry.entry,
  loading: state.writeEntry.loading,
  status: state.writeEntry.status,
  message: state.writeEntry.message,
  errors: state.writeEntry.errors
});

export default connect(
  mapStateToProps,
  { createEntry, updateEntry }
)(WriteOrEdit);

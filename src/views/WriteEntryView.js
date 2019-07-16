import React, {Component} from 'react';
import WriteOrEdit from '../components/WriteOrEdit';
import createEntry from "../actionCreators/createEntry";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";
import history from "../history";

class WriteEntryView extends Component {
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
      errors: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === "success") {
      this.handleSuccess(nextProps.message);
    } else if (nextProps.status === "error") {
      this.handleErrors(nextProps.errors);
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
    this.props.createEntry(data);
  }

  showLoader = () => {
    return <Loader type="Circles" color="black" height={40} width={40} />;
  };

  handleSuccess = message => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true
    });
    history.push("/home");
  };

  handleErrors = errors => {
		for (let err in errors) {
		  	toast.error(errors[err][0], {
				position: toast.POSITION.TOP_CENTER,
				hideProgressBar:true
		  	});
		}
	}

  render() {
    let showLoader = null;
    if (this.props.loading) {
      showLoader = this.showLoader();
    }
    return (
      <div>
        <section className="container" >
          <WriteOrEdit
            entry={this.state.entry}
            handleTitleChange={this.handleTitleChange}
            handleBodyChange={this.handleBodyChange}
            handleSubmit={this.handleSubmit}
            showLoader={showLoader}
          />
        </section>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  entry: state.newEntry.entry,
  loading: state.newEntry.loading,
  status: state.newEntry.status,
  message: state.newEntry.message,
  errors: state.newEntry.errors
});


export default connect(
  mapStateToProps,
  { createEntry }
)(WriteEntryView);

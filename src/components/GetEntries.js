import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import getAllEntries from "../actionCreators/getAllEntries";
import PreviewEntryCard from "./PreviewEntryCard";

class GetEntries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entriesData: {
        entries: [],
        total: 0,
        currentPage: 1,
        from: null,
        to: null,
        lastPage: null,
        perPage: null,
        firstPageUrl: null,
        lastPageUrl: null,
        prevPageUrl: null,
        nextPageUrl: null
      },
      loading: false,
      message: null,
      status: null,
      errors: null
    };
  }

  componentDidMount() {
    this.props.getAllEntries();
  }

  componentWillReceiveProps(nextProps) {
    console.log('next ==> ', nextProps.entriesData);
    this.setState({
      entriesData: nextProps.entriesData
    });
  }

  showEntries() {
    // use for loop to get next and prev indices
  }

  render() {
    let noEntries;
    let listEntries;
    if (this.state.entriesData.total === 0) {
      noEntries = "You do not have any entries, yet. Get writing!";
      listEntries = null;
    } else {
      listEntries = this.state.entriesData.entries.map(entry => (
        <div key={entry.title}>
          <Link to={`${entry.id}`}>
            <PreviewEntryCard
              date={entry.updated_at}
              title={entry.title}
              author={entry.author}
              entryId={entry.id}
              body={renderHTML(entry.body)}
              // next={entries.next}
              // previous={entries.previous}
            />
          </Link>
        </div>
      ));
      noEntries = null;
    }
    return (
      <div className='entries-window'>
        {listEntries}
        {noEntries ? (
          <div className="jumbotron">
            <center>{noEntries}</center>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entriesData: state.getEntries.entriesData,
  loading: state.getEntries.loading,
  message: state.getEntries.message,
  status: state.getEntries.status,
  errors: state.getEntries.errors
});

export default connect(
  mapStateToProps,
  { getAllEntries }
)(GetEntries);

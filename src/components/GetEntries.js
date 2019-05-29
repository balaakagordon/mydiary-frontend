import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import getAllEntries from '../actionCreators/getAllEntries';
import EntryCard from './EntryCard';

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

  render() {
    let noEntries;
    let listEntries;
    if (this.props.entriesData.total === 0) {
        noEntries = "You do not have any entries, yet. Get writing!"
    } else {
        listEntries = this.props.entriesData.entries.map(entry => (
          <div key={entry.title}>
            <a href={`${entry.id}`} >
                <EntryCard
                  // date={entry.date}
                  title={entry.title}
                  author={entry.author}
                  entry_id={entry.id}
                  body={renderHTML(entry.body)}
                // next={entries.next}
                // previous={entries.previous}
                />
            </a>
          </div>
        ));
      }
    return (
      <div>
        <div className="container">
            {listEntries}
            {noEntries
            ? <div className="jumbotron"><center>{noEntries}</center></div> : ''}
        </div>
        <br />
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

export default connect(mapStateToProps, { getAllEntries })(GetEntries);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { getEntries } from '../actions/entriesActions';
import EntryCard from './EntryCard';
// import NavigationBar from './navigation/NavigationBar';

class GetEntries extends Component {
  componentDidMount() {
    this.props.getEntries();
  }

  render() {
    let noEntries;
    let listEntries;
    const { entries } = this.props;
    console.log("ENTRIES", entries);
    const data = entries || [];
    console.log("MY PROPS", this.props)
    if (data.length === 0) {
        console.log("NO DATA")
        noEntries = "You do not have any entries, yet. Get writing!"
    }
    if (data) {
        console.log("DATA", data)
        listEntries = data.map(entry => (
          <div key={entry.title}>
            <EntryCard
              date={entry.date}
              title={entry.title}
              author={entry.user_id}
              body={renderHTML(entry.data)}
              next={entries.next}
              previous={entries.previous}
            />
          </div>
        ));
      }
    return (
      <div>
        <div className="container">
            Entries
            {listEntries}
            {noEntries
            ? <div className="jumbotron"><center>{noEntries}</center></div> : ''}
        </div>
        <br />
      </div>
    );
  }
}
GetEntries.propTypes = {
  getEntries: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  entries: state.entries.entries,
});

export default connect(mapStateToProps, { getEntries })(GetEntries);

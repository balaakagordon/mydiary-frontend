import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { getEntries } from '../actions/getEntriesActions';
import EntryCard from './EntryCard';

export class GetEntries extends Component {
  componentDidMount() {
    this.props.getEntries();
  }

  render() {
    let noEntries;
    let listEntries;
    const { entries } = this.props;
    const data = entries || [];
    if (data.length === 0) {
        noEntries = "You do not have any entries, yet. Get writing!"
    } else {
        listEntries = data.map(entry => (
          <div key={entry.title}>
            < a href={`${entry.entry_id}`} >
                <EntryCard
                date={entry.date}
                title={entry.title}
                author={entry.user_id}
                entry_id={entry.entry_id}
                body={renderHTML(entry.data)}
                next={entries.next}
                previous={entries.previous}
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
GetEntries.propTypes = {
  getEntries: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  entries: state.entries.entries,
});

export default connect(mapStateToProps, { getEntries })(GetEntries);

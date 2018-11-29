import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { getEntry } from '../actions/entriesActions';
import DisplayEntry from './DisplayEntry';


class GetEntry extends Component {
  componentDidMount() {
    this.props.getEntry(this.props.entry_id);
  }

  render() {
    const { entry } = this.props;
    let displayEntry;
    if (entry) {
        displayEntry = <DisplayEntry 
                        date={entry.date}
                        title={entry.title}
                        author={entry.user_id}
                        entry_id={entry.entry_id}
                        body={renderHTML(entry.data)} />
    }
    return (
        <div className="container">
            {displayEntry}
        </div>
    );
  }
}
GetEntry.propTypes = {
  getEntry: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  entry: state.entries.entry,
});

export default connect(mapStateToProps, { getEntry })(GetEntry);

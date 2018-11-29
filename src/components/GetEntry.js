import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { getEntry } from '../actions/entriesActions';
import DisplayEntry from './DisplayEntry';
// import NavigationBar from './navigation/NavigationBar';

class GetEntry extends Component {
  componentDidMount() {
    this.props.getEntry(this.props.entry_id);
  }

  render() {
    const { entry } = this.props;
    console.log("THIS IS MY ENTRY ====>", entry)
    let displayEntry;
    if (entry) {
        displayEntry = <DisplayEntry 
                        date={entry.date}
                        title={entry.title}
                        author={entry.user_id}
                        entry_id={entry.entry_id}
                        body={renderHTML(entry.data)} />
    }
    console.log("RENDER PROPS", this.props)
    return (
        <div>
        <div className="container">
            {displayEntry}
        </div>
        <br />
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

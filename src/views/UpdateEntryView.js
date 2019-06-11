import React, { Component } from 'react';
import getOneEntry from '../actionCreators/getOneEntry';
import { connect } from 'react-redux';
import WriteOrEdit from '../components/WriteOrEdit';


class UpdateEntryView extends Component {

  componentDidMount() {
    this.props.getOneEntry(this.props.match.params.entryId);
  }

  render() {
    return (
      <div>
        <section className="container">
            <WriteOrEdit
              entryId={this.props.match.params.entryId}
              entryAction= "updating_entry"
              titleValue={this.props.entry.title}
              bodyValue={this.props.entry.body}
            />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    entry: state.getEntry.entry,
    loading: false,
    status: null,
    message: null
  });
export default connect(mapStateToProps, { getOneEntry })(UpdateEntryView);

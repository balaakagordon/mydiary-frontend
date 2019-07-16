import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import GetEntry from "../components/GetEntry";
import getOneEntry from "../actionCreators/getOneEntry";


class EntryView extends Component {
  componentDidMount() {
    this.props.getOneEntry(this.props.match.params.entryId);
  }

  editEntry = () => {
    history.push(`/edit/${this.props.match.params.entryId}`);
  };

  render() {
    const { entry } = this.props;
    return (
      <div>
        <section className="container">
          <GetEntry
            entry={entry}
            editEntry={this.editEntry}
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entry: state.getEntry.entry
});

export default connect(
  mapStateToProps,
  { getOneEntry }
)(EntryView);

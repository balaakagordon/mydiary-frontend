import React, { Component } from "react";
import { connect } from "react-redux";
import renderHTML from "react-render-html";
import history from "../history";
import getOneEntry from "../actionCreators/getOneEntry";
import ViewEntryCard from "./ViewEntryCard";
import Button from "./FormComponents/Button";

class GetEntry extends Component {
  componentDidMount() {
    this.props.getOneEntry(this.props.entryId);
  }

  editEntry = () => {
    if (this.props.entryId) {
      history.push(`/edit/${this.props.entryId}`);
    }
  };

  render() {
    const { entry } = this.props;
    console.log(entry);
    return (
      <center>
        <ViewEntryCard
          date={entry.lastEdited}
          title={entry.title}
          author={entry.author}
          entryId={entry.id}
          body={renderHTML(entry.body)}
        />
        <Button
          action={this.editEntry}
          title={"Edit"}
          className={"entry-submit"}
        />
      </center>
    );
  }
}

const mapStateToProps = state => ({
  entry: state.getEntry.entry
});

export default connect(
  mapStateToProps,
  { getOneEntry }
)(GetEntry);

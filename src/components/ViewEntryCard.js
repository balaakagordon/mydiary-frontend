import React, { Component } from "react";

export class ViewEntryCard extends Component {
  state = {};

  editEntry = () => {
    if (this.props.entryId) {
      window.location = `/edit/${this.props.entryId}`;
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="view-entry-card">
        <div className="entry-display">
          <div className="entry-title">{this.props.title}</div>
          <div className="entry-date">{this.props.date}</div>
          <div className="entry-body">{this.props.body}</div>
        </div>
      </div>
    );
  }
}

export default ViewEntryCard;

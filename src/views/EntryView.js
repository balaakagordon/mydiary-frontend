import React, { Component } from "react";
import GetEntry from "../components/GetEntry";


class EntryView extends Component {
  render() {
    let entryId;
    entryId = this.props.match.params.entryId;
    return (
      <div>
        <section className="container">
          <GetEntry entryId={entryId} />
        </section>
      </div>
    );
  }
}

export default EntryView;

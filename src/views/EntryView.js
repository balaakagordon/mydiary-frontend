import React, { Component } from "react";
import NavigationBar from "../components/navigation/NavigationBar";
import GetEntry from "../components/GetEntry";
import Background from "../images/diary1.jpg";

var sectionStyle = {
  position: "fixed",
  width: "100%",
  height: "1200px",
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

class EntryView extends Component {
  render() {
    let entryId;
    entryId = this.props.match.params.entryId;
    return (
      <div style={sectionStyle}>
        <NavigationBar />
        <section className="container">
          <GetEntry entryId={entryId} />
        </section>
      </div>
    );
  }
}

export default EntryView;

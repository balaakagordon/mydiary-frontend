import React, { Component } from 'react';


export class DisplayEntry extends Component {
  state = {};

  render() {
    return (
        <div className="entry">
            <div className="row">
                <div className="entry-display">
                    <div className="entry-title">
                        {this.props.title}
                    </div>
                    <div className="entry-date">
                        {this.props.date}
                    </div>
                    <div className="entry-body">
                        {this.props.body}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default DisplayEntry

import React, { Component } from 'react';


export class PreviewEntryCard extends Component {
  state = {};

  render() {
    return (
        <div className="preview-entry-card">
            <div className="entry-card-display">
                <div className="entry-card-title">
                    {this.props.title}   -   {this.props.date}
                </div>
                <div className="entry-card-body">
                    {this.props.body}
                </div>
            </div>
        </div>
    );
  }
}

export default PreviewEntryCard

import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export class EntryCard extends Component {
  state = {};

  render() {
    return (
        <div className="entry-card">
            <div className="row">
                <div className="entry-card-display">
                    <div className="entry-card-title">
                        {this.props.title}   -   {this.props.date}
                    </div>
                    <div className="entry-card-body">
                        {this.props.body}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default EntryCard

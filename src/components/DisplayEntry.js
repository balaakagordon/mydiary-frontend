import React, { Component } from 'react';


export class DisplayEntry extends Component {
  state = {};

  editEntry = () => {
      if (this.props.entry_id) {
          window.location =`/edit/${this.props.entry_id}`;
      }
  }

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
                    <br />
                    <div>
                        <center>
                            <button 
                            className="entry-submit"
                            type="submit"
                            id="submit"
                            name="submit"
                            onClick={this.editEntry}>
                            Edit
                            </button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default DisplayEntry

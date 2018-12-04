import React, { Component } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


class EntryForm extends Component {
state = {}

render() {
  return (
    <div className="container">
        <form method="POST" id="entryform" onSubmit={this.props.handleSubmit}>
            <div className="form-group">
                <input 
                type="text"
                name="title"
                id="title"
                className="form-control"
                defaultValue={this.props.titleValue}
                onChange={this.props.change}
                placeholder="Your title here..." />
            </div>
            <div className="form-group">
                <ReactQuill
                id="text-editor"
                value={this.props.body}
                onChange={this.props.handleChange}
                modules={this.props.modules}
                formats={this.props.formats}
                placeholder="Your story here..."
                style={{ 
                    height: '350px',
                    background: 'white',
                }}
                />
            </div>
        <br />
        <br />
        <div className="form-group">
          <center><button
          className="entry-submit"
          type="submit"
          id="submit">Submit</button></center>
        </div>
      </form>
    </div>
  );
}
}

export default EntryForm;

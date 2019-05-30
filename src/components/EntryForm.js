import React, { Component } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import FormInputField from './FormComponents/FormInputField'
import FormSubmitButton from './FormComponents/FormSubmitButton'


class EntryForm extends Component {

render() {
  return (
    <div className="container">
            <FormInputField
              type={'text'}
              // title={'First Name'}
              name={'title'}
              id={'title'}
              className="form-control"
              defaultValue={this.props.titleValue}
              value={this.props.titleValue}
              handleChange={this.props.handleTitleChange}
              placeholder={'Your title here...'}
            />
            {/* <div className="form-group"> */}
                <ReactQuill
                  id="text-editor"
                  value={this.props.body}
                  onChange={this.props.handleBodyChange}
                  modules={this.props.modules}
                  formats={this.props.formats}
                  placeholder="Your story here..."
                  style={{
                      height: '350px',
                      background: 'white',
                  }}
                />
            {/* </div> */}
        <div className="form-group">
          <br />
          <br />
          <br />
          <br />
          <center>
            <FormSubmitButton
              action={this.props.handleSubmit}
              title={'Submit'}
              className={"entry-submit"}
            />
          </center>
        </div>
    </div>
  );
}
}

export default EntryForm;

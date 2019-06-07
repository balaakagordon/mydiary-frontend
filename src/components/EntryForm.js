import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FormInputField from "./FormComponents/FormInputField";
import Button from "./FormComponents/Button";

const EntryForm = (props) => {
  return (
    <div>
      <div>
        <FormInputField
          type={"text"}
          name={"title"}
          id={"title"}
          className="entry-title-input"
          titleValue={props.titleValue}
          handleChange={props.handleTitleChange}
          placeholder={"Your title here..."}
        />
      </div>
      <div>
        <ReactQuill
          id="text-editor"
          value={props.body}
          onChange={props.handleBodyChange}
          modules={props.modules}
          formats={props.formats}
          placeholder="Your story here..."
          style={{
            width: "80%",
            margin: "3% auto 3% auto",
            paddingBottom: "40px",
            background: "white",
            border: "solid 1px",
          }}
        />

      </div>
        <center>
          <Button
            action={props.handleSubmit}
            title={"Submit"}
            className={"entry-submit"}
          />
        </center>
    </div>
  );
}

export default EntryForm;

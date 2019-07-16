import React from "react";
import EntryForm from "./EntryForm";
import Modules from "../utils/Editorplugins";

const WriteOrEdit = (props) => {
  return (
    <div>
      <div className="loader">{props.showLoader}</div>
      <EntryForm
        handleTitleChange={props.handleTitleChange}
        handleBodyChange={props.handleBodyChange}
        modules={Modules.modules}
        formats={Modules.formats}
        handleSubmit={props.handleSubmit}
        titleValue={props.entry.title}
        body={props.entry.body}
      />
    </div>
  );
}


export default WriteOrEdit;

import React from "react";
import renderHTML from "react-render-html";
import ViewEntryCard from "./ViewEntryCard";
import Button from "./FormComponents/Button";

const GetEntry = props => {
  return (
    <center>
      <ViewEntryCard
        date={props.entry.lastEdited}
        title={props.entry.title}
        author={props.entry.author}
        entryId={props.entry.id}
        body={renderHTML(props.entry.body)}
      />
      <Button
        action={props.editEntry}
        title={"Edit"}
        className={"entry-submit"}
      />
    </center>
  );
}

export default GetEntry;

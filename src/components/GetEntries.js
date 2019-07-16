import React from "react";


const GetEntries = props => {
  return (
    <div className='entries-window'>
      {props.listEntries}
      {props.noEntries ? (
        <div className="jumbotron">
          <center>{props.noEntries}</center>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}


export default GetEntries;

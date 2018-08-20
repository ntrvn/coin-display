import React from "react";
import uid from "uid";

const Level = props => {
  var displayContent = [];
  if (props.level === 0) {
    displayContent = Object.keys(props.data);
  }
  return (
    <div>
      <div>
        <ul>
          {displayContent.map(el => {
            return <li key={uid()}>{el}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Level;

import React from "react";
import uid from "uid";

const Level = props => {
  console.log(props.level);
  console.log(props.data);
  var displayContent = [];
  if (props.level === 0) {
    displayContent = Object.keys(props.data);
  }
  console.log(displayContent);
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

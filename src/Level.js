import React from "react";
import uid from "uid";

const Level = props => {
  var displayContent = [];
  // var text = props.text.split("$");
  // text = text[0];
  console.log(props.text);
  if (props.level === 0) {
    displayContent = Object.keys(props.data);
  } else {
    displayContent = props.data[props.text];
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

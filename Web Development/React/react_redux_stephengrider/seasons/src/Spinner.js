import React from "react";

const Spinner = ({ message = "Loading..." }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{message}</div>
    </div>
  );
};
//You can also write default props like this,
//but the destructuring method above is probably better

/* Spinner.defaultProps = {
    message: "Loading...",
}; */

export default Spinner;

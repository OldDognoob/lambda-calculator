import React, {useState} from "react";

const Display = (props) => {
  const [displayState, setDisplayState] = useState('0');
  return <div className="display">{displayState}</div>;
};
export default Display;

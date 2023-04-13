import React from "react";


const ActionCircle = (props) => {
  return <div className={props.className}>
  <img src={props.src} alt={props.alt}/>
  <div className={props.count}>1</div>
  </div>
};

export default ActionCircle;

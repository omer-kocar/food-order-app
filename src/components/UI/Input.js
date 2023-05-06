import React from "react";
import css from "./Input.module.css";
function Input(props) {


    // console.log(props.input.id)
  return (
    <div className={css.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} />
      {/* type:'text' <= = => {...props.input} */}
    </div>
  );
}

export default Input;

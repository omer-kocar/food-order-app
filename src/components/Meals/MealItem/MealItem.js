import React from "react";
import css from "./MealItem.module.css"

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`

    
  return (
    <li className={css.meal}  >
      <div>
        <h3>{props.name}</h3>
        <div className={css.description} >{props.description}</div>
        <div className={css.price} >{price}</div>
      </div>
      <div></div>
    </li>
  );
}

export default MealItem;

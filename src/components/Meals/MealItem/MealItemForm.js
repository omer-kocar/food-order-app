import React from 'react'
import css from "./MealItemForm.module.css"
import Input from "../../UI/Input"

function MealItemForm(props) {
  return (
    <form className={css.form} >
        <Input label="Amount" input={{
            id:'amount',
            type:'number',
            min:'',
            max:'',
            step:'1',
            defaultValue: '1'
        }} />
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm
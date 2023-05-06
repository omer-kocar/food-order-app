import CartIcon from '../Cart/CartIcon'
import React from 'react'
import css from "../Cart/HeaderCartButton.module.css"

function HeaderCartButton() {
  return (
    <button className={css.button} >
        <span className={css.icon} ><CartIcon/></span>
        <span>Your Cart</span>
        <span className={css.badge} >3</span>
    </button>
  )
}

export default HeaderCartButton
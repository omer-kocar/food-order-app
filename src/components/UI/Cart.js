import React from 'react'
import css from "./Cart.module.css"

function Cart(props) {
  return (
    <div className={css.cart}>{props.children}</div>
  )
}

export default Cart
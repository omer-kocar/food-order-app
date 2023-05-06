import { Fragment } from "react";
import css from './Header.module.css'
import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton"



const Header = (props) => {
  return <Fragment>
    <header className={css.header} >
       <h1>ReactMeals</h1>
       <HeaderCartButton>Cart</HeaderCartButton>
    </header>
    <div className={css['main-image']} >
        <img src={mealsImage} alt="A table full of foods" />
    </div>
  </Fragment>;
}

export default Header;

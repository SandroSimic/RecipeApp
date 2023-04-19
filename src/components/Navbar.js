import React,{ useState, useContext} from "react";
import { Link } from "react-router-dom";
import purseImg from '../assets/purse.png'
import CartContext from '../store/cart-context'
import classes from '../App.module.scss'


const Navbar = (props) => {

  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber,item) => {return curNumber + item.amount},0)

  const [isOpen, setIsOpen] = useState(false);

  const openNav = ( ) => {
    setIsOpen(!isOpen)
    console.log(isOpen);
  }

  return (
    <nav className={classes.navbar} >
    <h1>FOODIED</h1>
        <ul className={`${classes["nav-items"]} ${isOpen && `${classes.open}`}`}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/recipes'>Recipes</Link></li>
        </ul>
        <div className={classes['navbar__cart']} onClick={props.onShowCart}>
            <img src={purseImg} alt='cart'/>
            <p className={classes.amount}>{numberOfCartItems}</p>
        </div>
        <div className={`${classes['hamburgerMenu']} ${isOpen && `${classes.open}`}`} onClick={openNav}>
            <div className={classes.line}></div>
        </div>
    </nav>
  );
};

export default Navbar;

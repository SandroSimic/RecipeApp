import React from "react";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const ActionCircle = (props) => {

  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  },0);

return (
  <div className={props.className} onClick={props.onClick}>
    <img src={props.src} alt={props.alt}/>
    <div className={props.count}>{numberOfCartItems}</div>
  </div>
  )
};

export default ActionCircle;

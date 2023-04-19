import React, {useRef} from "react";
import classes from '../App.module.scss'
import Input from "./UI/Input";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const HeroItems = (props) => {

  const cartCtx = useContext(CartContext)
  const amountInputRef = useRef()


  const onAddToCart = amount => {
    cartCtx.addItem({
      id: props.id,
      name:props.name,
      amount: amount,
      price: props.price
    })
  }  

  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      return
    }

    onAddToCart(enteredAmountNumber)
  }

  return <form className={classes.heroItems} onSubmit={submitHandler}>
        <img src={props.image} alt={props.name}/>
    <div className={classes['heroItems__texts']}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        
        <div className={classes['heroItems__texts__actions']}>
        <p className={classes['heroItems__texts__actions--price']}>${props.price}</p>
        <Input ref={amountInputRef} input={{type: 'number', min: '1', max: '5', step:'1',defaultValue: '1'}}/>
        <button className={classes['heroItems__texts__actions--buy']}>Buy Now</button>
        </div>
    </div>

  </form>;
};

export default HeroItems;

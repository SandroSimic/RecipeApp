import React, {useContext, useRef} from "react";
import classes from './HeroItems.module.css'
import Input from '../../UI/Input.js'
import CartContext from "../../store/cart-context";


const HeroItems = (props) => {
  const amountInputRef = useRef()
  const cartCtx = useContext(CartContext)

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id:props.id,
      name:props.title,
      amount:amount,
      price: props.price
    })
  }

  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      return;
    }
    addToCartHandler(enteredAmountNumber)
    console.log(cartCtx);
  }
  
  return (
<>
  <form onSubmit={submitHandler}>
    <div className={classes['hero-items']}>
      <div className={classes['circle-wrapper']}>     
                  <img src={props.img} alt="item 1" className={classes['circle-img']}/>
          </div>   
          <div className={classes.textAndButtons}>
          <div className={classes.texts}>
                  <h2>{props.title}</h2>
                  <p>{props.description}</p>
              </div>
              <div className={classes.buttons}>
                  <button className={classes['buttons-price']}>{props.price}</button>
                  <Input ref={amountInputRef} input={{id: 'amount', type:'number', min: '1', max: '5', step:'1', defaultValue: '1'}}/>
                  <button className={classes['buttons-buy']}>Buy Now</button>
              </div>
          </div>
      </div>
  </form>     
</>
      
  );
};

export default HeroItems;

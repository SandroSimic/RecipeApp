import { useState } from "react";
import Navigation from "./Layout/NavigationLay/Navigation";
import './App.css'
import Hero from "./Layout/HeroLay/Hero";
import AboutUs from './Layout/AboutUsLay/AboutUs'
import Recipes from "./Layout/RecipesLay/Recipes";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";





function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () =>{
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }


  return (
    <CartProvider>
    { cartIsShown && <Cart onClose={hideCartHandler}/> }
    <div className="App">
      <Navigation onShowCart={showCartHandler}/>
      <Hero/>
      <AboutUs/>
      <Recipes/>
    </div>
    </CartProvider>
  );
}

export default App;

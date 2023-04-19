import './App.module.scss'
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeItem from "./pages/RecipeItem";
import NotFound from "./pages/NotFound";
import {Route, Routes} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider'

function App() {

  const [cartIsShow, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Navbar onShowCart={showCartHandler}/>
      <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/recipes" element={<Recipes/>}/>
                <Route path="/recipes/:id" element={<RecipeItem/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
      </div>
    </CartProvider>
  );
}

export default App;

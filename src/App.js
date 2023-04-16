import Navigation from "./Layout/NavigationLay/Navigation";
import './App.css'
import Hero from "./Layout/HeroLay/Hero";
import AboutUs from './Layout/AboutUsLay/AboutUs'
import Recipes from "./Layout/RecipesLay/Recipes";





function App() {


  return (
    <>

    <div className="App">
      <Navigation/>
      <Hero/>
      <AboutUs/>
      <Recipes/>
    </div>
    </>
  );
}

export default App;

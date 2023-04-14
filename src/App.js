import Navigation from "./Layout/Navigation";
import './App.css'
import Hero from "./Layout/Hero";
import AboutUs from './Layout/AboutUs'
import Recipes from "./Layout/Recipes";





function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <AboutUs/>
      <Recipes/>
    </div>
  );
}

export default App;

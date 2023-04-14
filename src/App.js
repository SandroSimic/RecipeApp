import Navigation from "./Layout/Navigation";
import './App.css'
import Hero from "./Layout/Hero";
import AboutUs from './Layout/AboutUs'
import Recipes from "./Layout/Recipes";





function App() {
  return (
    <div className="App">
      <header className="header">
      <Navigation/>
      <Hero/>
      <AboutUs/>
      <Recipes/>
      </header>
    </div>
  );
}

export default App;

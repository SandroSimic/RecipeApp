import Navigation from "./Layout/Navigation";
import './App.css'
import Hero from "./Layout/Hero";
import AboutUs from './Layout/AboutUs'





function App() {
  return (
    <div className="App">
      <header className="header">
      <Navigation/>
      <Hero/>
      <AboutUs/>
      </header>
    </div>
  );
}

export default App;

import Navigation from "./Layout/Navigation";
import './App.css'
import Hero from "./Layout/Hero";

function App() {
  return (
    <div className="App">
      <header className="header">
      <Navigation/>
      <Hero/>
      </header>
    </div>
  );
}

export default App;

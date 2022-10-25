import "./App.css";
import Navbar from "./components/HOME/Navbar";
import Slide from "./components/HOME/Slide";
import Footer from "./components/HOME/Footer";
import About from "./components/HOME/About";
import Cases from "./components/HOME/Cases";
import Partners from "./components/HOME/Partners";

function App() {
  return (

    <div className="App">
      <Navbar/>
      <Slide/>
      <About/>
      <Partners/>
      <Cases/>
      <Footer/>
      
    </div>
  );
  
  
}
export default App;
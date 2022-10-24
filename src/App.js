import './App.css';
import Navbar  from '../src/components/HOME/Navbar';
import Slide from "./components/HOME/Slide";
import Footer from "./components/HOME/Footer";
import About from "./components/HOME/About";
import Cases from "./components/HOME/Cases";
import Partners from "./components/HOME/Partners";
import CreateAccount from './components/SignupSignin/CreateAccount';  
import SignIn from './components/SignupSignin/SignIn';


function App() {
  return (
    <div>
      <Navbar/>
      <Slide/>
      <About/>
      <Partners/>
      <Cases/>
      <Footer/>
      <CreateAccount/>
      <SignIn/>
    </div>
  );
}

export default App;

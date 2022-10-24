import './App.css';
import Signup from './components/Signup';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
              <Routes>
                  <Route exact path="/signup" element={<Signup/>}/>
             </Routes>
      </Router>
    </div>
  );
}

export default App;

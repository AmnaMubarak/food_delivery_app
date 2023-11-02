
import './App.css';
import Home from './screens/Home';
// import Login from './screens/Login';

import {
  createBrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
  <Router>
    
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>

    </div>
  </Router>
  );
}

export default App;

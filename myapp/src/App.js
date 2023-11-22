import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<Navbar/>} />
    //       <Route path="/login" element={<Login />} />
    //     </Routes>
    //   </div>
    // </Router>
    
      <Home />

  );
}

export default App;
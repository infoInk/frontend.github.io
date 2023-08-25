import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SignUp from './pages/sign_up';
import Empty from './pages/emptystate';
import LogIn from './pages/login';
import Home from './pages/home'

function App() {
  return (
    <div className="App">

    
      <Router>
        <Routes>
          <Route path="/" exact element={<Empty/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import SignUp from './pages/sign_up';
import Empty from './pages/emptystate';
import LogIn from './pages/login';
import Home from './pages/home';
import { auth } from "./firebase"; 
import './App.css';

function PrivateRoute({ path, element }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true); 
      } else {
        setIsAuthenticated(false); 
      }
    });

    return () => unsubscribe();
  }, []);

  return isAuthenticated ? element : <Navigate to="/" />;
}

function App() {
  return (
    <div className="App">
      <Router>
     
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Empty />} />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './pages/sign_up';
import Nav from './components/nav'
import Empty from './pages/emptystate';
import LogIn from './pages/login';
import Home from './pages/home'

function App() {
  return (
    <div className="App">

      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Empty} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>



    </div>
  );
}

export default App;

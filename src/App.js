import './App.css';
import SignUp from './pages/sign_up';
import Nav from './components/nav'
import Empty from './pages/emptystate';
import LogIn from './pages/login';
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      {/* <Empty/> */}
      {/* <SignUp/> */}
      {/* <LogIn/> */}

    </div>
  );
}

export default App;

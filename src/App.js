import './App.css';
import SignUp from './pages/sign_up';
import Nav from './components/nav'
import Empty from './pages/emptystate';
import LogIn from './pages/login';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Empty/>
      {/* <SignUp/> */}
      {/* <LogIn/> */}

    </div>
  );
}

export default App;

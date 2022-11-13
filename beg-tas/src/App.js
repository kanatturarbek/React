import './App.css';
import Login from './login/Login';
import Logo from './login/Logo';
import Register from './login/Register';

let isRegistered = false;

function App() {
  return (
    <div className="App">
      <Logo />
      {isRegistered ? <Login /> : <Register />}
    </div>
  );
}

export default App;

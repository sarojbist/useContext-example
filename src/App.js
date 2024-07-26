
import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from "./components/login";
import Profile from './components/profile';
function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <div>Hlo man</div>
      </div>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

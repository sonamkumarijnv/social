
import './App.css';
import Search from "./component/search/search";
import Profile from "./component/profile/profile";
import Centernav from "./component/centernav/centernav";
import Main from "./component/main/main";



function App() {
  return (
    <div className="App-container">
      <header className="App-header header">
        <div className="section">
        <Search/>
        </div>
        <div className="section center-nav">
        <Centernav />
        </div>
        <Profile />
      </header>
      <Main />
    </div>
  );
}

export default App;

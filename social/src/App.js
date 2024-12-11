
import './App.css';
import Search from "./component/search/search";
import Profile from "./component/profile/profile";
import Centernav from "./component/centernav/centernav";


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
      <div className="App-header">
        <div className="section"><div>1</div></div>
        <div className="section"><div className="section-list">1</div></div>
        <div className="section"><div>1</div></div>
      </div>
    </div>
  );
}

export default App;

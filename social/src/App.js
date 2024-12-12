
import './App.css';
import Search from "./component/search/search";
import Profile from "./component/profile/profile";
import Centernav from "./component/centernav/centernav";
import Main from "./component/main/main";
import { AiOutlineHome } from "react-icons/ai";
import { PiVideoLight } from "react-icons/pi";
import { RiGroup2Line } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { SiCoinmarketcap } from "react-icons/si";
import { useState } from "react";



function App() {
  const data = [
    {
        iconName: AiOutlineHome,
        name: "home",
        description:"home"
    },
    {
        iconName: PiVideoLight,
        name: "video",
        description:"video"
    },
    {
        iconName: RiGroup2Line,
        name: "group",
        description:"group"

    },
    {
        iconName: GrGamepad,
        name: "game",
        description:"game"

    },
    {
        iconName: SiCoinmarketcap,
        name: "market",
        description:"market"
    }
]
  const [dataFromChild, setData] = useState(0);
  const handleDataFromChild = (index) => {
    setData(index)
  }

  return (
    <div className="App-container">
      <header className="App-header header">
        <Search/>
        <Centernav  data={data} sendDataToParent={handleDataFromChild} />
        <Profile />
      </header>
      <Main description={data[dataFromChild].description}/>
    </div>
  );
}

export default App;

import logo from './assat/logo.png';
import './App.css';
import { AiOutlineHome } from "react-icons/ai";
import { PiVideoLight } from "react-icons/pi";
import { RiGroup2Line } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { CgMenuGridR } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { SiCoinmarketcap } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";


function App() {
  return (
    <div className="App-container">
      <header className="App-header header">

        <div className="section">
          <div className='Search-nav'>
            <FaFacebookF size={32} className="logo-icon" color="white"/>
            <div>            
              <input placeholder="Search Facebook" className='search'/>
            </div>
          </div>
        </div>
        <div className="section center-nav">
          <div className="section-list">
            <a href='#' className='active Home-link'>            
            <AiOutlineHome
            size={25}
            color="gray"
            />
            </a>
            <a href='#' className='Home-link'>            
            <PiVideoLight
            size={25}
            color="gray"
            />
            </a>
            <a href='#' className='Home-link'>            
            <RiGroup2Line
            size={25}
            color="gray"
            />
            </a>
            <a href='#' className='Home-link'>            
            <SiCoinmarketcap
            size={25}
            color="gray"
            />
            </a>
            <a href='#' className='Home-link'>            
            <GrGamepad
            size={25}
            color="gray"
            />
            </a>
          </div>
        </div>
        <div className="section right-nav">
          <div className='Search-nav'>
          <div>  
            <sapn className="info-icon">
            <CgMenuGridR          
             color="black"
             size={20}/>
            </sapn>     
            <sapn className="info-icon"> 
            <AiFillMessage 
             size={20}
             color="black"
            />
            </sapn>    
            <sapn className="info-icon"> 
            <IoNotificationsSharp
            size={20}
            color="black"
            />
            </sapn>
          </div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </header>
      <div className="App-header right-nav">
        <div className="section"><div>1</div></div>
        <div className="section"><div className="section-list">1</div></div>
        <div className="section"><div>1</div></div>
      </div>
    </div>
  );
}

export default App;

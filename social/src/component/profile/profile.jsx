
import './profile.css';
import logo from '../../assat/logo.png';
import { CgMenuGridR } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";


function Profile() {
  return (
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
  );
}

export default Profile;

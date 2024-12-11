
import './centernav.css';
import { AiOutlineHome } from "react-icons/ai";
import { PiVideoLight } from "react-icons/pi";
import { RiGroup2Line } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";

import { SiCoinmarketcap } from "react-icons/si";


function Centernav() {
  return (
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
  );
}

export default Centernav;

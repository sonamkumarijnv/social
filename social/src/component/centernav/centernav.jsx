
import './centernav.css';
import { AiOutlineHome } from "react-icons/ai";
import { PiVideoLight } from "react-icons/pi";
import { RiGroup2Line } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { SiCoinmarketcap } from "react-icons/si";
import React, { useState, setState } from 'react';


function Centernav() {
    const [active, setActive] = useState('home');
    function handleClick(value) {
        setActive(value);
    }
    return (
        <div className="section-list">
            <a href='#' className={active === 'home' ? 'active Home-link' : 'Home-link'} onClick={() => handleClick('home')} >
                <AiOutlineHome
                    size={25}
                    color="gray"
                />
            </a>
            <a href='#' className={active === 'video' ? 'active Home-link' : 'Home-link'} onClick={() => handleClick('video')}>
                <PiVideoLight
                    size={25}
                    color="gray"
                />
            </a>
            <a href='#' className={active === 'group' ? 'active Home-link' : 'Home-link'} onClick={() => handleClick('group')}>
                <RiGroup2Line
                    size={25}
                    color="gray"
                />
            </a>
            <a href='#' className={active === 'market' ? 'active Home-link' : 'Home-link'} onClick={() => handleClick('market')}>
                <SiCoinmarketcap
                    size={25}
                    color="gray"
                />
            </a>
            <a href='#' className={active === 'game' ? 'active Home-link' : 'Home-link'} onClick={() => handleClick('game')}>
                <GrGamepad
                    size={25}
                    color="gray"
                />
            </a>
        </div>
    );
}

export default Centernav;

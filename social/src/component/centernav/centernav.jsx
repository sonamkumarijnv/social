
import './centernav.css';

import React, { useState } from 'react';
import Icon from '../icon/icon';


function Centernav({data, sendDataToParent }) {
    const [active, setActive] = useState('home');
    const listItems = data.map((icon, index) =>
        <div className="section-list">{<Icon
            Icons={icon.iconName}
            className={active === icon.name ? 'active Home-link' : 'Home-link'}
            onClick={() => handleClick(icon.name, index)}
        />}</div>
    );
    function handleClick(value, index) {
        sendDataToParent (Number(index));   
        setActive(value);
    }
    return (
        <div className="section center-nav">
            {listItems}
        </div>
    );
}

export default Centernav;

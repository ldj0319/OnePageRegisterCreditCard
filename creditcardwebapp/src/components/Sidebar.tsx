import React, { useState } from 'react'
import * as AiIcon from 'react-icons/ai'
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <div className="Nav">
                <div className="NavIcon">
                    <AiIcon.AiOutlineMenu/>
                </div>
                <div className="SidebarText">
                    Register card form
                </div>
            </div>       
        </div>
    )
};

export default Sidebar;
import React, { useState } from 'react'
import * as IoIcon from 'react-icons/io'
import * as FaIcon from 'react-icons/fa'
import './Sidebar.css';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div>
            <div className="Nav">
                <div className="NavIcon">
                    <FaIcon.FaHamburger color="yellow" size="30px" onClick={showSidebar}/>
                </div>
                <div className="SidebarText">
                    Register card form
                </div>
            </div>
            {sidebar ? <nav className="SidebarNav">
                <div className="SidebarWrap">
                    <div className="NavIcon">
                        <IoIcon.IoMdArrowRoundBack color="yellow" size="30px" onClick={showSidebar}/>
                    </div>
                </div>
                <div className="SidebarText">
                    This is menu content
                </div>
            </nav> : ''}     
        </div>
    )
};

export default Sidebar;
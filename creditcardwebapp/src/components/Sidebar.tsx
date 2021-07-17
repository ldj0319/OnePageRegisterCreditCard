import React, { useState } from 'react'
import * as AiIcon from 'react-icons/ai'
import './Sidebar.css';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div>
            <div className="Nav">
                <div className="NavIcon">
                    <AiIcon.AiOutlineMenu onClick={showSidebar}/>
                </div>
                <div className="SidebarText">
                    Register card form
                </div>
            </div>
            {sidebar ? <nav className="SidebarNav">
                <div className="SidebarWrap">
                    <div className="NavIcon">
                        <AiIcon.AiOutlineBackward onClick={showSidebar}/>
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
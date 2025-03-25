import './navbar.scss'
import Tooltip from '@mui/material/Tooltip';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>Smart Energy Dashboard</span>
            </div>
            <div className="icons">
                <Tooltip title="chat">
                    <img src="icon-system-messages.svg" alt="" className="icon" />
                </Tooltip>
                <div className="notification">
                    <Tooltip title="notifications">
                        <img src="/notifications.svg" alt="icon" />
                    </Tooltip>

                    <span>1</span>
                </div>
                <div className="user">
                    <img src="user.jpg" alt="" />
                    <span>admin</span>
                </div>
                <Tooltip title="settings">
                    <img src="settings.svg" alt="" />
                </Tooltip>
            </div>
        </div>
    )
}

export default Navbar
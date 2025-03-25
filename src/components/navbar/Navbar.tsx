import './navbar.scss'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>Smart Energy Dashboard</span>
            </div>
            <div className="icons">
                <img src="icon-system-messages.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt="icon" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="user.jpg" alt="" />
                    <span>admin</span>
                </div>
                <img src="settings.svg" alt="" />
            </div>
        </div>
    )
}

export default Navbar
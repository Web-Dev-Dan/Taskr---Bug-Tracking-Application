
import './MainNav.css';

function MainNav({ currentPageName, updateCurrentPageName, userData }) {
    return (
        <div className="main-nav">
            <p className="main-nav__text">Welcome to your <strong>{currentPageName}</strong>.</p>
            <div className="main-nav__profile">
                <p className="main-nav__profile-name">{userData.username}</p>
                <button onClick={() => updateCurrentPageName('Settings')} className="main-nav__profile-pic btn-transparent">
                    <i className="main-nav__profile-pic--icon fa-solid fa-robot"></i>
                </button>
                <div className="main-nav__profile-notification">Beep-boop! Would you like to change your profile settings?</div>
            </div>
        </div>
    )
}

export default MainNav;
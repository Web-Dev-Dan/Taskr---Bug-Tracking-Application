
import './MainNav.css';

function MainNav({ currentPageName, updateCurrentPageName, userData, openProjects }) {
    return (
        <div className="main-nav">
            {currentPageName !== 'Project Page' && <p className="main-nav__text">Welcome to your <strong>{currentPageName}</strong>.</p>}
            {currentPageName === 'Project Page' && <button onClick={() => openProjects()} className="main-nav__back-button btn-transparent">
                <i className="main-nav__back-button--icon fa-solid fa-arrow-left"></i>
            </button>}
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
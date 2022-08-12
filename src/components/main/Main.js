
import './Main.css';
import MainNav from './MainNav/MainNav';

function Main({ currentPageName, username, updateCurrentPageName }) {
    return (
        <main className="main">
            <MainNav
                currentPageName={currentPageName}
                username={username}
                updateCurrentPageName={updateCurrentPageName}
            />
            <div className="main-content">
                {currentPageName === 'Dashboard' && <p>Dashboard</p>}
                {currentPageName === 'Projects' && <p>Projects</p>}
                {currentPageName === 'Reports' && <p>Reports</p>}
                {currentPageName === 'Messages' && <p>Messages</p>}
                {currentPageName === 'Settings' && <p>Settings</p>}
                {currentPageName === 'Logout' && <p>Logout</p>}
            </div>
        </main>
    )
}

export default Main;
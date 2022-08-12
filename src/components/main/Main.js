
import MainPageHeader from '../../reusable/headers/MainPageHeader/MainPageHeader';
import './Main.css';
import MainNav from './MainNav/MainNav';
import Dashboard from './pages/Dashboard/Dashboard';

function Main({ currentPageName, username, updateCurrentPageName }) {
    return (
        <main className="main">
            <MainNav
                currentPageName={currentPageName}
                username={username}
                updateCurrentPageName={updateCurrentPageName}
            />
            <div className="main-content">
                {currentPageName === 'Dashboard' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-shapes'
                    />
                    <Dashboard />
                    {/* INCLUDE A HORIZONTAL SCROLL BOX OF PROJECTS? NAME & 3 COLOURED BOXES UNDERNEATH WITH ICONS AND NUMBERS TO INDICATE HOW MANY TODOS, INPROGRESS, COMPLETE ITEMS THERE ARE */}
                </div>}
                {currentPageName === 'Projects' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-bolt'
                    />
                </div>}
                {currentPageName === 'Reports' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-bug'
                    />
                </div>}
                {currentPageName === 'Messages' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-envelope'
                    />
                </div>}
                {currentPageName === 'Settings' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-gear'
                    />
                </div>}
                {currentPageName === 'Logout' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-arrow-right-from-bracket'
                    />
                </div>}
            </div>
        </main>
    )
}

export default Main;
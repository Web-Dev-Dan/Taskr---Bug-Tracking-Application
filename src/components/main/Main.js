
import MainPageHeader from '../../reusable/headers/MainPageHeader/MainPageHeader';
import './Main.css';
import MainFooter from './MainFooter/MainFooter';
import MainNav from './MainNav/MainNav';
import Dashboard from './pages/Dashboard/Dashboard';
import Logout from './pages/Logout/Logout';
import Messages from './pages/Messages/Messages';
import Projects from './pages/Projects/Projects';
import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings';

function Main({ currentPageName, updateCurrentPageName, getYear, userData, updateMessageIsRead, updateReportIsRead }) {
    return (
        <main className="main">
            <MainNav
                currentPageName={currentPageName}
                updateCurrentPageName={updateCurrentPageName}
                userData={userData}
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
                    <Projects
                        userData={userData}
                    />
                </div>}
                {currentPageName === 'Reports' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-bug'
                    />
                    <Reports
                        userData={userData}
                        updateReportIsRead={updateReportIsRead}
                    />
                </div>}
                {currentPageName === 'Messages' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-envelope'
                    />
                    <Messages
                        userData={userData}
                        updateMessageIsRead={updateMessageIsRead}
                    />
                </div>}
                {currentPageName === 'Settings' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-gear'
                    />
                    <Settings />
                </div>}
                {currentPageName === 'Logout' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-arrow-right-from-bracket'
                    />
                    <Logout />
                </div>}
            </div>
            <MainFooter
                getYear={getYear}
            />
        </main>
    )
}

export default Main;
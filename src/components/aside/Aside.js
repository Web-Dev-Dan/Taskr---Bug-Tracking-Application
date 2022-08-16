
import './Aside.css';
import Logo from './Logo';
import FixedButton from '../../reusable/buttons/FixedButton/FixedButton';
import NotifyButton from '../../reusable/buttons/NotifyButton/NotifyButton';
import Dropdown from './Dropdown';

function Aside({ asideIsOpen, handleClick, dropdownContentIsShown, updateCurrentPageName, userData, createNewProject, openProjectPage }) {
    // Calculate Unread Notifications
    let read_reportNotifications = userData.reports ? userData.reports.filter(report => report.isRead === true) : 0;
    let unread_reportNotifications = userData.reports ? userData.reports.filter(report => report.isRead === false) : 0;
    let read_messageNotifications = userData.messages ? userData.messages.filter(message => message.isRead === true) : 0;
    let unread_messageNotifications = userData.messages ? userData.messages.filter(message => message.isRead === false) : 0;

    return (
        <aside className="aside">
            {/* Logo */}
            <Logo
                asideIsShown={asideIsOpen}
            />
            {/* Button Container */}
            <div className="aside__button-container">
                <div className="aside__button-container--top">
                    <FixedButton
                        icon="fa-solid fa-shapes"
                        title="Dashboard"
                        textIsShown={asideIsOpen}
                        handleClick={handleClick}
                    />
                    {asideIsOpen && <Dropdown
                        icon="fa-solid fa-bolt"
                        title="Projects"
                        textIsShown={asideIsOpen}
                        updateCurrentPageName={updateCurrentPageName}
                        createNewProject={createNewProject}
                        userData={userData}
                        openProjectPage={openProjectPage}
                    />}
                    {!asideIsOpen && <FixedButton
                        icon="fa-solid fa-bolt"
                        title="Projects"
                        textIsShown={asideIsOpen}
                        handleClick={handleClick}
                    />}
                    <NotifyButton
                        icon="fa-solid fa-bug"
                        title="Reports"
                        notificationCount={unread_reportNotifications.length}
                        textIsShown={asideIsOpen}
                        handleClick={handleClick}
                    />
                    <NotifyButton
                        icon="fa-solid fa-envelope"
                        title="Messages"
                        notificationCount={unread_messageNotifications.length}
                        textIsShown={asideIsOpen}
                        handleClick={handleClick}
                    />
                </div>
                <div className="aside__button-container--bottom">
                    <FixedButton
                        icon="fa-solid fa-gear"
                        title="Settings"
                        textIsShown={asideIsOpen}
                        handleClick={handleClick}
                    />
                    <FixedButton
                        icon="fa-solid fa-arrow-right-from-bracket"
                        title="Logout"
                        textIsShown={asideIsOpen}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </aside >
    )
}

export default Aside;
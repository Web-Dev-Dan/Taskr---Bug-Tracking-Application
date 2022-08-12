
import { useState } from 'react';
import './App.css';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import IconButton from './reusable/buttons/IconButton/IconButton';

function App() {
  // --- Aside ---
  const [asideIsOpen, setAsideIsOpen] = useState(true);
  // Toggle Aside
  function toggleAside() {
    setAsideIsOpen(!asideIsOpen);
  }
  // Open Aside
  function openAside() {
    setAsideIsOpen(true);
  }


  // --- PAGES ---
  const [dashboardIsOpen, setDashboardIsOpen] = useState(true);
  const [projectsIsOpen, setProjectsIsOpen] = useState(false);
  const [reportsIsOpen, setReportsIsOpen] = useState(false);
  const [messagesIsOpen, setMessagesIsOpen] = useState(false);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [logoutIsOpen, setLogoutIsOpen] = useState(false);

  // Aside Button Clicked:
  function asideButtonClicked(title) {
    if (title === 'Dashboard') {
      openDashboard();
    } else if (title === 'Projects') {
      openProjects();
    } else if (title === 'Reports') {
      openReports();
    } else if (title === 'Messages') {
      openMessages();
    } else if (title === 'Settings') {
      openSettings();
    } else if (title === 'Logout') {
      openLogout();
    }
  }

  // Aside Function (depending on button clicked):
  function openDashboard() {
    console.log('Dashboard Opened!')
    setDashboardIsOpen(true);
    setProjectsIsOpen(false);
    setReportsIsOpen(false);
    setMessagesIsOpen(false);
    setSettingsIsOpen(false);
    setLogoutIsOpen(false);
  }

  function openProjects() {
    console.log('Projects Opened!');
    setAsideIsOpen(true);

    setDashboardIsOpen(false);
    setProjectsIsOpen(true);
    setReportsIsOpen(false);
    setMessagesIsOpen(false);
    setSettingsIsOpen(false);
    setLogoutIsOpen(false);
  }

  function openReports() {
    console.log('Reports Opened!')
    setDashboardIsOpen(false);
    setProjectsIsOpen(false);
    setReportsIsOpen(true);
    setMessagesIsOpen(false);
    setSettingsIsOpen(false);
    setLogoutIsOpen(false);
  }

  function openMessages() {
    console.log('Messages Opened!')
    setDashboardIsOpen(false);
    setProjectsIsOpen(false);
    setReportsIsOpen(false);
    setMessagesIsOpen(true);
    setSettingsIsOpen(false);
    setLogoutIsOpen(false);
  }

  function openSettings() {
    console.log('Settings Opened!')
    setDashboardIsOpen(false);
    setProjectsIsOpen(false);
    setReportsIsOpen(false);
    setMessagesIsOpen(false);
    setSettingsIsOpen(true);
    setLogoutIsOpen(false);
  }

  function openLogout() {
    console.log('Logout Opened!')
    setDashboardIsOpen(false);
    setProjectsIsOpen(false);
    setReportsIsOpen(false);
    setMessagesIsOpen(false);
    setSettingsIsOpen(false);
    setLogoutIsOpen(true);
  }


  // --- USER DETAILS ---
  const [username, setUsername] = useState('User');

  return (
    <div className="App">
      <div className="container">
        <div className={asideIsOpen ? 'aside-container' : 'aside-container aside-container-disabled'}>
          <IconButton
            iconClass={`aside-container__button ${asideIsOpen ? 'fa-solid fa-angles-left' : 'fa-solid fa-angles-right'}`}
            handleClick={() => toggleAside()}
          />
          <Aside
            asideIsOpen={asideIsOpen}
            handleClick={(title) => asideButtonClicked(title)}
          />
        </div>
        <div className="main-container">
          <Main
            username={username}
          />
        </div>
      </div>
    </div >
  );
}

export default App;

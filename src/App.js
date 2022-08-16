
import { useState, useEffect, useDeferredValue } from 'react';
import './App.css';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import IconButton from './reusable/buttons/IconButton/IconButton';

function App() {
  // --- 📅 Dates 📅 ---
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function getDay() {
    return days[new Date().getDay() - 1];
  }
  function getDate() {
    return new Date().getDate();
  }
  function getMonth() {
    return months[new Date().getMonth()];
  }
  function getYear() {
    return new Date().getFullYear();
  }
  function getFullDate() {
    const day = getDay();
    const date = getDate();
    const month = getMonth();
    const year = getYear();
    return `${day} ${date} ${month}, ${year}`;
  }

  // --- ⏰ Times ⏰ ---
  function getCurrentTime() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();

    if (hours < 10) {
      hours = `${0}${hours}`;
    }

    if (minutes < 10) {
      minutes = `${0}${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

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

  const [projectPageIsOpen, setProjectPageIsOpen] = useState(false);

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
    updateCurrentPageName('Dashboard');

    setDashboardIsOpen(true);
    setProjectsIsOpen(false);
    setReportsIsOpen(false);
    setMessagesIsOpen(false);
    setSettingsIsOpen(false);
    setLogoutIsOpen(false);
    setProjectPageIsOpen(false);
  }

  function openProjects() {
    console.log('Projects Opened!');
    setAsideIsOpen(true);
    updateCurrentPageName('Projects');

    setDashboardIsOpen(false);
    setProjectsIsOpen(true);
    setReportsIsOpen(false);
    setMessagesIsOpen(false);
    setSettingsIsOpen(false);
    setLogoutIsOpen(false);
    setProjectPageIsOpen(false);
  }

  function openReports() {
    console.log('Reports Opened!')
    updateCurrentPageName('Reports');

    setDashboardIsOpen(false);
    setProjectsIsOpen(false);
    setReportsIsOpen(true);
    setMessagesIsOpen(false);
    setSettingsIsOpen(false);
    setLogoutIsOpen(false);
    setProjectPageIsOpen(false);
  }

  function openMessages() {
    console.log('Messages Opened!')
    updateCurrentPageName('Messages');

    setDashboardIsOpen(false);
    setProjectsIsOpen(false);
    setReportsIsOpen(false);
    setMessagesIsOpen(true);
    setSettingsIsOpen(false);
    setLogoutIsOpen(false);
    setProjectPageIsOpen(false);
  }

  function openSettings() {
    console.log('Settings Opened!')
    updateCurrentPageName('Settings');

    setDashboardIsOpen(false);
    setProjectsIsOpen(false);
    setReportsIsOpen(false);
    setMessagesIsOpen(false);
    setSettingsIsOpen(true);
    setLogoutIsOpen(false);
    setProjectPageIsOpen(false);
  }

  function openLogout() {
    console.log('Logout Opened!')
    updateCurrentPageName('Logout');

    setDashboardIsOpen(false);
    setProjectsIsOpen(false);
    setReportsIsOpen(false);
    setMessagesIsOpen(false);
    setSettingsIsOpen(false);
    setLogoutIsOpen(true);
    setProjectPageIsOpen(false);
  }

  function openProjectPage() {
    console.log('Project Page Opened!')
    updateCurrentPageName('Project Page');

    setDashboardIsOpen(false);
    setProjectsIsOpen(false);
    setReportsIsOpen(false);
    setMessagesIsOpen(false);
    setSettingsIsOpen(false);
    setLogoutIsOpen(false);
    setProjectPageIsOpen(true);
  }

  function updateCurrentPageName(page) {
    setCurrentPageName(page);
  }


  // --- USER DETAILS ---
  const [currentPageName, setCurrentPageName] = useState('Dashboard');
  // const [username, setUsername] = useState('Daniel');
  const [userData, setUserData] = useState(
    {
      "username": "Daniel",
      "projects": [
        // {
        //   "id": 1,
        //   "title": "Portfolio Website",
        //   "author": "Michael",
        //   "timeCreated": getCurrentTime(),
        //   "dateCreated": getFullDate(),
        //   "tasks": {
        //     "toDo": ["Make banner"],
        //     "inProgress": ["Finish project", "upload project"],
        //     "complete": ["Deploy site"]
        //   },
        //   "isDeleted": false,
        //   "isComplete": false
        // },
        // {
        //   "id": 2,
        //   "title": "Taskr",
        //   "author": "Michael",
        //   "timeCreated": getCurrentTime(),
        //   "dateCreated": getFullDate(),
        //   "tasks": {
        //     "toDo": [],
        //     "inProgress": [],
        //     "complete": []
        //   },
        //   "isDeleted": false,
        //   "isComplete": false
        // },
        // {
        //   "id": 3,
        //   "title": "Wordle Clone",
        //   "author": "Michael",
        //   "timeCreated": getCurrentTime(),
        //   "dateCreated": getFullDate(),
        //   "tasks": {
        //     "toDo": [],
        //     "inProgress": [],
        //     "complete": []
        //   },
        //   "isDeleted": false,
        //   "isComplete": false
        // },
      ],
      "reports": [
        {
          "id": 1,
          "title": "Moved 'Update Header' from 'To-Do' to 'In Progress'.",
          "content": null,
          "timeCreated": "13:05",
          "dateCreated": "Wednesday 5 July, 2022",
          "reportType": "Status Change",
          "isRead": false,
          "isDeleted": false
        },
        {
          "id": 2,
          "title": "Updated Dashboard UI",
          "content": "Hello User! First, thank you for using Taskr. We hope that you are having a pleasant experience organising your tasks. We have exciting news! The Taskr Dashbard has received a funky makeover from our frontend team to make it easier for you to reference your information more easily. Enjoy!",
          "timeCreated": "17:10",
          "dateCreated": "Friday 12 August, 2022",
          "reportType": "Update",
          "isRead": false,
          "isDeleted": false
        },
        {
          "id": 3,
          "title": "Created a New Project: 'Portfolio'.",
          "content": null,
          "timeCreated": "10:30",
          "dateCreated": "Saturday 13 August, 2022",
          "reportType": "User Update",
          "isRead": false,
          "isDeleted": false
        },
        {
          "id": 4,
          "title": "Project 'Portfolio' Deleted",
          "content": null,
          "timeCreated": "10:30",
          "dateCreated": "Saturday 13 August, 2022",
          "reportType": "Warning",
          "isRead": false,
          "isDeleted": false
        },
        {
          "id": 5,
          "title": "Finished Ticket for 'Portfolio'.",
          "content": null,
          "timeCreated": "10:30",
          "dateCreated": "Saturday 13 August, 2022",
          "reportType": "Complete",
          "isRead": false,
          "isDeleted": false
        }
      ],
      "messages": [
        {
          "id": 1,
          "title": "Example Message",
          "content": "Hello, this is some example message content just to check out how it looks once it is rendered in the broswer. Thanks!",
          "author": "Botty Bot",
          "timeCreated": "11:15",
          "dateCreated": "Monday 12 August, 2022",
          "isRead": true,
          "isDeleted": false
        },
        {
          "id": 2,
          "title": "Example Message",
          "author": "Botty Bot",
          "timeCreated": '18:30',
          "dateCreated": 'Tuesday 13 August, 2022',
          "content": "Hello, this is some example message content just to check out how it looks once it is rendered in the broswer. Thanks!",
          "isRead": false,
          "isDeleted": false
        },
        {
          "id": 3,
          "title": "Example Message",
          "author": "Botty Bot",
          "timeCreated": '18:30',
          "dateCreated": 'Tuesday 13 August, 2022',
          "content": "Hello, this is some example message content just to check out how it looks once it is rendered in the broswer. Thanks!",
          "isRead": false,
          "isDeleted": false
        }
      ]
    }
  )

  // Change Message isRead to true:
  function updateMessageIsRead(id) {
    userData.messages.filter(message => {
      if (message.id === id) {
        message.isRead = true;
        console.log(message);
        updateAll();
      }
    })
  }

  // Change Report isRead to true:
  function updateReportIsRead(id) {
    userData.reports.filter(report => {
      if (report.id === id) {
        report.isRead = true;
        console.log(report);
        updateAll();
      }
    })
  }

  // *Function to re-render userData once updated:
  function updateAll() {
    setUserData({ ...userData });
  }

  // Create New Message Function (currently inactive)
  function createNewMessage(title, author, timeCreated, dateCreated, content, isRead, isDeleted) {
    userData.messages.push(
      {
        "id": userData.messages.length + 1,
        "title": "New One",
        "author": "Botty Bot",
        "timeCreated": '18:30',
        "dateCreated": 'Tuesday 13 August, 2022',
        "content": "Hello, this is some example message content just to check out how it looks once it is rendered in the broswer. Thanks!",
        "isRead": false,
        "isDeleted": false
      }
    )
    updateAll();
    console.log(userData.messages);
  }

  // Create New Report Function (current inactive)
  function createNewReport(title, content, timeCreated, dateCreated, reportType, isRead, isDeleted) {
    userData.reports.push(
      {
        "id": userData.reports.length + 1,
        "title": "New One",
        "content": "Hello, this is some example report content just to check out how it looks once it is rendered in the broswer. Thanks!",
        "timeCreated": '18:30',
        "dateCreated": 'Tuesday 13 August, 2022',
        "reportType": "Update",
        "isRead": false,
        "isDeleted": false
      }
    )
    updateAll();
    console.log(userData.reports);
  }

  // Create New Project
  function createNewProject(projectName) {
    userData.projects.push(
      {
        "id": userData.projects.length + 1,
        "title": projectName,
        "author": userData.username,
        "timeCreated": getCurrentTime(),
        "dateCreated": getFullDate(),
        "tasks": {
          "toDo": [],
          "inProgress": [],
          "complete": []
        },
        "isDeleted": false,
        "isComplete": false
      },
    )
    updateAll();
    console.log(userData.projects);
  }

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
            updateCurrentPageName={() => updateCurrentPageName('Projects')}
            userData={userData}
            createNewProject={(projectName) => createNewProject(projectName)}
          />
        </div>
        <div className="main-container">
          <Main
            currentPageName={currentPageName}
            updateCurrentPageName={(page) => updateCurrentPageName(page)}
            getYear={() => getYear()}
            userData={userData}
            updateMessageIsRead={(id) => updateMessageIsRead(id)}
            updateReportIsRead={(id) => updateReportIsRead(id)}
            createNewProject={(projectName) => createNewProject(projectName)}
          />

        </div>
      </div>
    </div >
  );
}

export default App;

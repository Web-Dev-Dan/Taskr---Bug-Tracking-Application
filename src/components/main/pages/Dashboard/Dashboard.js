
import { userState, useEffect, useState } from 'react';
import './Dashboard.css';

function Dashboard({ userData, openProjects, openReports, openMessages }) {
    // console.log(userData)
    const [totalToDos, setTotalToDos] = useState(0);
    const [totalInProgress, setTotalInProgress] = useState(0);
    const [totalComplete, setTotalComplete] = useState(0);

    useEffect(() => {
        let toDos = 0;
        let inProgress = 0;
        let complete = 0;
        userData.projects.filter(project => project.isDeleted === false).forEach(project => {
            // console.log(project.title)
            toDos += project.tasks.toDo.filter(task => task.isDeleted === false).length;
            inProgress += project.tasks.inProgress.filter(task => task.isDeleted === false).length;
            complete += project.tasks.complete.filter(task => task.isDeleted === false).length;
            setTotalToDos(toDos);
            setTotalInProgress(inProgress);
            setTotalComplete(complete);
        });
    }, []);

    return (
        <div className="dashboard">
            {/* Welcome Message */}
            <div className="dashboard__name">
                <p className="dashboard__name--text">Welcome, <strong>{userData.username}</strong>!</p>
            </div>
            {/* Dashboard Grid */}
            <div className="dashboard__grid">
                <button onClick={() => openProjects()} className="grid-button grid-button--large btn-transparent">
                    <i className="grid-button__background-icon--large fa-solid fa-bolt"></i>
                    <h2 className="grid-button__title">Projects</h2>
                    <div className="grid-button__info-container">
                        <div className="grid-button__icon-container">
                            <i className="grid-button__icon fa-solid fa-bolt"></i>
                        </div>
                        <p className="grid-button__text">You've got <strong>{userData.projects.filter(project => project.isDeleted === false).length} {userData.projects.filter(project => project.isDeleted === false).length === 1 ? 'project' : 'projects'}</strong>.</p>
                    </div>
                    <div className="grid-button__info-container">
                        <div className="grid-button__icon-container">
                            <i className="grid-button__icon fa-solid fa-layer-group"></i>
                        </div>
                        <p className="grid-button__text">You've got <strong>{totalToDos} {totalToDos === 1 ? 'task' : 'tasks'} to do</strong>.</p>
                    </div>
                    <div className="grid-button__info-container">
                        <div className="grid-button__icon-container">
                            <i className="grid-button__icon fa-solid fa-trowel-bricks"></i>
                        </div>
                        <p className="grid-button__text">You've got <strong>{totalInProgress} {totalInProgress === 1 ? 'task' : 'tasks'} in progress</strong>.</p>
                    </div>
                    <div className="grid-button__info-container">
                        <div className="grid-button__icon-container">
                            <i className="grid-button__icon fa-solid fa-fire"></i>
                        </div>
                        <p className="grid-button__text">You've <strong>complete {totalComplete} {totalComplete === 1 ? 'task' : 'tasks'}</strong>.</p>
                    </div>
                </button>
                <button onClick={() => openReports()} className="grid-button grid-button--small btn-transparent">
                    <i className="grid-button__background-icon fa-solid fa-bug"></i>
                    <h2 className="grid-button__title">Reports</h2>
                    <div className="grid-button__info-container">
                        <div className="grid-button__icon-container">
                            <i className="grid-button__icon fa-solid fa-bug"></i>
                        </div>
                        <p className="grid-button__text">You've got <strong>{userData.reports.filter(report => report.isRead === false).length} new {userData.reports.filter(report => report.isRead === false).length === 1 ? 'report' : 'reports'}</strong>.</p>
                    </div>
                </button>
                <button onClick={() => openMessages()} className="grid-button grid-button--small btn-transparent">
                    <i className="grid-button__background-icon fa-solid fa-envelope"></i>
                    <h2 className="grid-button__title">Messages</h2>
                    <div className="grid-button__info-container">
                        <div className="grid-button__icon-container">
                            <i className="grid-button__icon fa-solid fa-envelope"></i>
                        </div>
                        <p className="grid-button__text">You've got <strong>{userData.messages.filter(message => message.isRead === false).length} new {userData.messages.filter(message => message.isRead === false).length === 1 ? 'message' : 'messages'}</strong>.</p>
                    </div>
                </button>
            </div>
        </div >
    )
}

export default Dashboard;
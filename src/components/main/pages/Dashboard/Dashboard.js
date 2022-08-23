
import './Dashboard.css';

function Dashboard({ userData, openProjects, openReports, openMessages }) {
    console.log(userData)
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
                        <p className="grid-button__text">You've got <strong>2 tasks to do</strong>.</p>
                    </div>
                    <div className="grid-button__info-container">
                        <div className="grid-button__icon-container">
                            <i className="grid-button__icon fa-solid fa-trowel-bricks"></i>
                        </div>
                        <p className="grid-button__text">You've got <strong>5 tasks in progress</strong>.</p>
                    </div>
                    <div className="grid-button__info-container">
                        <div className="grid-button__icon-container">
                            <i className="grid-button__icon fa-solid fa-fire"></i>
                        </div>
                        <p className="grid-button__text">You've <strong>complete 1 task</strong>.</p>
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
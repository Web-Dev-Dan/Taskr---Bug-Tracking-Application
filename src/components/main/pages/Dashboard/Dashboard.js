
import './Dashboard.css';

function Dashboard({ userData }) {
    console.log(userData)
    return (
        <div className="dashboard">
            {/* Welcome Message */}
            <div className="dashboard__name">
                <p className="dashboard__name--text">Welcome, <strong>{userData.username}</strong>!</p>
            </div>
            {/* Dashboard Grid */}
            <div className="dashboard__grid">
                <button className="grid-button grid-button--large btn-transparent">
                    <i className="grid-button__background-icon--large fa-solid fa-bolt"></i>
                </button>
                <button className="grid-button grid-button--small btn-transparent">
                    <i className="grid-button__background-icon fa-solid fa-bug"></i>
                </button>
                <button className="grid-button grid-button--small btn-transparent">
                    <i className="grid-button__background-icon fa-solid fa-envelope"></i>
                </button>
            </div>
        </div >
    )
}

export default Dashboard;
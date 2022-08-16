
import './ProjectBox.css';

function ProjectBox({ id, title, author, timeCreated, dateCreated, toDo, inProgress, complete, isDeleted, isComplete }) {
    return (
        <button className="project-box btn-transparent">
            <div className="project-box__header">
                <div className="project-box__header--icon-container">
                    <i className="project-box__header--icon fa-solid fa-bolt"></i>
                </div>
                <p className="project-box__header--text">{title}</p>
                <div className="project-box__notification-container">
                    <p className="project-box__notification">Click to Open!</p>
                </div>
            </div>
            <div className="project-box__summary">
                <div className="project-box__summary-inner color--primary">
                    <i className="project-box__summary--icon fa-solid fa-layer-group"></i>
                    <p className="project-box__summary--text">{toDo.length}</p>
                </div>
                <div className="project-box__summary-inner color--yellow">
                    <i className="project-box__summary--icon fa-solid fa-trowel-bricks"></i>
                    <p className="project-box__summary--text">{inProgress.length}</p>
                </div>
                <div className="project-box__summary-inner color--green">
                    <i className="project-box__summary--icon fa-solid fa-fire"></i>
                    <p className="project-box__summary--text">{complete.length}</p>
                </div>
            </div>
        </button>
    )
}

export default ProjectBox;

import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import { computeHeadingLevel } from '@testing-library/react';
import './ProjectTask.css';

function ProjectTask({ id, title, author, content, tag, timeCreated, dateCreated, dateCreatedShort, comments, isDeleted, taskType, openTaskPageClicked }) {
    return (
        <div className="list-item">
            <button onClick={() => openTaskPageClicked(id, taskType)} className="list-item__button btn btn-transparent">
                <div className="list-item__top">
                    <h4 className="list-item__title">{title === "" ? 'Task' : title}</h4>
                    <p className="list-item__info">{author}, {dateCreatedShort}</p>
                    <p className="list-item__description">{content === "" ? 'Nothing of note for this task...' : content}</p>
                </div>
                <div className="list-item__footer">
                    <p className="list-item__tag">#{tag === "" ? 'Project' : tag.toUpperCase()}</p>
                    <div className="list-item__comments-btn btn-transparent">
                        <i className="fa-solid fa-message"></i>
                        {/* <p>{comments.length}</p> */}
                        <p>{[...comments.filter(task => task.isDeleted === false)].length}</p>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default ProjectTask;
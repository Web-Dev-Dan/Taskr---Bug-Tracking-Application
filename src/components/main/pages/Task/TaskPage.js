
import { useState, useEffect } from 'react';
import './TaskPage.css';

function TaskPage({ userData, currentProjectId, currentTaskId, currentTaskType }) {
    console.log(userData)
    console.log(`This is Task ${currentTaskId} of the ${currentTaskType} category of project number ${currentProjectId}`);

    let typeStyling;
    if (currentTaskType === 'To Do') {
        typeStyling = 'ticket-container--primary';
    } else if (currentTaskType === 'In Progress') {
        typeStyling = 'ticket-container--yellow';
    } else if (currentTaskType === 'Complete') {
        typeStyling = 'ticket-container--green';
    }

    const [currentProject, setCurrentProject] = useState('Title');
    const [currentTask, setCurrentTask] = useState('Task');
    useEffect(() => {
        userData.projects.filter(project => {
            if (project.id === currentProjectId) {
                setCurrentProject(project);
                console.log(project);
                if (currentTaskType === 'To Do') {
                    project.tasks.toDo.filter(task => {
                        if (task.id === currentTaskId) {
                            console.log(task);
                            setCurrentTask(task);
                        }
                    })
                } else if (currentTaskType === 'In Progress') {
                    project.tasks.inProgress.filter(task => {
                        if (task.id === currentTaskId) {
                            console.log(task);
                            setCurrentTask(task);
                        }
                    })
                } else if (currentTaskType === 'Complete') {
                    project.tasks.complete.filter(task => {
                        if (task.id === currentTaskId) {
                            console.log(task);
                            setCurrentTask(task);
                        }
                    })
                }
            }
        });
    }, []);

    return (
        <div className={`ticket-container ${typeStyling}`}>
            {/* Ticket Title Information */}
            < div className="ticket__head" >
                <div className="ticket__head-info">
                    {/* Header */}
                    <div className="ticket-info__info">
                        <i className="ticket-info__icon fa-solid fa-ticket"></i>
                        <p className="ticket-info__subtitle">Opened a task for <strong className="ticket-info__text--strong">{currentProject.title}</strong>.</p>
                    </div>
                    <input onChange={() => console.log('Title changed...')} className="ticket-info__title" value={currentTask.title} placeholder="Add Ticket Name..." type="text" />
                    {/* Author / Date / Time */}
                    <p className="ticket-info__date">Created by <strong className="ticket-info__text--strong">{currentTask.author}</strong> on {currentTask.dateCreated} at {currentTask.timeCreated}.</p>
                </div>
            </div >
            {/* Tag */}
            < div className="ticket-info__tag-container" >
                <i className="ticket-info__tag-icon fa-solid fa-hashtag"></i>
                <input onChange={() => console.log('Tag changed...')} className="ticket-info__tag-input" value={currentTask.tag} placeholder="Add Tag..." type="text" />
            </div >
            {/* Description */}
            <div className="ticket__description-container">
                <textarea onChange={() => console.log('Description changed...')} className="ticket__description" value={currentTask.content} placeholder="Add Description..." type="text" />
            </div>
            <div className="comments-container">
                <p className="comments-container__header">Comments ({currentTask.comments ? currentTask.comments.length : 0})</p>
                <div className="comments-container__comments">
                    {/* Show Comments: */}

                    {/* No Comments: */}
                </div>
            </div>
        </div >
    )
}

export default TaskPage;
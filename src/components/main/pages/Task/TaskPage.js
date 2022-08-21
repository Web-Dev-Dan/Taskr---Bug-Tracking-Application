
import { useState, useEffect } from 'react';
import EmptyNotification from '../../../../reusable/notifications/EmptyNotification/EmptyNotification';
import TaskComment from './TaskComment';
import './TaskPage.css';
import ButtonStrong from '../../../../reusable/buttons/ButtonStrong/ButtonStrong';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';

function TaskPage({ userData, currentProjectId, currentTaskId, currentTaskType, updateCurrentProject, updateTaskTitleValue, updateTaskTagValue, updateTaskContentValue, togglePriorityButton, toggleLikeButton, deleteCommentButton }) {
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
    const [currentTask, setCurrentTask] = useState({ "title": "Task", "comments": [] });
    useEffect(() => {
        userData.projects.filter(project => {
            if (project.id === currentProjectId) {
                setCurrentProject(project);
                updateCurrentProject(currentProjectId);
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

    function handleTaskTitleChange(e) {
        updateTaskTitleValue(e, currentTask);
    }

    function handleTaskTagChange(e) {
        updateTaskTagValue(e, currentTask);
    }

    function handleTaskContentChange(e) {
        updateTaskContentValue(e, currentTask);
    }

    // Toggle Priority Button (Comment)
    function togglePriorityButtonClicked(id) {
        togglePriorityButton(currentProjectId, currentTaskType, currentTaskId, id);
    }

    // Toggle Like Button (Comment)
    function toggleLikeButtonClicked(id) {
        toggleLikeButton(currentProjectId, currentTaskType, currentTaskId, id);
    }

    // Delete BUtton (Comment)
    function deleteCommentButtonClicked(id) {
        deleteCommentButton(currentProjectId, currentTaskType, currentTaskId, id);
    }

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
                    <input onChange={(e) => handleTaskTitleChange(e)} className="ticket-info__title" value={currentTask.title} placeholder="Add Ticket Name..." type="text" />
                    {/* Author / Date / Time */}
                    <p className="ticket-info__date">Created by <strong className="ticket-info__text--strong">{currentTask.author}</strong> on {currentTask.dateCreated} at {currentTask.timeCreated}.</p>
                </div>
            </div >
            {/* Tag */}
            < div className="ticket-info__tag-container" >
                <i className="ticket-info__tag-icon fa-solid fa-hashtag"></i>
                <input onChange={(e) => handleTaskTagChange(e)} className="ticket-info__tag-input" value={currentTask.tag} placeholder="Add Tag..." type="text" />
            </div >
            {/* Description */}
            <div className="ticket__description-container">
                <textarea onChange={(e) => handleTaskContentChange(e)} className="ticket__description" value={currentTask.content} placeholder="Add Description..." type="text" />
            </div>
            <div className="comments-container">
                {/* <p className="comments-container__header">Comments ({currentTask.comments ? currentTask.comments.length : 0})</p> */}
                <p className="comments-container__header">Comments ({
                    [...currentTask.comments.filter(task => task.isDeleted === false)].length
                })</p>

                <div className="comments-container__comments">
                    {/* Show Comments: */}
                    {currentTask.comments.length !== 0 && currentTask.comments.map(comment => {
                        if (comment.isDeleted === false) {
                            return <TaskComment
                                key={comment.id}
                                id={comment.id}
                                author={comment.author}
                                content={comment.content}
                                dateCreated={comment.dateCreated}
                                timeCreated={comment.timeCreated}
                                isPriority={comment.isPriority}
                                isLiked={comment.isLiked}
                                isDeleted={comment.isDeleted}
                                togglePriorityButtonClicked={(id) => togglePriorityButtonClicked(id)}
                                toggleLikeButtonClicked={(id) => toggleLikeButtonClicked(id)}
                                deleteCommentButtonClicked={(id) => deleteCommentButtonClicked(id)}
                            />
                        }
                    })}
                    {/* Add New Task Form */}
                    <form className="task-page__add-task-form">
                        <input className="add-task-form__input" placeholder="Add a Comment..."></input>
                        <ButtonStrong
                            iconClass='fa-solid fa-plus'
                            text='Add Comment'
                            handleClick={() => console.log('Add Task Button Clicked!')}
                        />
                    </form>
                    {/* No Comments: */}
                    {[...currentTask.comments.filter(task => task.isDeleted === false)].length === 0 && <EmptyNotification
                        icon='fa-solid fa-envelope-open'
                        text='Looks like you have no comments!'
                    />}

                    {/* {currentTask.comments.length === 0 && <EmptyNotification
                        icon='fa-solid fa-envelope-open'
                        text='Looks like you have no comments!'
                    />} */}
                </div>
            </div>
        </div >
    )
}

export default TaskPage;
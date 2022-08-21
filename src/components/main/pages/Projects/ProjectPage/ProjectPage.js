
import { useState, useEffect } from 'react';
import EmptyNotification from '../../../../../reusable/notifications/EmptyNotification/EmptyNotification';
import Projects from '../Projects';
import './ProjectPage.css';
import ProjectTask from './ProjectTask';

function ProjectPage({ userData, currentProjectId, project, updateInputValue, asideIsOpen, createNewTask, openTaskPage, deleteProjectButton }) {
    function openTaskPageClicked(taskId, taskType) {
        openTaskPage(taskId, taskType, currentProjectId);
    }

    const [deleteButtonIsOpen, setDeleteButtonIsOpen] = useState(false);
    function deleteProjectButtonClicked(currentProjectId) {
        setDeleteButtonIsOpen(true);
        setTimeout(() => {
            setDeleteButtonIsOpen(false);
        }, 3000);
    }

    function closeDeleteOptions() {
        setDeleteButtonIsOpen(false);
    }

    function deleteProjectCheckButton(currentProjectId) {
        setDeleteButtonIsOpen(false);
        deleteProjectButton(currentProjectId);
    }

    return (
        <div className="project-page">
            {/* Project Title Information */}
            <div className="main__head">
                <div className="main__head-info">
                    <div className="main__head-info--top">
                        <input onChange={(e, target) => updateInputValue(e, project)} className="head-info__title" value={project.title} placeholder="Add Project Name..." type="text" />
                        {!deleteButtonIsOpen && <button onClick={() => deleteProjectButtonClicked(currentProjectId)} className="button--delete btn-transparent">
                            <i className="fa-solid fa-trash-can"></i>
                        </button>}
                        {deleteButtonIsOpen && <div className="delete__options-container">
                            <div className="options-container__bar--outer">
                                <div className="options-container__bar--inner"></div>
                            </div>
                            <button onClick={() => deleteProjectCheckButton(currentProjectId)} className="options-container__button btn-transparent">
                                <i className="options-container__button--delete fa-solid fa-check"></i>
                            </button>
                            <button onClick={() => closeDeleteOptions()} className="options-container__button btn-transparent">
                                <i className="options-container__button--close fa-solid fa-xmark"></i>
                            </button>
                        </div>}
                    </div>
                    <p className="head-info__date">Created on {project.dateCreated} at {project.timeCreated}.</p>
                </div>
            </div>

            {/* Project List Content */}
            <div className={`main__content ${asideIsOpen ? 'main__content--large' : 'main__content--small'}`}>
                <div className="main__list">
                    {/* List Header */}
                    <div className="main__list-header">
                        <i className="main__list-header--icon fa-solid fa-layer-group color--primary"></i>
                        <div className="main__list-header--text">
                            <h3 className="list-header__title">To Do</h3>
                            <p className="list-header__subtitle">{project.tasks.toDo.filter(task => task.isDeleted === false).length} {project.tasks.toDo.filter(task => task.isDeleted === false).length === 1 ? 'task' : 'tasks'} remaining</p>
                        </div>
                    </div>
                    {/* List Button */}
                    <button onClick={() => createNewTask(currentProjectId, 'To Do')} className="list__add-btn btn">
                        <i className="list__add-btn--icon fa-solid fa-circle-plus"></i>
                        <p className="list__add-btn--text">Add Task</p>
                    </button>
                    {/* List */}
                    <div className="list list--to-do">
                        {/* List Items */}
                        {[...project.tasks.toDo.filter(task => task.isDeleted === false)].length === 0 && <EmptyNotification
                            icon='fa-solid fa-box-open'
                            text='Looks like this list is empty!'
                        />}
                        {/* {project.tasks.toDo.length === 0 && <EmptyNotification
                            icon='fa-solid fa-box-open'
                            text='Looks like this list is empty!'
                        />} */}
                        {[...project.tasks.toDo.filter(task => task.isDeleted === false)].map(task => {
                            return <ProjectTask
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                author={task.author}
                                content={task.content}
                                tag={task.tag}
                                timeCreated={task.timeCreated}
                                dateCreated={task.dateCreated}
                                dateCreatedShort={task.dateCreatedShort}
                                comments={task.comments}
                                isDeleted={task.isDeleted}
                                taskType='To Do'
                                openTaskPageClicked={(taskId, taskType) => openTaskPageClicked(taskId, taskType)}
                            />
                        })}
                        {/* {project.tasks.toDo.length > 0 && project.tasks.toDo.map(task => <ProjectTask
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            author={task.author}
                            content={task.content}
                            tag={task.tag}
                            timeCreated={task.timeCreated}
                            dateCreated={task.dateCreated}
                            dateCreatedShort={task.dateCreatedShort}
                            comments={task.comments}
                            isDeleted={task.isDeleted}
                            taskType='To Do'
                            openTaskPageClicked={(taskId, taskType) => openTaskPageClicked(taskId, taskType)}
                        />)} */}

                    </div>
                </div>

                <div className="main__list">
                    {/* List Header */}
                    <div className="main__list-header">
                        <i className="main__list-header--icon fa-solid fa-trowel-bricks color--yellow"></i>
                        <div className="main__list-header--text">
                            <h3 className="list-header__title">In Progress</h3>
                            <p className="list-header__subtitle">{project.tasks.inProgress.filter(task => task.isDeleted === false).length} {project.tasks.inProgress.filter(task => task.isDeleted === false).length === 1 ? 'task' : 'tasks'} remaining</p>
                        </div>
                    </div>
                    {/* List Button */}
                    <button onClick={() => createNewTask(currentProjectId, 'In Progress')} className="list__add-btn btn">
                        <i className="list__add-btn--icon fa-solid fa-circle-plus"></i>
                        <p className="list__add-btn--text">Add Task</p>
                    </button>
                    {/* List */}
                    <div className="list list--in-progress">
                        {/* List Items */}
                        {[...project.tasks.inProgress.filter(task => task.isDeleted === false)].length === 0 && <EmptyNotification
                            icon='fa-solid fa-box-open'
                            text='Looks like this list is empty!'
                        />}
                        {/* {project.tasks.inProgress.length === 0 && <EmptyNotification
                            icon='fa-solid fa-box-open'
                            text='Looks like this list is empty!'
                        />} */}
                        {[...project.tasks.inProgress.filter(task => task.isDeleted === false)].map(task => {
                            return <ProjectTask
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                author={task.author}
                                content={task.content}
                                tag={task.tag}
                                timeCreated={task.timeCreated}
                                dateCreated={task.dateCreated}
                                dateCreatedShort={task.dateCreatedShort}
                                comments={task.comments}
                                isDeleted={task.isDeleted}
                                taskType='In Progress'
                                openTaskPageClicked={(taskId, taskType) => openTaskPageClicked(taskId, taskType)}
                            />
                        })}
                        {/* {project.tasks.inProgress.length > 0 && project.tasks.inProgress.map(task => <ProjectTask
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            author={task.author}
                            content={task.content}
                            tag={task.tag}
                            timeCreated={task.timeCreated}
                            dateCreated={task.dateCreated}
                            dateCreatedShort={task.dateCreatedShort}
                            comments={task.comments}
                            isDeleted={task.isDeleted}
                            taskType='In Progress'
                            openTaskPageClicked={(taskId, taskType) => openTaskPageClicked(taskId, taskType)}
                        />)} */}

                    </div>
                </div>

                <div className="main__list">
                    {/* List Header */}
                    <div className="main__list-header">
                        <i className="main__list-header--icon fa-solid fa-fire color--green"></i>
                        <div className="main__list-header--text">
                            <h3 className="list-header__title">Complete</h3>
                            <p className="list-header__subtitle">{project.tasks.complete.filter(task => task.isDeleted === false).length} {project.tasks.complete.filter(task => task.isDeleted === false).length === 1 ? 'task' : 'tasks'} remaining</p>
                        </div>
                    </div>
                    {/* List Button */}
                    <button onClick={() => createNewTask(currentProjectId, 'Complete')} className="list__add-btn btn">
                        <i className="list__add-btn--icon fa-solid fa-circle-plus"></i>
                        <p className="list__add-btn--text">Add Task</p>
                    </button>
                    {/* List */}
                    <div className="list list--complete">
                        {/* List Items */}
                        {[...project.tasks.complete.filter(task => task.isDeleted === false)].length === 0 && <EmptyNotification
                            icon='fa-solid fa-box-open'
                            text='Looks like this list is empty!'
                        />}
                        {/* {project.tasks.complete.length === 0 && <EmptyNotification
                            icon='fa-solid fa-box-open'
                            text='Looks like this list is empty!'
                        />} */}
                        {[...project.tasks.complete.filter(task => task.isDeleted === false)].map(task => {
                            return <ProjectTask
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                author={task.author}
                                content={task.content}
                                tag={task.tag}
                                timeCreated={task.timeCreated}
                                dateCreated={task.dateCreated}
                                dateCreatedShort={task.dateCreatedShort}
                                comments={task.comments}
                                isDeleted={task.isDeleted}
                                taskType='Complete'
                                openTaskPageClicked={(taskId, taskType) => openTaskPageClicked(taskId, taskType)}
                            />
                        })}
                        {/* {project.tasks.complete.length > 0 && project.tasks.complete.map(task => <ProjectTask
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            author={task.author}
                            content={task.content}
                            tag={task.tag}
                            timeCreated={task.timeCreated}
                            dateCreated={task.dateCreated}
                            dateCreatedShort={task.dateCreatedShort}
                            comments={task.comments}
                            isDeleted={task.isDeleted}
                            taskType='Complete'
                            openTaskPageClicked={(taskId, taskType) => openTaskPageClicked(taskId, taskType)}
                        />)} */}

                    </div>
                </div>
            </div>



        </div >
    )
}

export default ProjectPage;
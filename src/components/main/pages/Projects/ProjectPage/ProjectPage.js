
import { useState, useEffect } from 'react';
import EmptyNotification from '../../../../../reusable/notifications/EmptyNotification/EmptyNotification';
import './ProjectPage.css';

function ProjectPage({ userData, currentProjectId, project, updateInputValue }) {
    return (
        <div className="project-page">
            {/* Project Title Information */}
            <div className="main__head">
                <div className="main__head-info">
                    <input onChange={(e, target) => updateInputValue(e, project)} className="head-info__title" value={project.title} placeholder="Add Project Name..." type="text" />
                    <p className="head-info__date">Created on {project.dateCreated} at {project.timeCreated}.</p>
                </div>
            </div>

            {/* Project List Content */}
            <div className="main__content">
                <div className="main__list">
                    {/* List Header */}
                    <div className="main__list-header">
                        <i className="main__list-header--icon fa-solid fa-layer-group color--primary"></i>
                        <div className="main__list-header--text">
                            <h3 className="list-header__title">To Do</h3>
                            <p className="list-header__subtitle">{project.tasks.toDo.length} {project.tasks.toDo.length === 1 ? 'task' : 'tasks'} remaining</p>
                        </div>
                    </div>
                    {/* List Button */}
                    <button className="list__add-btn btn">
                        <i className="list__add-btn--icon fa-solid fa-circle-plus"></i>
                        <p className="list__add-btn--text">Add Task</p>
                    </button>
                    {/* List */}
                    <div className="list list--to-do">
                        {/* List Items */}
                        {project.tasks.toDo.length === 0 && <EmptyNotification
                            icon='fa-solid fa-box-open'
                            text='Looks like this list is empty!'
                        />}

                    </div>
                </div>

                <div className="main__list">
                    {/* List Header */}
                    <div className="main__list-header">
                        <i className="main__list-header--icon fa-solid fa-trowel-bricks color--yellow"></i>
                        <div className="main__list-header--text">
                            <h3 className="list-header__title">In Progress</h3>
                            <p className="list-header__subtitle">{project.tasks.inProgress.length} {project.tasks.inProgress.length === 1 ? 'task' : 'tasks'} remaining</p>
                        </div>
                    </div>
                    {/* List Button */}
                    <button className="list__add-btn btn">
                        <i className="list__add-btn--icon fa-solid fa-circle-plus"></i>
                        <p className="list__add-btn--text">Add Task</p>
                    </button>
                    {/* List */}
                    <div className="list list--in-progress">
                        {/* List Items */}
                        {project.tasks.inProgress.length === 0 && <EmptyNotification
                            icon='fa-solid fa-box-open'
                            text='Looks like this list is empty!'
                        />}

                    </div>
                </div>

                <div className="main__list">
                    {/* List Header */}
                    <div className="main__list-header">
                        <i className="main__list-header--icon fa-solid fa-fire color--green"></i>
                        <div className="main__list-header--text">
                            <h3 className="list-header__title">Complete</h3>
                            <p className="list-header__subtitle">{project.tasks.complete.length} {project.tasks.complete.length === 1 ? 'task' : 'tasks'} remaining</p>
                        </div>
                    </div>
                    {/* List Button */}
                    <button className="list__add-btn btn">
                        <i className="list__add-btn--icon fa-solid fa-circle-plus"></i>
                        <p className="list__add-btn--text">Add Task</p>
                    </button>
                    {/* List */}
                    <div className="list list--complete">
                        {/* List Items */}
                        {project.tasks.complete.length === 0 && <EmptyNotification
                            icon='fa-solid fa-box-open'
                            text='Looks like this list is empty!'
                        />}

                    </div>
                </div>
            </div>



        </div >
    )
}

export default ProjectPage;
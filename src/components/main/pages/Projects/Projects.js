
import { useState } from 'react';
import ButtonStrong from '../../../../reusable/buttons/ButtonStrong/ButtonStrong';
import EmptyNotification from '../../../../reusable/notifications/EmptyNotification/EmptyNotification';
import ProjectBox from './ProjectBox';
import './Projects.css';

function Projects({ userData, createNewProject, openProjectPage, asideIsOpen }) {
    // Update 'Create a Project' Input Value:
    const [newProjectName, setNewProjectName] = useState('');
    function handleChange(e) {
        // console.log(e.target.value);
        setNewProjectName(e.target.value);
    }

    // Submit New Project Name Button:
    function handleClick(e, projectName) {
        e.preventDefault();
        // console.log(newProjectName);
        createNewProject(newProjectName);
        setNewProjectName('');
    }
    return (
        <div className="projects">
            {/* Add New Project Form */}
            <form className="projects__add-form">
                <input onChange={(e) => handleChange(e)} className="add-form__input" value={newProjectName} placeholder="Create a Project..."></input>
                <ButtonStrong
                    iconClass='fa-solid fa-plus'
                    text='Create Project'
                    handleClick={(e) => handleClick(e)}
                />
            </form>
            {/* MAIN CONTENT */}
            {userData.projects.length > 0 && <div className={asideIsOpen ? 'projects__content--large' : 'projects__content--small'}>
                {/* Projects Overview */}
                <div className="projects__overview">

                </div>
                {/* Projects List */}
                <div className="projects__project-list">
                    {[...userData.projects.filter(project => project.isDeleted === false)].map(project => {
                        return <ProjectBox
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            author={project.author}
                            timeCreated={project.timeCreated}
                            dateCreated={project.dateCreated}
                            toDo={project.tasks.toDo}
                            inProgress={project.tasks.inProgress}
                            complete={project.tasks.complete}
                            isDeleted={project.isDeleted}
                            isComplete={project.isComplete}
                            openProjectPage={openProjectPage}
                        />
                    })}
                    {/* {userData.projects.map(project => {
                        return <ProjectBox
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            author={project.author}
                            timeCreated={project.timeCreated}
                            dateCreated={project.dateCreated}
                            toDo={project.tasks.toDo}
                            inProgress={project.tasks.inProgress}
                            complete={project.tasks.complete}
                            isDeleted={project.isDeleted}
                            isComplete={project.isComplete}
                            openProjectPage={openProjectPage}
                        />
                    })} */}
                </div>
            </div>}
            {/* No Projects */}
            {[...userData.projects.filter(project => project.isDeleted === false)].length === 0 && <EmptyNotification
                icon='fa-solid fa-box-open'
                text='Looks like you have no projects!'
            />}
            {/* {userData.projects.length === 0 && <EmptyNotification
                icon='fa-solid fa-box-open'
                text='Looks like you have no projects!'
            />} */}
        </div>
    )
}

export default Projects;
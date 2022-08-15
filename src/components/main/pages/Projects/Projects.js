
import { useState } from 'react';
import ButtonStrong from '../../../../reusable/buttons/ButtonStrong/ButtonStrong';
import './Projects.css';

function Projects({ userData, createNewProject }) {
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
            <form className="projects__add-form">
                <input onChange={(e) => handleChange(e)} className="add-form__input" value={newProjectName} placeholder="Create a Project..."></input>
                <ButtonStrong
                    iconClass='fa-solid fa-plus'
                    text='Create Project'
                    handleClick={(e) => handleClick(e)}
                />
            </form>
        </div>
    )
}

export default Projects;
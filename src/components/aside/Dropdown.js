
import { useState } from 'react';
import './Dropdown.css';
import DropdownOption from './DropdownOption';

function Dropdown({ icon, title, textIsShown, updateCurrentPageName, createNewProject, userData, openProjectPage }) {
    // Toggle Dropdown
    const [dropdownContentIsShown, setDropdownContentIsShown] = useState(false);
    function toggleDropdown() {
        setDropdownContentIsShown(!dropdownContentIsShown);
        updateCurrentPageName('Projects');
    }

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
        <div className={dropdownContentIsShown ? "dropdown-selected" : "dropdown"}>
            <button onClick={() => updateCurrentPageName('Projects')} className="dropdown-btn btn-transparent">
                <div className="dropdown__left">
                    <i className={`dropdown-btn__icon ${icon}`}></i>
                    {textIsShown && <h3 className="dropdown-btn__title">{title}</h3>}
                </div>
                <button onClick={() => toggleDropdown()} className="dropdown-btn--dropdown btn-transparent">
                    {dropdownContentIsShown ? <i className="dropdown-btn__icon--small fa-solid fa-caret-up"></i> : <i className="dropdown-btn__icon--small fa-solid fa-caret-down"></i>}
                </button>
            </button>
            {dropdownContentIsShown && <div className="dropdown-content">
                <form className="dropdown-content__input-form">
                    <input onChange={(e) => handleChange(e)} className="input-form__input" type="text" value={newProjectName} placeholder="Add Project..." />
                    <button onClick={(e) => handleClick(e)} className="input-form__button btn btn-transparent" type="submit">
                        <div role="img" alt="Plus symbol to add new project">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </button>
                </form>
                {/* Dropdown Options */}
                {[...userData.projects.filter(project => project.isDeleted === false)].length > 0 && <div className="dropdown-content__options">
                    {[...userData.projects.filter(project => project.isDeleted === false).map(project => {
                        return <DropdownOption
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            openProjectPage={openProjectPage}
                        />
                    })]}
                </div>}
                {/* {userData.projects.length > 0 && <div className="dropdown-content__options">
                    {userData.projects.map(project => {
                        return <DropdownOption
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            openProjectPage={openProjectPage}
                        />
                    })}
                </div>} */}
            </div>}
        </div>
    )
}

export default Dropdown;
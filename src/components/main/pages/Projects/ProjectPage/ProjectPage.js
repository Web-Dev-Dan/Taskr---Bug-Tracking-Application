
import { useState, useEffect } from 'react';
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

            {/* {userData.projects.map(project => {
                if (project.id === currentProjectId) {
                    return <div>
                        <h1>{project.title}</h1>
                    </div>
                }
            })} */}


        </div >
    )
}

export default ProjectPage;

import { useState, useEffect } from 'react';
import './ProjectPage.css';

function ProjectPage({ userData, currentProjectId }) {
    return (
        <div className="project-page">
            {userData.projects.map(project => {
                if (project.id === currentProjectId) {
                    return <h1>{project.title}</h1>
                }
            })}




            {/* {userData.projects.map(project => {
                console.log(`Project ID: ${project.id}`);
                console.log(`Current Project ID: ${currentProjectId}`)
                if (project.id !== currentProjectId) {
                    return <div className="tet">
                        <h1>This is {project.title}</h1>
                    </div>
                }
            })} */}
        </div >
    )
}

export default ProjectPage;
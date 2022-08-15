
import ButtonStrong from '../../../../reusable/buttons/ButtonStrong/ButtonStrong';
import './Projects.css';

function Projects({ userData }) {
    return (
        <div className="projects">
            <form className="projects__add-form">
                <input className="add-form__input" placeholder="Create a Project..."></input>
                <ButtonStrong
                    iconClass='fa-solid fa-plus'
                    text='Create Project'
                />
            </form>
        </div>
    )
}

export default Projects;
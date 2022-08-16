
import './DropdownOption.css';

function DropdownOption({ id, title, openProjectPage }) {
    return (
        <button onClick={() => openProjectPage(id)} className="dropdown-content__button btn-transparent">
            <i className="dropdown-content__button--icon-left fa-solid fa-file"></i>
            <h4 className="dropdown-content__button--text">{title}</h4>
            <i className="dropdown-content__button--icon-right fa-solid fa-ellipsis"></i>
        </button>
    )
}

export default DropdownOption;
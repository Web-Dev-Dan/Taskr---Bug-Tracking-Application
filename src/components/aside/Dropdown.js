
import { useState } from 'react';
import './Dropdown.css';

function Dropdown({ icon, title, textIsShown, updateCurrentPageName }) {
    const [dropdownContentIsShown, setDropdownContentIsShown] = useState(false);
    function toggleDropdown() {
        setDropdownContentIsShown(!dropdownContentIsShown);
        updateCurrentPageName('Projects');
    }

    return (
        <div className={dropdownContentIsShown ? "dropdown-selected" : "dropdown"}>
            <button onClick={() => toggleDropdown()} className="dropdown-btn btn-transparent">
                <i className={`dropdown-btn__icon ${icon}`}></i>
                {textIsShown && <h3 className="dropdown-btn__title">{title}</h3>}
                {dropdownContentIsShown ? <i className="dropdown-btn__icon--small fa-solid fa-caret-up"></i> : <i className="dropdown-btn__icon--small fa-solid fa-caret-down"></i>}
            </button>
            {dropdownContentIsShown && <div className="dropdown-content">
                <form className="dropdown-content__input-form">
                    <input className="input-form__input" type="text" placeholder="Add Project..." />
                    <button className="input-form__button btn btn-transparent" type="submit">
                        <div role="img" alt="Plus symbol to add new project">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </button>
                </form>
            </div>}
        </div>
    )
}

export default Dropdown;
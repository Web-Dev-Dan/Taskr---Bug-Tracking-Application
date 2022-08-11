
import './IconButton.css';

function IconButton({ iconClass, handleClick }) {
    return (
        <button onClick={handleClick} className="icon-button btn-transparent">
            <i className={iconClass}></i>
        </button>
    )
}

export default IconButton;

import './ButtonStrong.css';

function ButtonStrong({ iconClass, text, handleClick }) {
    return (
        <button onClick={(e) => handleClick(e)} className="button-strong btn-transparent">
            <i className={`button-strong__icon ${iconClass}`}></i>
            <p className="button-strong__text">{text}</p>
        </button>
    )
}

export default ButtonStrong;
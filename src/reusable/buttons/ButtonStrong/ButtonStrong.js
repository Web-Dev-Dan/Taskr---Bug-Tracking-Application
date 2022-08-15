
import './ButtonStrong.css';

function ButtonStrong({ iconClass, text }) {
    return (
        <button className="button-strong btn-transparent">
            <i className={`button-strong__icon ${iconClass}`}></i>
            <p className="button-strong__text">{text}</p>
        </button>
    )
}

export default ButtonStrong;
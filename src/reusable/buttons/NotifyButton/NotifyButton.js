
import { useDeferredValue } from 'react';
import './NotifyButton.css';

function NotifyButton({ icon, title, notificationCount, textIsShown, handleClick }) {
    function buttonClicked() {
        console.log(`${title} clicked! (${notificationCount})`);
    }

    return (
        <button onClick={() => handleClick(title)} className="notify-btn btn-transparent">
            <i className={`notify-btn__icon ${icon}`}></i>
            {textIsShown && <h3 className="notify-btn__title">{title}</h3>}
            {textIsShown && notificationCount !== 0 && <div className="notify-btn__notification-bubble">{notificationCount}</div>}
            {!textIsShown && notificationCount !== 0 && <div className="notify-btn__notification-bubble--small">
                <i className="fa-solid fa-exclamation"></i>
            </div>}
        </button>
    )
}

export default NotifyButton;

import './NotifyButton.css';

function NotifyButton({ icon, title, notificationCount, textIsShown }) {
    function buttonClicked() {
        console.log(`${title} clicked! (${notificationCount})`);
    }

    return (
        <button onClick={() => buttonClicked()} className="notify-btn btn-transparent">
            <i className={icon}></i>
            {textIsShown && <h3 className="notify-btn__title">{title}</h3>}
            {textIsShown && <div className="notify-btn__notification-bubble">{notificationCount}</div>}
        </button>
    )
}

export default NotifyButton;

import './EmptyNotification.css';

function EmptyNotification({ icon, text }) {
    return (
        <div className="empty-message-container">
            <i className={`empty-message-container__icon ${icon}`}></i>
            <p className="empty-message-container__text">{text}</p>
        </div>
    )
}

export default EmptyNotification;
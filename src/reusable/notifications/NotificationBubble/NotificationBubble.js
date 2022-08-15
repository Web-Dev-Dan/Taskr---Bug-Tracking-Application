
import './NotificationBubble.css';

function NotificationBubble({ notificationCount, textSingular, textPlural }) {
    // console.log(`You have ${notificationCount} messages`);
    return (
        <div className={`notification-container ${notificationCount === 0 && 'notification-container--empty'}`}>
            <div className="notification">
                {notificationCount !== 0 && <p className="notification--text">{`You have ${notificationCount} new ${notificationCount === 1 ? textSingular : textPlural}.`}</p>}
                {notificationCount === 0 && <p className="notification--text">You have {notificationCount} new {textPlural}.</p>}
            </div>
        </div>
    )
}

export default NotificationBubble;
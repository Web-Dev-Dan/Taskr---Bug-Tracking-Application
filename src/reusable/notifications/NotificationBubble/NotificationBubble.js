
import './NotificationBubble.css';

function NotificationBubble({ notificationCount }) {
    console.log(`YOu have ${notificationCount} messages`)
    return (
        <div className={`notification-container ${notificationCount === 0 && 'notification-container--empty'}`}>
            <div className="notification">
                {notificationCount !== 0 && <p className="notification--text">{`You have ${notificationCount} new ${notificationCount === 1 ? 'message' : 'messages'}.`}</p>}
                {notificationCount === 0 && <p className="notification--text">You have {notificationCount} new messages.</p>}
            </div>
            {/* <div className="messages__notification">
                {unreadMessages < 0 ? <p className="messages__notification--text">You have <strong>{unreadMessages} new {unreadMessages === 1 ? 'message' : 'messages'}</strong>.</p> : <p className="messages__notification--text">You have {unreadMessages} new messages.</p>}
                {unread_messageNotifications.length === 0 && <p className="messages__notification--text">You have {unread_messageNotifications.length} new messages.</p>}
            </div> */}
        </div>
    )
}

export default NotificationBubble;
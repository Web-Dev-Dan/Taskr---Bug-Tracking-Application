
import EmptyNotification from '../../../../reusable/notifications/EmptyNotification/EmptyNotification';
import NotificationBubble from '../../../../reusable/notifications/NotificationBubble/NotificationBubble';
import MessageBox from './MessageBox';
import './Messages.css';

function Messages({ userData, updateMessageIsRead }) {
    console.log(userData.messages);
    let unread_messageNotifications = userData.messages ? userData.messages.filter(message => message.isRead === false) : 0;

    return (
        <div className="messages">
            {/* <div className={`messages__notification-container ${unread_messageNotifications.length === 0 && 'messages__notification-container--empty'}`}>
                <div className="messages__notification">
                    {unread_messageNotifications.length < 0 ? <p className="messages__notification--text">You have <strong>{unread_messageNotifications.length} new {unread_messageNotifications.length === 1 ? 'message' : 'messages'}</strong>.</p> : <p className="messages__notification--text">You have {unread_messageNotifications.length} new messages.</p>}
                    {unread_messageNotifications.length === 0 && <p className="messages__notification--text">You have {unread_messageNotifications.length} new messages.</p>}
                </div>
            </div> */}
            {userData.messages.length !== 0 && <NotificationBubble
                notificationCount={unread_messageNotifications.length}
            />}
            {/* Has Messages: */}
            {userData.messages.length > 0 && userData.messages.map(message => {
                return <MessageBox
                    key={message.id}
                    id={message.id}
                    title={message.title}
                    author={message.author}
                    timeCreated={message.timeCreated}
                    dateCreated={message.dateCreated}
                    content={message.content}
                    isRead={message.isRead}
                    isDeleted={message.isDeleted}
                    updateMessageIsRead={updateMessageIsRead}
                />
            })}
            {/* No Messages: */}
            {userData.messages.length === 0 &&
                <EmptyNotification
                    icon='fa-solid fa-box-open'
                    text='Looks like you have no messages!'
                />
            }
        </div>
    )
}

export default Messages;
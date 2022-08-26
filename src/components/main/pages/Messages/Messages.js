
import EmptyNotification from '../../../../reusable/notifications/EmptyNotification/EmptyNotification';
import NotificationBubble from '../../../../reusable/notifications/NotificationBubble/NotificationBubble';
import MessageBox from './MessageBox';
import './Messages.css';

function Messages({ userData, updateMessageIsRead, deleteMessage }) {
    // console.log(userData.messages);
    let unread_messageNotifications = userData.messages ? userData.messages.filter(message => message.isRead === false) : 0;

    return (
        <div className="messages">
            {/* Notification Bubble (if not empty) */}
            {userData.messages.length !== 0 && <NotificationBubble
                notificationCount={unread_messageNotifications.length}
                textSingular='message'
                textPlural='messages'
            />}
            {/* Has Messages: */}
            <div className="messages__display">
                {userData.messages.filter(message => message.isDeleted === false).length > 0 && userData.messages.filter(message => message.isDeleted === false).map(message => {
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
                        deleteMessage={deleteMessage}
                    />
                })}
            </div>
            {/* No Messages: */}
            {userData.messages.filter(message => message.isDeleted === false).length === 0 &&
                <EmptyNotification
                    icon='fa-solid fa-box-open'
                    text='Looks like you have no messages!'
                />
            }
        </div>
    )
}

export default Messages;
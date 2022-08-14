
import EmptyNotification from '../../../../reusable/notifications/EmptyNotification/EmptyNotification';
import MessageBox from './MessageBox';
import './Messages.css';

function Messages({ userData, updateMessageIsRead }) {
    // console.log(userData.messages);

    return (
        <div className="messages">
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
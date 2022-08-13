
import EmptyNotification from '../../../../reusable/notifications/EmptyNotification/EmptyNotification';
import './Messages.css';

function Messages({ userData }) {
    console.log(userData.messages)

    return (
        <div className="messages">
            {/* Has Messages: */}
            {userData.messages.length > 0 && userData.messages.map(message => {
                return <div className="message-container">
                    <div className="message-container__top"></div>
                    <div className="message-container__top"></div>
                </div>
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
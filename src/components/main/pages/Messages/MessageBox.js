
import { useState } from 'react';
import './MessageBox.css';

function MessageBox({ id, title, author, timeCreated, dateCreated, content, isRead, isDeleted, updateMessageIsRead }) {
    const [messageIsOpen, setMessageIsOpen] = useState(false);

    function toggleOpenMessage() {
        setMessageIsOpen(!messageIsOpen);
        if (!isRead) {
            updateMessageIsRead(id);
            console.log('Message has now been read!');
        }
    }

    return (
        <div className={`message-container ${!messageIsOpen && 'message-hidden'}`}>
            <button onClick={() => toggleOpenMessage()} className="message-container__top btn-transparent">
                <div className="message__icon-container">
                    <i className={`message__icon ${isRead === true ? 'fa-solid fa-envelope-open' : 'fa-solid fa-envelope'}`}></i>
                </div>
                <div className="message__content">
                    <h3 className="message__content--header">Some Random Message Header</h3>
                </div>
                <div className="message__details">
                    <p className="message__details--text">{`Click to ${!messageIsOpen ? 'Open' : 'Close'}`}</p>
                </div>
            </button>
            <div className="message-container__bottom"></div>
        </div>
    )
}

export default MessageBox;

import { useState } from 'react';
import './MessageBox.css';

function MessageBox({ id, title, author, timeCreated, dateCreated, content, isRead, isDeleted, updateMessageIsRead, deleteMessage }) {
    const [messageIsOpen, setMessageIsOpen] = useState(false);

    function toggleOpenMessage() {
        setMessageIsOpen(!messageIsOpen);
        if (!isRead) {
            updateMessageIsRead(id);
            // console.log('Message has now been read!');
        }
    }

    return (
        <div className={`message-container ${!messageIsOpen && 'message-hidden'} ${isRead && 'message-read'}`}>
            <button onClick={() => toggleOpenMessage()} className="message-container__button btn-transparent">
                <div className="message-container__button--top">
                    <div className="message__icon-container">
                        <i className={`message__icon ${isRead === true ? 'fa-solid fa-envelope-open' : 'fa-solid fa-envelope'}`}></i>
                    </div>
                    <div className="message__content">
                        <h3 className="message__content--header">{title}</h3>
                    </div>
                    <div className="message__details">
                        <p className="message__details--text">{`Click to ${!messageIsOpen ? 'Open' : 'Close'}`}</p>
                    </div>
                </div>
                <div className="message-container__button--bottom">
                    <div className="message-container__content">
                        <p className="message-container__content--text">{content}</p>
                        <div className="message-container__content--info">
                            <p>{author}</p>
                            <p>{dateCreated} | {timeCreated}</p>
                            <button onClick={() => deleteMessage(id)} className="message-container__delete-button btn-transparent">
                                <i className="message-container__delete-button--icon fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </button>

        </div>
    )
}

export default MessageBox;
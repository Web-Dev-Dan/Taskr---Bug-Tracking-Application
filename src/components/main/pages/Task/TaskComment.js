
import './TaskComment.css';

function TaskComment({ id, author, content, dateCreated, timeCreated, isPriority, isLiked, isDeleted, togglePriorityButtonClicked, toggleLikeButtonClicked, deleteCommentButtonClicked }) {
    return (
        <div className="comment-box">
            <i className="comment-box__icon fa-solid fa-message"></i>
            <div className="comment-box__content">
                <div className="comment-box__content--top">
                    <p>{author}</p>
                    <p>{dateCreated} | {timeCreated}</p>
                </div>
                <p className="comment-box__comment">{content}</p>
            </div>
            <div className="comment-box__button-container">
                <button onClick={() => togglePriorityButtonClicked(id)} className="comment-box__button btn-transparent">
                    <i className={`${isPriority && 'icon-checked'} comment-box__button--icon fa-solid fa-star`}></i>
                </button>
                <button onClick={() => toggleLikeButtonClicked(id)} className="comment-box__button btn-transparent">
                    <i className={`${isLiked && 'icon-checked'} comment-box__button--icon fa-solid fa-heart`}></i>
                </button>
                <button onClick={() => deleteCommentButtonClicked(id)} className="comment-box__button btn-transparent">
                    <i className="comment-box__button--icon fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    )
}

export default TaskComment;
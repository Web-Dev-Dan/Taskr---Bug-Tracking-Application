
import './TaskPage.css';

function TaskPage() {
    return (
        <div className={`ticket-container`}>
            {/* Ticket Title Information */}
            < div className="ticket__head" >
                <div className="ticket__head-info">
                    {/* Header */}
                    <div className="ticket-info__info">
                        <i className="ticket-info__icon fa-solid fa-ticket"></i>
                        <p className="ticket-info__subtitle">Opened a task for <strong className="ticket-info__text--strong">Portfolio</strong>.</p>
                    </div>
                    <input className="ticket-info__title" value="Random Ticket" placeholder="Add Ticket Name..." type="text" />
                    {/* Author / Date / Time */}
                    <p className="ticket-info__date">Created by <strong className="ticket-info__text--strong">Daniel</strong> on Monday 6 August, 2022 at 11:45.</p>
                </div>
            </div >
            {/* Tag */}
            < div className="ticket-info__tag-container" >
                <i className="ticket-info__tag-icon fa-solid fa-hashtag"></i>
                <input className="ticket-info__tag-input" value="UIDesign" placeholder="Add Tag..." type="text" />
            </div >
            {/* Description */}
            <div className="ticket__description-container">
                <textarea className="ticket__description" placeholder="Add Description..." type="text" />
            </div>
            <div className="comments-container">
                <p className="comments-container__header">Comments (3)</p>
                <div className="comments-container__comments">
                    {/* Show Comments: */}

                    {/* No Comments: */}
                </div>
            </div>
        </div >
    )
}

export default TaskPage;
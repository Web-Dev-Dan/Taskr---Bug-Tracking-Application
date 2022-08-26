
import { useState } from 'react';
import './ReportBox.css';

function ReportBox({ id, title, content, timeCreated, dateCreated, reportType, isRead, isDeleted, updateReportIsRead, deleteReport }) {

    const [reportIsOpen, setReportIsOpen] = useState(false);
    function toggleOpenReport() {
        setReportIsOpen(!reportIsOpen);
        if (!isRead) {
            updateReportIsRead(id);
            console.log('Report has now been read!');
        }
    }

    function getReportClass() {
        if (reportType === 'Update') {
            return 'report--update';
        } else if (reportType === 'Status Change') {
            return 'report--status-change';
        } else if (reportType === 'User Update') {
            return 'report--user-update';
        } else if (reportType === 'Warning') {
            return 'report--warning';
        } else if (reportType === 'Complete') {
            return 'report--complete';
        }
    }

    function getIconClass() {
        if (reportType === 'Update') {
            return 'fa-solid fa-info';
        } else if (reportType === 'Status Change') {
            return 'fa-solid fa-pencil';
        } else if (reportType === 'User Update') {
            return 'fa-solid fa-user';
        } else if (reportType === 'Warning') {
            return 'fa-solid fa-exclamation';
        } else if (reportType === 'Complete') {
            return 'fa-solid fa-fire';
        }
    }

    return (
        <div className={`report-container ${getReportClass()} ${!reportIsOpen && 'report-hidden'} ${isRead && 'report-read'}`}>
            <button onClick={() => toggleOpenReport()} className="report-container__button btn-transparent">
                <div className="report-container__button--top">
                    <div className="report__icon-container">
                        <div className="report__icon-container-inner">
                            <i className={`report__icon ${getIconClass()}`}></i>
                        </div>
                    </div>
                    <div className="report__content">
                        <h3 className="report__content--header">{title}</h3>
                    </div>
                    <div className="report__details">
                        <p className="report__details--text">{`Click to ${!reportIsOpen ? 'Open' : 'Close'}`}</p>
                    </div>
                </div>

                <div className="report-container__button--bottom">
                    <div className="report-container__content">
                        {content && <p className="report-container__content--text">{content}</p>}
                        <div className="report-container__content--info">
                            <p className="report__type-box">{reportType}</p>
                            <p>{dateCreated} | {timeCreated}</p>
                            <button onClick={() => deleteReport(id)} className="report-container__delete-button btn-transparent">
                                <i className="report-container__delete-button--icon fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default ReportBox;
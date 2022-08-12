
import './MainPageHeader.css';

function MainPageHeader({ currentPageName, iconClasses }) {
    return (
        <div className="main-content__header">
            <div className="main-content__header--icon-container">
                <i className={`main-content__header--icon ${iconClasses}`}></i>
            </div>
            <h2 className="main-content__header--header">{currentPageName}</h2>
        </div>
    )
}

export default MainPageHeader;
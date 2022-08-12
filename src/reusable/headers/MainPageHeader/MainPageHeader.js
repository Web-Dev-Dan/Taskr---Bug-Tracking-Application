
import './MainPageHeader.css';

function MainPageHeader({ currentPageName, iconClasses }) {
    return (
        <div className="main-content__header">
            <i className={`main-content__header--icon ${iconClasses}`}></i>
            <h2 className="main-content__header--header">{currentPageName}</h2>
        </div>
    )
}

export default MainPageHeader;
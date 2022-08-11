
import './Aside.css';
import Logo from './Logo';
import FixedButton from '../../reusable/buttons/FixedButton/FixedButton';
import NotifyButton from '../../reusable/buttons/NotifyButton/NotifyButton';

function Aside({ asideIsOpen }) {
    return (
        <div className="aside">
            {/* Logo */}
            <Logo
                asideIsShown={asideIsOpen}
            />
            {/* Button Container */}
            <div className="aside__button-container">
                <div className="aside__button-container--top">
                    <FixedButton
                        icon="fa-solid fa-shapes"
                        title="Dashboard"
                        textIsShown={asideIsOpen}
                    />
                    <NotifyButton
                        icon="fa-solid fa-bug"
                        title="Reports"
                        notificationCount={21}
                        textIsShown={asideIsOpen}
                    />
                    <NotifyButton
                        icon="fa-solid fa-envelope"
                        title="Messages"
                        notificationCount={5}
                        textIsShown={asideIsOpen}
                    />
                </div>
                <div className="aside__button-container--bottom">
                    <FixedButton
                        icon="fa-solid fa-gear"
                        title="Settings"
                        textIsShown={asideIsOpen}
                    />
                    <FixedButton
                        icon="fa-solid fa-arrow-right-from-bracket"
                        title="Logout"
                        textIsShown={asideIsOpen}
                    />
                </div>
            </div>
        </div >
    )
}

export default Aside;
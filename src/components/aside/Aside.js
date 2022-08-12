
import './Aside.css';
import Logo from './Logo';
import FixedButton from '../../reusable/buttons/FixedButton/FixedButton';
import NotifyButton from '../../reusable/buttons/NotifyButton/NotifyButton';
import Dropdown from './Dropdown';

function Aside({ asideIsOpen, handleClick, dropdownContentIsShown }) {
    return (
        <aside className="aside">
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
                        handleClick={handleClick}
                    />
                    {asideIsOpen && <Dropdown
                        icon="fa-solid fa-bolt"
                        title="Projects"
                        textIsShown={asideIsOpen}
                    />}
                    {!asideIsOpen && <FixedButton
                        icon="fa-solid fa-bolt"
                        title="Projects"
                        textIsShown={asideIsOpen}
                        handleClick={handleClick}
                    />}
                    <NotifyButton
                        icon="fa-solid fa-bug"
                        title="Reports"
                        notificationCount={21}
                        textIsShown={asideIsOpen}
                        handleClick={handleClick}
                    />
                    <NotifyButton
                        icon="fa-solid fa-envelope"
                        title="Messages"
                        notificationCount={5}
                        textIsShown={asideIsOpen}
                        handleClick={handleClick}
                    />
                </div>
                <div className="aside__button-container--bottom">
                    <FixedButton
                        icon="fa-solid fa-gear"
                        title="Settings"
                        textIsShown={asideIsOpen}
                        handleClick={handleClick}
                    />
                    <FixedButton
                        icon="fa-solid fa-arrow-right-from-bracket"
                        title="Logout"
                        textIsShown={asideIsOpen}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </aside >
    )
}

export default Aside;
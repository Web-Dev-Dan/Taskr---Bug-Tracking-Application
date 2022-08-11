
import './FixedButton.css';

function FixedButton({ icon, title, textIsShown }) {
    function buttonClicked() {
        console.log(`${title} clicked!`);
    }

    return (
        <button onClick={() => buttonClicked()} className="fixed-btn btn-transparent">
            <i className={icon}></i>
            {textIsShown && <h3 className="fixed-btn__title">{title}</h3>}
        </button>
    )
}

export default FixedButton;
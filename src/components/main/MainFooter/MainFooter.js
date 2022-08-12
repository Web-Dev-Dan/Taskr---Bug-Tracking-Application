
import './MainFooter.css';

function MainFooter({ getYear }) {
    return (
        <footer className="footer">
            <p className="footer__text">Taskr was created by <a className="link-transparent" href="https://twitter.com/web_dev_dan" target="_blank" rel="noopener noreferrer">Daniel Healy</a>. Copyright &copy; {getYear()}. All rights reserved.</p>
        </footer>
    )
}

export default MainFooter;
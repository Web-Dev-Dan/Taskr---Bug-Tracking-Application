
import './Main.css';
import MainNav from './MainNav/MainNav';

function Main({ username }) {
    return (
        <main className="main">
            <MainNav
                username={username}
            />
            <div className="main-content">
                main content
            </div>
        </main>
    )
}

export default Main;
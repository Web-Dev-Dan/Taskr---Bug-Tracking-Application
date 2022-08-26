
import MainPageHeader from '../../reusable/headers/MainPageHeader/MainPageHeader';
import './Main.css';
import MainFooter from './MainFooter/MainFooter';
import MainNav from './MainNav/MainNav';
import Dashboard from './pages/Dashboard/Dashboard';
import Logout from './pages/Logout/Logout';
import Messages from './pages/Messages/Messages';
import ProjectPage from './pages/Projects/ProjectPage/ProjectPage';
import Projects from './pages/Projects/Projects';
import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings';
import TaskPage from './pages/Task/TaskPage';

function Main({ currentPageName, updateCurrentPageName, getYear, userData, updateMessageIsRead, updateReportIsRead, createNewProject, openProjectPage, currentProjectId, openProjects, updateInputValue, asideIsOpen, createNewTask, openTaskPage, currentTaskId, currentTaskType, updateCurrentProject, taskBackButtonClicked, updateTaskTitleValue, updateTaskTagValue, updateTaskContentValue, togglePriorityButton, toggleLikeButton, deleteCommentButton, createNewComment, updateCommentInputValue, commentInputValue, deleteProjectButton, deleteTaskButton, changeTaskStatus, openReports, openMessages, deleteMessage, deleteReport }) {
    return (
        <main className="main">
            <MainNav
                currentPageName={currentPageName}
                updateCurrentPageName={updateCurrentPageName}
                userData={userData}
                openProjects={openProjects}
                taskBackButtonClicked={taskBackButtonClicked}
            />
            <div className="main-content">
                {currentPageName === 'Dashboard' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-shapes'
                    />
                    <Dashboard
                        userData={userData}
                        openProjects={openProjects}
                        openReports={openReports}
                        openMessages={openMessages}
                    />
                </div>}
                {currentPageName === 'Projects' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-bolt'
                    />
                    <Projects
                        userData={userData}
                        createNewProject={createNewProject}
                        updateCurrentPageName={updateCurrentPageName}
                        openProjectPage={openProjectPage}
                        asideIsOpen={asideIsOpen}
                    />
                </div>}
                {currentPageName === 'Reports' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-bug'
                    />
                    <Reports
                        userData={userData}
                        updateReportIsRead={updateReportIsRead}
                        deleteReport={deleteReport}
                    />
                </div>}
                {currentPageName === 'Messages' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-envelope'
                    />
                    <Messages
                        userData={userData}
                        updateMessageIsRead={updateMessageIsRead}
                        deleteMessage={deleteMessage}
                    />
                </div>}
                {currentPageName === 'Settings' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-gear'
                    />
                    <Settings />
                </div>}
                {currentPageName === 'Logout' && <div>
                    <MainPageHeader
                        currentPageName={currentPageName}
                        iconClasses='fa-solid fa-arrow-right-from-bracket'
                    />
                    <Logout />
                </div>}
                {currentPageName === 'Project Page' && <div>
                    <ProjectPage
                        // userData={userData}
                        currentProjectId={currentProjectId}
                        project={userData.projects.filter(project => project.id === currentProjectId)[0]}
                        updateInputValue={updateInputValue}
                        asideIsOpen={asideIsOpen}
                        createNewTask={createNewTask}
                        openTaskPage={openTaskPage}
                        deleteProjectButton={deleteProjectButton}
                    />
                </div>}
                {currentPageName === 'Task Page' && <div>
                    <TaskPage
                        userData={userData}
                        currentProjectId={currentProjectId}
                        currentTaskId={currentTaskId}
                        currentTaskType={currentTaskType}
                        updateCurrentProject={updateCurrentProject}
                        updateTaskTitleValue={updateTaskTitleValue}
                        updateTaskTagValue={updateTaskTagValue}
                        updateTaskContentValue={updateTaskContentValue}
                        togglePriorityButton={togglePriorityButton}
                        toggleLikeButton={toggleLikeButton}
                        deleteCommentButton={deleteCommentButton}
                        createNewComment={createNewComment}
                        updateCommentInputValue={updateCommentInputValue}
                        commentInputValue={commentInputValue}
                        deleteTaskButton={deleteTaskButton}
                        changeTaskStatus={changeTaskStatus}
                    />
                </div>}
            </div>
            <MainFooter
                getYear={getYear}
            />
        </main>
    )
}

export default Main;
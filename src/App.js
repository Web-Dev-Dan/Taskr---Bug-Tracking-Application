
import { useState } from 'react';
import './App.css';
import Aside from './components/aside/Aside';
import IconButton from './reusable/buttons/IconButton/IconButton';

function App() {
  // --- Aside ---
  const [asideIsOpen, setAsideIsOpen] = useState(true);
  // Toggle Aside
  function toggleAside() {
    setAsideIsOpen(!asideIsOpen);
  }
  // Open Aside
  function openAside() {
    setAsideIsOpen(true);
  }


  return (
    <div className="App">
      <div className="container">
        <div className={asideIsOpen ? 'aside-container' : 'aside-container aside-container-disabled'}>
          <IconButton
            iconClass={`aside-container__button ${asideIsOpen ? 'fa-solid fa-angles-left' : 'fa-solid fa-angles-right'}`}
            handleClick={() => toggleAside()}
          />
          <Aside
            asideIsOpen={asideIsOpen}
          />
        </div>
        <div className="main-container">
        </div>
      </div>
    </div >
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
     <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <button className="mode-toggle" onClick={toggleMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <header>
        <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      </header>
      <main>
        <p>
          This is a simple one-page portfolio website with dark and light mode.
        </p>
        {/* Add your portfolio content here */}
      </main>
    </div>
    </>
  )
}

export default App

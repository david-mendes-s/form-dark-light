import { useState } from 'react';
import {FiSun, FiMoon} from 'react-icons/fi';
import './styles/global.css';

function App() {

  const [darkTheme, setDarkTheme] = useState('');
  
  function handleDarkTheme(){
    darkTheme === 'dark' ? setDarkTheme('') : setDarkTheme('dark');
  }

  return (
    <div className={darkTheme}>
      <div className="h-screen w-full flex items-center justify-center dark:bg-gray-900">
        <button
          className='text-gray-600 dark:text-white 
          p-2 
          border-2 rounded-md border-dashed border-gray-600 dark:border-white'
          onClick={handleDarkTheme}
          >
            {darkTheme === 'dark' ?  <FiMoon size={20}/> : <FiSun size={20}/>}
          </button>
      </div>
    </div>
    
  )
}

export default App
